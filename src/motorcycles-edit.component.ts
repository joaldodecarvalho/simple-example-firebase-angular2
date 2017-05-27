import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'motorcycle-edit',
  template: `
    <div class="panel panel-primary">
      <div class="panel-body">
        <input type="text" [(ngModel)]="motorcycle.modelo"
          placeholder="Modelo" style="width: 25%;">
        <input type="number" [(ngModel)]="motorcycle.ano"
          placeholder="Ano" style="width: 50%;">
        <button (click)="onSave()" class="btn btn-primary">
          <span class="glyphicon glyphicon-ok"></span>
        </button>
        <button (click)="onClear()" class="btn btn-warning">
          <span class="glyphicon glyphicon-remove"></span>
        </button>
      </div>
    </div>
  `,
})
export class MotorcyclesEditComponent {

  @Input() motorcycle = {};
  @Output() clear = new EventEmitter();
  @Output() save = new EventEmitter();

  onClear() {
    this.clear.emit();
  }

  onSave() {
    this.save.emit(this.motorcycle);
  }

}
