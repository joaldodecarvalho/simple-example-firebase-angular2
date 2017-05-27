import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MotorcyclesService {

  errorHandler = error => console.error('MotorcyclesService error', error);
  private baseUrl = 'https://api-teste-27-05.firebaseio.com/';
  private collection = 'motos';

  constructor(private http: Http) { }

  addMotorcycle(motorcycle) {
    const json = JSON.stringify(motorcycle);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getMotorcycles() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeMotorcycle(motorcycle) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${motorcycle.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateMotorcycle(motorcycle) {
    const json = JSON.stringify({
      modelo: motorcycle.modelo,
      ano: motorcycle.ano
    });
    return this.http.patch(`${this.baseUrl}/${this.collection}/${motorcycle.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        modelo: parsedResponse[id].modelo,
        ano: parsedResponse[id].ano
      }))
      .sort((a, b) => a.modelo.localeCompare(b.modelo));
  }

}
