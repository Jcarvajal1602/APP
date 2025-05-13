import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  completado: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private servicesUrl = 'http://127.0.0.1:8000/producto/';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.servicesUrl);
  }

  addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.servicesUrl, producto);
  }

  updateProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.servicesUrl}${producto.id}/`, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.servicesUrl}${id}/`);
  }

}
