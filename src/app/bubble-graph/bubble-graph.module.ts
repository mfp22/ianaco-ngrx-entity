import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// components
import * as fromComponents from './components';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
})
export class BubbleGraphModule {}
