System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var MotorcyclesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MotorcyclesService = (function () {
                function MotorcyclesService(http) {
                    this.http = http;
                    this.errorHandler = function (error) { return console.error('MotorcyclesService error', error); };
                    this.baseUrl = 'https://api-teste-27-05.firebaseio.com/';
                    this.collection = 'motos';
                }
                MotorcyclesService.prototype.addMotorcycle = function (motorcycle) {
                    var json = JSON.stringify(motorcycle);
                    return this.http.post(this.baseUrl + "/" + this.collection + ".json", json)
                        .toPromise()
                        .catch(this.errorHandler);
                };
                MotorcyclesService.prototype.getMotorcycles = function () {
                    var _this = this;
                    return this.http.get(this.baseUrl + "/" + this.collection + ".json")
                        .toPromise()
                        .then(function (response) { return _this.convert(response.json()); })
                        .catch(this.errorHandler);
                };
                MotorcyclesService.prototype.removeMotorcycle = function (motorcycle) {
                    return this.http.delete(this.baseUrl + "/" + this.collection + "/" + motorcycle.id + ".json")
                        .toPromise()
                        .catch(this.errorHandler);
                };
                MotorcyclesService.prototype.updateMotorcycle = function (motorcycle) {
                    var json = JSON.stringify({
                        modelo: motorcycle.modelo,
                        ano: motorcycle.ano,
                        urlImage: motorcycle.urlImage
                    });
                    return this.http.patch(this.baseUrl + "/" + this.collection + "/" + motorcycle.id + ".json", json)
                        .toPromise()
                        .catch(this.errorHandler);
                };
                MotorcyclesService.prototype.convert = function (parsedResponse) {
                    return Object.keys(parsedResponse)
                        .map(function (id) { return ({
                        id: id,
                        modelo: parsedResponse[id].modelo,
                        ano: parsedResponse[id].ano,
                        urlImage: parsedResponse[id].urlImage
                    }); })
                        .sort(function (a, b) { return a.modelo.localeCompare(b.modelo); });
                };
                MotorcyclesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MotorcyclesService);
                return MotorcyclesService;
            }());
            exports_1("MotorcyclesService", MotorcyclesService);
        }
    }
});
