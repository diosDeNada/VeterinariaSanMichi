const citaBtn = document.getElementById("citaBtn");
const fechaCita = document.getElementById("fechaCita");
const nombreAnimal = document.getElementById("nombreAnimal");
const correo = document.getElementById("correo");

citaBtn.addEventListener("click", () => {
  if (fechaCita.value === "" || nombreAnimal.value === "" || correo.value === "") {
    window.alert("Por favor llenar espacios indicados")
  } else {
    window.alert(`Has agendado una cita en la siguiente fecha ${fechaCita.value}, para ${nombreAnimal.value}. Pronto te enviaremos un correo a ${correo.value} para confirmar y pedirte más datos. Gracias por confiar en Veterinaria San Michi `);
  }
}

);