import { environment } from "../../../environments/environment";


export const copiarPlanillaUseCase = async (file:any) =>{

  try {
    const baseUrl = `${environment.backendApi}/archivos`;
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(baseUrl,{
      method: 'POST',
      body: formData
    })

    const data = await response.json();

    return data;

  } catch (error) {
    console.log(error);

  }


}
