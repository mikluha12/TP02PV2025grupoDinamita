import { seleccionPaises } from "./seleccion20.js";
const paisesCapitales = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Colombia: "Bogotá",
    México: "Ciudad de México",
    Perú: "Lima"
  };

const paisSelect = document.getElementById('pais');
const capitalSelect = document.getElementById('capital');

for (let pais in paisesCapitales) {
    const option = document.createElement('option');
    option.value = pais;
    option.textContent = pais;
    paisSelect.appendChild(option);
}

seleccionPaises(paisSelect, capitalSelect, paisesCapitales);  