import { tipusValasztas, kartyakMegjelenit, kereses } from "./fuggvenyek.js";

export function tipusok(){
    $(document).ready(function(){
        $("#rendezes").change(tipusValasztas);
        tipusValasztas();
    });
}

export function kereso(){
    document.getElementById('szuro').addEventListener('input', function() {
        let keresesSzoveg = this.value;
        let szurtCipok = kereses(keresesSzoveg);
        kartyakMegjelenit(szurtCipok);
    }); 
}

