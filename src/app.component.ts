import { Component } from '@angular/core';
import { MotorcyclesService } from './motorcycles.service';

@Component({
  selector: 'motorcycle-app',
  template: `
    <motorcycle-edit [motorcycle]="editableMotorcycle"
      (save)="save($event)" (clear)="clear()"></motorcycle-edit>
    <motorcycle-list [motorcycles]="motorcycles"
      (edit)="edit($event)" (remove)="remove($event)"></motorcycle-list>
  `,
})
export class AppComponent {

  motorcycles = [];
  editableMotorcycle = {};

  constructor(private motorcyclesService: MotorcyclesService) {
    motorcyclesService.errorHandler = error =>
      window.alert('Oops! The server request failed.');
    this.reload();
  }

  clear() {
    this.editableMotorcycle = {};
  }

  edit(motorcycle) {
    this.editableMotorcycle = Object.assign({}, motorcycle);
  }

  remove(motorcycle) {
    this.motorcyclesService.removeMotorcycle(motorcycle)
      .then(() => this.reload());    
  }

  save(motorcycle) {
    if (motorcycle.id) {
      this.motorcyclesService.updateMotorcycle(motorcycle)
        .then(() => this.reload());
    } else {
      this.motorcyclesService.addMotorcycle(motorcycle)
        .then(() => this.reload());
    }
    this.clear();
  }

  private reload() {
    return this.motorcyclesService.getMotorcycles()
      .then(motorcycles => this.motorcycles = motorcycles);
  }

}
