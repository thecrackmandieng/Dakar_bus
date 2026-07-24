import { Injectable, OnDestroy, signal } from '@angular/core';

const OVERLOAD_ALARM_DURATION_MS = 3 * 60 * 1000;
const OVERLOAD_PULSE_INTERVAL_MS = 1400;
const OVERLOAD_TONES = [980, 1320, 1080] as const;
const TONE_INTERVAL_SECONDS = .18;
const TONE_DURATION_SECONDS = .14;
const TONE_GAIN = .24;

@Injectable({ providedIn: 'root' })
export class AlertSoundService implements OnDestroy {
  private readonly preferenceStorageKey = 'ddtrack.alert-sound-enabled';
  readonly enabled = signal(localStorage.getItem(this.preferenceStorageKey) === 'true');
  readonly overloadAlarmActive = signal(false);
  private context: AudioContext | null = null;
  private alarmInterval: number | null = null;
  private alarmTimeout: number | null = null;
  private readonly unlockAudio = () => {
    window.removeEventListener('pointerdown', this.unlockAudio);
    window.removeEventListener('keydown', this.unlockAudio);
    if (!this.enabled()) {
      return;
    }
    this.context ??= new AudioContext();
    void this.context.resume().then(() => {
      if (this.overloadAlarmActive()) {
        this.playAlarmPulse();
      }
    });
  };

  constructor() {
    if (this.enabled()) {
      this.registerAudioUnlock();
    }
  }

  enable(): void {
    this.enabled.set(true);
    localStorage.setItem(this.preferenceStorageKey, 'true');
    this.registerAudioUnlock();
    this.unlockAudio();
  }

  toggle(): void {
    if (this.enabled()) {
      this.enabled.set(false);
      localStorage.setItem(this.preferenceStorageKey, 'false');
      this.stopOverload();
      return;
    }
    this.enable();
  }

  playOverload(): void {
    if (!this.enabled() || this.overloadAlarmActive()) {
      return;
    }

    this.overloadAlarmActive.set(true);
    this.registerAudioUnlock();
    this.playAlarmPulse();
    this.alarmInterval = window.setInterval(() => this.playAlarmPulse(), OVERLOAD_PULSE_INTERVAL_MS);
    this.alarmTimeout = window.setTimeout(() => this.stopOverload(), OVERLOAD_ALARM_DURATION_MS);
  }

  ngOnDestroy(): void {
    window.removeEventListener('pointerdown', this.unlockAudio);
    window.removeEventListener('keydown', this.unlockAudio);
    this.stopOverload();
    void this.context?.close();
  }

  private playAlarmPulse(): void {
    if (!this.context || this.context.state !== 'running' || !this.enabled()) {
      return;
    }

    const now = this.context.currentTime;
    for (const [index, frequency] of OVERLOAD_TONES.entries()) {
      const delay = index * TONE_INTERVAL_SECONDS;
      const oscillator = this.context.createOscillator();
      const gain = this.context.createGain();
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(frequency, now + delay);
      gain.gain.setValueAtTime(TONE_GAIN, now + delay);
      gain.gain.exponentialRampToValueAtTime(.001, now + delay + TONE_DURATION_SECONDS);
      oscillator.connect(gain).connect(this.context.destination);
      oscillator.start(now + delay);
      oscillator.stop(now + delay + TONE_DURATION_SECONDS);
    }
  }

  stopOverload(): void {
    if (this.alarmInterval !== null) {
      window.clearInterval(this.alarmInterval);
      this.alarmInterval = null;
    }
    if (this.alarmTimeout !== null) {
      window.clearTimeout(this.alarmTimeout);
      this.alarmTimeout = null;
    }
    this.overloadAlarmActive.set(false);
  }

  private registerAudioUnlock(): void {
    window.addEventListener('pointerdown', this.unlockAudio, { once: true });
    window.addEventListener('keydown', this.unlockAudio, { once: true });
  }
}
