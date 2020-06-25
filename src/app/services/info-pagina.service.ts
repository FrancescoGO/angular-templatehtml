import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {

    // Leer el archivo JSON

    this.http.get('assets/data/data-pagina.json')
             .subscribe((resp: InfoPagina) => {
              //  console.log(resp);
                this.info = resp;
                this.cargada = true;
             });

  }

  private cargarEquipo() {

    this.http.get('https://angular-html-2cc54.firebaseio.com/equipo.json')
             .subscribe((resp: any) => {
              //  console.log(resp);
                this.equipo = resp;
                this.cargada = true;
                console.log(this.equipo);
             });

  }

}
