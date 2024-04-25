import { CIPOK } from "./adatok.js";
import { tablazatLetrehoz, tablaMegjelenit, kartyakLetrehoz, kartyakMegjelenit} from "./fuggvenyek.js";
import { tipusok, szures, torol, rendez } from "./esemenykezelo.js";

console.log(CIPOK)
let lista = CIPOK;
let tablazat = tablazatLetrehoz(lista);
tablaMegjelenit(tablazat);


tipusok();

let rIrany = 1;
init(CIPOK);
szuresNevSzerint();

export function init(lista){
    var txt = tablazatLetrehoz(lista);
    tablaMegjelenit(txt);
    var kartyak = kartyakLetrehoz(lista);
    kartyakMegjelenit(kartyak);
    rendezEsemeny();
    torolEsemeny();
}

function szuresNevSzerint(){
    const szuroELEM = $("#szuro");
    szuroELEM.on("keyup", function(){
        let szoveg = szuroELEM.val();
        init(szures(CIPOK, szoveg));
    })
}

function rendezEsemeny(){
    const nevMezoElem = $(".tablazat table th").eq(0);
    nevMezoElem.on("click", function(){
        const lista = rendez(CIPOK, "nev", rIrany);
        consoleg.log(lista);
        init(lista);
        rIrany*=-1;
    })
}

function torolEsemeny(){
    const torolELEM = $(".torol");
    torolELEM.on("click", function(event){
        let index = event.target.id;
        const LISTA = torol(CIPOK, index);
        init(LISTA);
    });
}


