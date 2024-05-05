import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { ArchivoService } from '../../services/archivo.service';
import { Producto } from '../../interfaces/producto.interface';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-consultar-page',
  standalone: true,
  imports: [
    CommonModule,
    SpinnerComponent
  ],
  templateUrl: './consultarPage.component.html',
  styleUrl: './consultarPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConsultarPageComponent {

  @ViewChild('inputPrompt') inputElement!: ElementRef<HTMLInputElement>;

  public producto = signal<Producto | undefined>(undefined);
  public msg = signal<string | undefined>(undefined);
  public isLoading = signal(false);
  public archivoService = inject(ArchivoService)

  handleEnter(){

    const prompt = this.inputElement.nativeElement.value;
    this.isLoading.set(true);
    this.archivoService.buscarProducto(prompt)
    .subscribe(resp => {
      if(!resp.msg){
        this.producto.set({
          ...resp.producto
        });
        this.msg.set(undefined)
      }else{

        this.msg.set(resp.msg);
        this.producto.set(undefined);
      }
      this.inputElement.nativeElement.value=''
      this.isLoading.set(false)
    })
  }
 }
