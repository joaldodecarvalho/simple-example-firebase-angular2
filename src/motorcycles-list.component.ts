import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'motorcycle-list',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let motorcycle of motorcycles">
          <td class="hidden-xs hidden-sm">{{motorcycle.modelo}}</td>
          <td class="hidden-xs hidden-sm">{{motorcycle.ano}}</td>
          <td>
            <button (click)="onEdit(motorcycle)" class="btn btn-primary">
              <span class="glyphicon glyphicon-pencil"></span>
              <span class="hidden-xs">Edit</span>
            </button>
            <button (click)="onRemove(motorcycle)" class="btn btn-danger">
              <span class="glyphicon glyphicon-trash"></span>
              <span class="hidden-xs">Delete</span>
            </button>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class MotorcyclesListComponent {

  @Input() motorcycles = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  onEdit(motorcycle) {
    this.edit.emit(motorcycle);
  }

  onRemove(motorcycle) {
    this.remove.emit(motorcycle);
  }

}
