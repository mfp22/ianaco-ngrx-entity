import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import * as fromComponents from './components';
// pipes
import * as fromPipes from './pipes';

@NgModule({
  declarations: [...fromComponents.components, ...fromPipes.pipes],
  imports: [CommonModule],
  exports: [...fromComponents.components, ...fromPipes.pipes],
})
export class SharedModule {}
