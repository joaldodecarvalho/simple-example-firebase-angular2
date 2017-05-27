import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'motorcycle-edit',
  template: `
      <div class="form-group">
        <label for="modelo" class="col-lg-2 control-label">Modelo</label>
        <input type="text" [(ngModel)]="motorcycle.modelo"
            placeholder="Modelo">
      </div>
      <div class="form-group">
        <label for="ano" class="col-lg-2 control-label">Ano</label>
          <input type="number" [(ngModel)]="motorcycle.ano"
            placeholder="Ano">
      </div>
      <div class="form-group">
        <label for="imagem" class="col-lg-2 control-label">Url Imagem</label>
          <input type="text" [(ngModel)]="motorcycle.urlImage"
            placeholder="URL Imagem" style="width: 50%;">
      </div>      

      <button (click)="onSave()" class="btn btn-success">
        <span class="glyphicon glyphicon-ok"></span>
        <span class="hidden-xs">Salvar</span>
      </button>
      <button (click)="onClear()" class="btn btn-warning">
        <span class="glyphicon glyphicon-remove"></span>
        <span class="hidden-xs">Limpar</span>
      </button>
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
