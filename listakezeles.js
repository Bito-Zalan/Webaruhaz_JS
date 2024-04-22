import { CIPOK } from "./adatok.js";

function listaKiir(){
    for (let index = 0; index < CIPOK.length; index++) {
        const element = CIPOK[index];
        console.log(element);
        console.log(CIPOK[index]);
    }
}

listaKiir();