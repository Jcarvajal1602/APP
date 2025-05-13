import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService, Producto } from '../../services/producto/producto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  productos: Producto[] = [];
  newProducto: Producto = { nombre: '', descripcion: '', completado: false };

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  addProducto(): void {
    this.productoService.addProducto(this.newProducto).subscribe((producto) => {
      this.productos.push(producto);
      this.newProducto = { nombre: '', descripcion: '', completado: false };
    });
  }

  editProducto: Producto | null = null;

  edit(producto: Producto): void {
    this.editProducto = { ...producto };
  }

  updateProducto(): void {
    if (this.editProducto) {
      this.productoService.updateProducto(this.editProducto).subscribe(updated => {
        const index = this.productos.findIndex(t => t.id === updated.id);
        if (index > -1) this.productos[index] = updated;
        this.editProducto = null;
      });
    }
  }

  deleteProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(t => t.id !== id);
    });
  }
}
