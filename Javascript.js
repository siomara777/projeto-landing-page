
const formulario = document.querySelector(".Formulario form")


formulario.addEventListener("submit", ( event ) => {
    event.preventDefault() 

    const inputs = document.querySelectorAll(".inputUser")
    inputs.forEach((input) => {
        input.value = ""


    })
    alert("Muito obridaga pela preferência")

})



