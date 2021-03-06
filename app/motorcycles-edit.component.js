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
    var MotorcyclesEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MotorcyclesEditComponent = (function () {
                function MotorcyclesEditComponent() {
                    this.motorcycle = {};
                    this.clear = new core_1.EventEmitter();
                    this.save = new core_1.EventEmitter();
                }
                MotorcyclesEditComponent.prototype.onClear = function () {
                    this.clear.emit();
                };
                MotorcyclesEditComponent.prototype.onSave = function () {
                    this.save.emit(this.motorcycle);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MotorcyclesEditComponent.prototype, "motorcycle", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MotorcyclesEditComponent.prototype, "clear", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MotorcyclesEditComponent.prototype, "save", void 0);
                MotorcyclesEditComponent = __decorate([
                    core_1.Component({
                        selector: 'motorcycle-edit',
                        template: "\n      <div class=\"form-group\">\n        <label for=\"modelo\" class=\"col-lg-2 control-label\">Modelo</label>\n        <input type=\"text\" [(ngModel)]=\"motorcycle.modelo\"\n            placeholder=\"Modelo\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"ano\" class=\"col-lg-2 control-label\">Ano</label>\n          <input type=\"number\" [(ngModel)]=\"motorcycle.ano\"\n            placeholder=\"Ano\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"imagem\" class=\"col-lg-2 control-label\">Url Imagem</label>\n          <input type=\"text\" [(ngModel)]=\"motorcycle.urlImage\"\n            placeholder=\"URL Imagem\" style=\"width: 50%;\">\n      </div>      \n\n      <button (click)=\"onSave()\" class=\"btn btn-success\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n        <span class=\"hidden-xs\">Salvar</span>\n      </button>\n      <button (click)=\"onClear()\" class=\"btn btn-warning\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n        <span class=\"hidden-xs\">Limpar</span>\n      </button>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], MotorcyclesEditComponent);
                return MotorcyclesEditComponent;
            }());
            exports_1("MotorcyclesEditComponent", MotorcyclesEditComponent);
        }
    }
});
