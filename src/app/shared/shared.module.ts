import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
// components
import * as fromComponents from './components';
// pipes
import * as fromPipes from './pipes';
// directives
import * as fromDirectives from './directives';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromPipes.pipes,
    ...fromDirectives.directives,
  ],
  imports: [CommonModule, RouterModule, NgOptimizedImage, MatListModule],
  exports: [
    ...fromComponents.components,
    ...fromPipes.pipes,
    ...fromDirectives.directives,
  ],
})
export class SharedModule {}
