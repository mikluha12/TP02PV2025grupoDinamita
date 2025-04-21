export const seleccionPaises = (paisSelect, capitalSelect, paisesCapitales) => {
    paisSelect.addEventListener('change', () => {
      const paisSeleccionado = paisSelect.value;
  
      capitalSelect.innerHTML = '';
  
      if (paisSeleccionado) {
        const capital = paisesCapitales[paisSeleccionado];
  
        const option = document.createElement('option');
        option.value = capital;
        option.textContent = capital;
        capitalSelect.appendChild(option);
  
        capitalSelect.disabled = false;
  
        console.log(`País seleccionado: ${paisSeleccionado}`);
        console.log(`Capital correspondiente: ${capital}`);
      } else {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = '-- Seleccioná una capital --';
        capitalSelect.appendChild(option);
        capitalSelect.disabled = true;
      }
    });
  };