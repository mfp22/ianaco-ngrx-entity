import { Component, Input } from '@angular/core';
// models
import { Profile } from '../../models';

@Component({
  selector: 'app-sidenav-profile',
  templateUrl: './sidenav-profile.component.html',
  styleUrls: ['./sidenav-profile.component.scss'],
})
export class SidenavProfileComponent {
  @Input() profile: Profile | undefined;
}
