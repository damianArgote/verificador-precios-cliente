import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArchivoService } from '../../services/archivo.service';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { LoadFileResponse } from '../../interfaces/load-file.response';


@Component({
  selector: 'app-load-file-page',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,SpinnerComponent
  ],
  templateUrl: './loadFilePage.component.html',
  styleUrl: './loadFilePage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoadFilePageComponent {

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    file:[null,Validators.required]
  });

  public archivoService = inject(ArchivoService);
  public isLoading = signal(false);
  public resp = signal<LoadFileResponse | undefined>(undefined);


  handleSubmit(){
    this.isLoading.set(true)
    this.archivoService.copiarPlanilla(this.form.get('file')?.value)
    .subscribe(resp => {
      this.isLoading.set(false);
      this.resp.set(resp);
      this.form.get('file')?.reset(null)

    })

  }

  handleChange(event: any){
    this.form.get('file')?.setValue(event.target.files[0])
  }

  setAlerta(ok:boolean): string{
    const clases = 'mt-10 text-center rounded-md p-3 mx-5';
    return ok? `${clases} bg-red-300` : `${clases} bg-green-300`

  }

  alertaMsg(ok:boolean): string{
    return ok ? 'bg-amber-300 mt-10 text-center  rounded-md p-3 mx-5' : 'bg-red-300 mt-10 text-center  rounded-md p-3 mx-5'
  }

}
