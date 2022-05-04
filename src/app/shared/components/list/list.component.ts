import { Component, Input, Output, EventEmitter } from '@angular/core';
// models
import { Item } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() items: Item<any>[] | null = null;
  @Input() activeItem: Item<any> | null = null;
  @Input() horizontal: boolean = false;
  @Output() handleClick = new EventEmitter<Item<string>>();

  /**
   * on click
   */
  onClick(item: Item<string>) {
    this.handleClick.emit(item);
  }
}
