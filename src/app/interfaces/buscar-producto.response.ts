import { Producto } from "./producto.interface";

export interface BuscarProductoResponse {
  ok:       boolean;
  producto: Producto;
  msg?:string
}

