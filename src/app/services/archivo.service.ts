import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { buscarProductoUseCase, copiarPlanillaUseCase } from '../use-case';
import { BuscarProductoResponse } from '../interfaces/buscar-producto.response';
import { LoadFileResponse } from '../interfaces/load-file.response';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {


  buscarProducto(prompt: string): Observable<BuscarProductoResponse>{
    return from(buscarProductoUseCase(prompt));
  }

  copiarPlanilla(file: any):Observable<LoadFileResponse>{
    return from(copiarPlanillaUseCase(file))
  }

}
