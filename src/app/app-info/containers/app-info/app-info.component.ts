import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// feature module
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-app-info',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
})
export class AppInfoComponent {
  animationMap: { [key: string]: boolean } = {};

  /**
   * on in view
   */
  onInView(event: string) {
    this.animationMap[event] = true;
  }
}
