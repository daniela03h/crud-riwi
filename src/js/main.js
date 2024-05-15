import '../scss/styles.scss';
import * as bootstrap from 'bootstrap'
import { coders } from "../../public/data/database.js"
import { create, deleteItem, index } from './oprations.js';
import { alertSmallSuccess } from './alert.js';

const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.querySelector("form")
let idParaActualizar

index(coders, tbody)

form.addEventListener("submit", function (event) {
    if (idParaActualizar === undefined) {
        create(name, lastName, email, coders)
        alertSmallSuccess("Saved")
    } else {
        for ( const coder of coders) {
            if (coder.id == idParaActualizar) {
                coder.name = name.value
                coder.lastName = lastName.value
                coder.email = email.value
            }
        }
        alertSmallSuccess("uodated")
        idParaActualizar = undefined
    }

    form.reset()
    index(coders, tbody)
    event.preventDefault()
})


table.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-danger")) {
        const idParaEliminar = event.target.getAttribute("data-id")
        // console.log(idParaEliminar);

        // const idToDelete = event.target.parentElement.parentElement.firstElementChild.textContent 
        // console.log(idToDelete);

        // coders.forEach((coder, index) => {
        //     if (coder.id == idParaEliminar) {
        //         coders.splice(index, 1)

        //     }
        // });
        deleteItem(coders, idParaEliminar)
        alertSmallSuccess("coder deleted")
        index(coders, tbody)
    }

    if (event.target.classList.contains("btn-warning")) {
        idParaActualizar = event.target.getAttribute("data-id")

        const userFound = coders.find(coder => coder.id == idParaActualizar)
        name.value = userFound.name
        lastName.value = userFound.lastName
        email.value = userFound.email
    }
})