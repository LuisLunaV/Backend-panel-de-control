import { getInformation } from "../../../services/api-get.js";
import { apiEndPoints } from "../../../config/apiEndPoints.js";

export class ImprimirHome {
  constructor(divRadio) {
    this.divRadio = divRadio;
  }
  async getSaludos() {
    try {
      const { allHomeInfo } = await getInformation(apiEndPoints.apiHome);

      if (!allHomeInfo.length) return;
      this.imprimir(allHomeInfo);
    } catch (error) {
      console.error(error);
    }
  }

  imprimir(data) {
    const formList = document.querySelector("#formInicioLista");

    this.limpiarFormList(formList);

    data.forEach((element) => {
      formList.appendChild(this.divRadio(element));
    });
  }

  limpiarFormList(formList) {
    while (formList.firstChild) {
      formList.removeChild(formList.firstChild);
    }
  }
}
