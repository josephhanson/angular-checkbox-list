import {Component, Input} from '@angular/core';
import SelectItem from '../select-item';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  @Input() item: SelectItem;

  constructor() { }

  onClick() {
    this.item.selected = !this.item.selected;
  }
}
