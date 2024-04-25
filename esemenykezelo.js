import { tipusValasztas } from "./fuggvenyek.js";

export function tipusok(){
    $(document).ready(function(){
        $("#rendezes").change(tipusValasztas);
        tipusValasztas();
    });
}

export function rendez(lista,kulcs, rIrany){
    const rlista = lista.sort(function(c1,c2){
        return c1[kulcs]<c2[kulcs]?-1*rIrany:1*rIrany;
    });
    return rlista;
}

export function szures(lista, keresesSzoveg){
    const szurtLista = lista.filter(function(cipo){
        return cipo.nev.toUpperCase().includes(keresesSzoveg.toUpperCase());
    })
    return szurtLista;
}

export function torol(lista, index){
    lista.splice(index, 1);
    return lista;
}

