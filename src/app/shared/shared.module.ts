import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// components
import * as fromComponents from './components';
// pipes
import * as fromPipes from './pipes';

@NgModule({
  declarations: [...fromComponents.components, ...fromPipes.pipes],
  imports: [CommonModule, FlexLayoutModule],
  exports: [...fromComponents.components, ...fromPipes.pipes],
})
export class SharedModule {}
