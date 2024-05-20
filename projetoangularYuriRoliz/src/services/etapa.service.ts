import { HttpClient } from '@angular/common/http';import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtapaService {

  constructor(private http: HttpClient) { }

  private readonly API = "http://academico3.rj.senac.br/etapa"
  getEtapas(): Observable<any> {
    return this.http.get(`${this.API}`, {});
  }
}
