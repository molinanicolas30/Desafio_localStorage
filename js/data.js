const datoRecibido = JSON.parse(localStorage.getItem("Dato"));

const span = document.getElementById("data");
const ul = document.createElement("ul");
span.appendChild(ul)
for (let i = 0; i < datoRecibido.length; i++){
   const dato = datoRecibido[i];
   const li = document.createElement("li");
   li.innerHTML = dato;
   ul.appendChild(li);
}
