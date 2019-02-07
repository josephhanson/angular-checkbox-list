import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {EntryComponent} from './entry/entry.component';
import Payload from './payload';
import SelectItem from './select-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('toggle') toggle: ElementRef;
  @ViewChildren('entries') entries: QueryList<EntryComponent>;

  private _items: SelectItem[];
  private _payload: Payload[];

  get items(): SelectItem[] {
    return this._items;
  }

  get payload(): Payload[] {
    return this._payload;
  }

  get count(): number {
    return this.entries ? this.entries
      .filter((el: EntryComponent) => el.item.selected).length : 0;
  }

  toggleAll() {
    if (this.toggle.nativeElement.checked) {
      this.selectAll();
    } else {
      this.unselectAll();
    }
  }

  selectAll() {
    this.entries.forEach((el: EntryComponent) => el.item.selected = true);
  }

  unselectAll() {
    this.entries.forEach((el: EntryComponent) => el.item.selected = false);
    this.toggle.nativeElement.checked = false;
  }

  process() {
   this._payload = this.entries
     .filter((el: EntryComponent) => el.item.selected)
     .map((c) => ({value: c.item.value, display: c.item.display}));
  }

  ngOnInit() {
    this._items = [
      <SelectItem>{selected: false, value: 1, display: 'One'},
      <SelectItem>{selected: false, value: 2, display: 'Two'},
      <SelectItem>{selected: false, value: 3, display: 'Three'},
      <SelectItem>{selected: false, value: 4, display: 'Four'},
      <SelectItem>{selected: false, value: 5, display: 'Five'},
      <SelectItem>{selected: false, value: 6, display: 'Six'},
    ];
  }

  reset() {
    this._payload = undefined;
    this.unselectAll();
  }
}
