import {
  postInformation,
  patchInformation,
  deleteInformation,
} from "../../../services/index.js";
import { apiEndPoints } from "../../../config/apiEndPoints.js";
import { clearInput } from "../../../utils/formUtils.js";
import { imprimirHome } from "../components/inicial.js";

export const inicioFormEvents = () => {
  const formInicioPost = document.querySelector("#formInicioPost");
  const formInicioLista = document.querySelector("#formInicioLista");

  //Creamos un nuevo saludo inicial
  if (!formInicioPost) return;
  formInicioPost.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      await postInformation(payload, apiEndPoints.apiHome);
      imprimirHome.getSaludos();
      clearInput(formInicioPost);
    } catch (error) {
      console.error(error);
    }
  });

  //Seleccionamos el saludo que vamos a mostrar
  if (!formInicioLista) return;
  formInicioLista.addEventListener("change", async ({ target }) => {
    const id = target.id;

    try {
      await patchInformation(id, apiEndPoints.apiHome);
    } catch (error) {
      console.error(error);
    }
  });

  //Borramos saludo inicial de la list
  formInicioLista.addEventListener("click", async ({ target }) => {
    const element = target.id;
    if (element != "i-delete") return;
    const id = target.closest(".div-inicial").id;
    try {
      await deleteInformation(id, apiEndPoints.apiHome);
      imprimirHome.getSaludos();
    } catch (error) {
      console.error(error);
    }
  });
};
