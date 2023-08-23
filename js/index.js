const boton = document.getElementById("buttonText");
const array = [];
boton.addEventListener("click", () => {
    const input = document.getElementById("inputText").value;
    array.push(input);
    const arrayJSON = JSON.stringify(array);
    localStorage.setItem("Dato", arrayJSON);
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").focus();
});