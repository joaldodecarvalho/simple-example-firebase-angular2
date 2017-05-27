System.register(['@angular/core', './motorcycles.service'], function(exports_1, context_1) {
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
    var core_1, motorcycles_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (motorcycles_service_1_1) {
                motorcycles_service_1 = motorcycles_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(motorcyclesService) {
                    this.motorcyclesService = motorcyclesService;
                    this.motorcycles = [];
                    this.editableMotorcycle = {};
                    motorcyclesService.errorHandler = function (error) {
                        return window.alert('Oops! The server request failed.');
                    };
                    this.reload();
                }
                AppComponent.prototype.clear = function () {
                    this.editableMotorcycle = {};
                };
                AppComponent.prototype.edit = function (motorcycle) {
                    this.editableMotorcycle = Object.assign({}, motorcycle);
                };
                AppComponent.prototype.remove = function (motorcycle) {
                    var _this = this;
                    this.motorcyclesService.removeMotorcycle(motorcycle)
                        .then(function () { return _this.reload(); });
                };
                AppComponent.prototype.save = function (motorcycle) {
                    var _this = this;
                    if (motorcycle.id) {
                        this.motorcyclesService.updateMotorcycle(motorcycle)
                            .then(function () { return _this.reload(); });
                    }
                    else {
                        this.motorcyclesService.addMotorcycle(motorcycle)
                            .then(function () { return _this.reload(); });
                    }
                    this.clear();
                };
                AppComponent.prototype.reload = function () {
                    var _this = this;
                    return this.motorcyclesService.getMotorcycles()
                        .then(function (motorcycles) { return _this.motorcycles = motorcycles; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'motorcycle-app',
                        template: "\n    <motorcycle-edit [motorcycle]=\"editableMotorcycle\"\n      (save)=\"save($event)\" (clear)=\"clear()\"></motorcycle-edit>\n    <motorcycle-list [motorcycles]=\"motorcycles\"\n      (edit)=\"edit($event)\" (remove)=\"remove($event)\"></motorcycle-list>\n  ",
                    }), 
                    __metadata('design:paramtypes', [motorcycles_service_1.MotorcyclesService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
