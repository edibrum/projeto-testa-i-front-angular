import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.css']
})
export class ComplexTableComponent implements OnInit {

  @Input() Columns :any[] = [];
  @Input() DataList :any[] = []; 
  @Output() onView = new EventEmitter<any>();
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  view(item: any) {
    debugger;
    this.onView.emit(item);
  }

  edit(item: any) {
    debugger;
    this.onEdit.emit(item);
  }

  delete(item: any) {
    debugger;
    this.onDelete.emit(item);
  }
}
