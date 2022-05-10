import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
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
  imports: [CommonModule, RouterModule, FlexLayoutModule, MatListModule],
  exports: [
    ...fromComponents.components,
    ...fromPipes.pipes,
    ...fromDirectives.directives,
  ],
})
export class SharedModule {}
