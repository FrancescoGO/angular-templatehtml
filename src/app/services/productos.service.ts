import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargado = false;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos(){

    this.http.get('https://angular-html-2cc54.firebaseio.com/productos_idx.json')
             .subscribe((resp: Producto[]) => {
                console.log(resp);
                this.productos = resp;
                this.cargado = true;
             });

  }

}
