import { Injectable } from '@angular/core';
import {CodigoControl} from '../modelos/codigo-control.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CodigoControlService {
  public codigoControl: CodigoControl;
  constructor(private http: HttpClient) { }


  GetCodigoControl(){
    return this.http.post(`${environment.apiUrl}CodigoControl`, this.codigoControl);
  }
}
