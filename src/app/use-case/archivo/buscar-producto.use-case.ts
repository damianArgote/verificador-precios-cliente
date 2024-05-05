import { environment } from "../../../environments/environment";


export const buscarProductoUseCase = async (prompt: string) => {

  try {
    const baseUrl = `${environment.backendApi}/archivos`;
    const url = new URL(baseUrl);
    const params = {prompt};
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url);

    return await response.json();

  } catch (error) {
    console.log(error);

  }
}
