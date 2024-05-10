import '../scss/styles.scss';
import * as bootstrap from 'bootstrap'
import { coders } from "../../public/data/database.js"
import { create, index } from './oprations.js';
import { alertSmallSuccess } from './alert.js';

const tbody = document.querySelector("tbody")


const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.querySelector("form")

index(coders, tbody)

form.addEventListener("submit", function(event) {
    create(name, lastName, email, coders)
    alertSmallSuccess("Saved")
    form.reset()
    index(coders, tbody)
    event. preventDefault()
})
