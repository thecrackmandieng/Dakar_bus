import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly appTitle = "Dakar Bus";
  private readonly links = [
    { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { label: 'Alertes', path: '/alertes', icon: 'alert' },
    { label: 'Bus', path: '/bus', icon: 'bus' },
    { label: 'Lignes', path: '/lignes', icon: 'route' },
    { label: 'Affectation lignes', path: '/affectations-lignes', icon: 'network' },
    { label: 'Stations', path: '/stations', icon: 'station' },
    { label: 'Trajets', path: '/trajets', icon: 'trip' },
    { label: 'Alertes surcharge', path: '/vue-alertes-surcharge', icon: 'load' },
    { label: 'Bus temps reel', path: '/vue-bus-temps-reel', icon: 'radar' },
    { label: 'Paramètres', path: '/parametres', icon: 'settings' }
  ];
  readonly visibleLinks = computed(() => this.auth.isSupervisor()
    ? this.links.filter(link => link.path !== '/parametres')
    : this.links
  );

  constructor(readonly auth: AuthService) {
    document.title = this.appTitle;
  }
}
