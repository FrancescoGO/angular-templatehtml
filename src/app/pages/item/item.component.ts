import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id = '';
  producto: ProductoDescripcion;

  constructor(private activatedRoute: ActivatedRoute,
              public productosService: ProductosService) {}

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params.id;

    this.productosService.cargarProducto(this.id)
                         .subscribe((producto: ProductoDescripcion) => {
                           this.producto = producto;
                           console.log(producto);
                         });

  }

}
