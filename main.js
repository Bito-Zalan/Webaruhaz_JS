import { CIPOK } from "./adatok.js";
import { tablazatLetrehoz, tablaMegjelenit, kartyakMegjelenit, tipusValasztas} from "./fuggvenyek.js";
import { tipusok, kereso } from "./esemenykezelo.js";

console.log(CIPOK)
let lista = { array: CIPOK };
let tablazat = tablazatLetrehoz(lista);
tablaMegjelenit(tablazat);

tipusok();
kereso();


