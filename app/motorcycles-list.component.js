System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MotorcyclesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MotorcyclesListComponent = (function () {
                function MotorcyclesListComponent() {
                    this.motorcycles = [];
                    this.edit = new core_1.EventEmitter();
                    this.remove = new core_1.EventEmitter();
                }
                MotorcyclesListComponent.prototype.onEdit = function (motorcycle) {
                    this.edit.emit(motorcycle);
                };
                MotorcyclesListComponent.prototype.onRemove = function (motorcycle) {
                    this.remove.emit(motorcycle);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MotorcyclesListComponent.prototype, "motorcycles", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MotorcyclesListComponent.prototype, "edit", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MotorcyclesListComponent.prototype, "remove", void 0);
                MotorcyclesListComponent = __decorate([
                    core_1.Component({
                        selector: 'motorcycle-list',
                        template: "\n    <div class=\"panel panel-default\">\n      <table class=\"table table-striped\">\n        <tr *ngFor=\"let motorcycle of motorcycles\">\n          <td class=\"hidden-xs hidden-sm\">{{motorcycle.modelo}}</td>\n          <td class=\"hidden-xs hidden-sm\">{{motorcycle.ano}}</td>\n          <td class=\"hidden-xs hidden-sm\">{{motorcycle.imagemUrl}}</td>\n          <td>\n            <button (click)=\"onEdit(motorcycle)\" class=\"btn btn-primary\">\n              <span class=\"glyphicon glyphicon-pencil\"></span>\n            </button>\n            <button (click)=\"onRemove(motorcycle)\" class=\"btn btn-danger\">\n              <span class=\"glyphicon glyphicon-trash\"></span>\n            </button>\n          </td>\n          \n          <img *ngIf=\"motorcycle.urlImage\" src=\"{{motorcycle.urlImage}}\" alt=\"Imagem {{motorcycle.modelo}}\" \n            height=\"250\" width=\"350\">\n        </tr>\n      </table>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], MotorcyclesListComponent);
                return MotorcyclesListComponent;
            }());
            exports_1("MotorcyclesListComponent", MotorcyclesListComponent);
        }
    }
});
