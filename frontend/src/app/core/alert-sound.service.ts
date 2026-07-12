import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertSoundService {
  readonly enabled = signal(false);
  private context: AudioContext | null = null;

  enable(): void {
    this.context ??= new AudioContext();
    void this.context.resume();
    this.enabled.set(true);
  }

  toggle(): void {
    if (this.enabled()) {
      this.enabled.set(false);
      return;
    }
    this.enable();
  }

  playOverload(): void {
    if (!this.enabled() || !this.context) {
      return;
    }

    const now = this.context.currentTime;
    for (const delay of [0, .22]) {
      const oscillator = this.context.createOscillator();
      const gain = this.context.createGain();
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(780, now + delay);
      gain.gain.setValueAtTime(.1, now + delay);
      gain.gain.exponentialRampToValueAtTime(.001, now + delay + .16);
      oscillator.connect(gain).connect(this.context.destination);
      oscillator.start(now + delay);
      oscillator.stop(now + delay + .16);
    }
  }
}
