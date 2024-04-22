import { CIPOK } from "./adatok.js";
import { tablazatLetrehoz, tablaMegjelenit, kartyakMegjelenit, tipusValasztas} from "./fuggvenyek.js";

console.log(CIPOK)
let lista = { array: CIPOK };
let tablazat = tablazatLetrehoz(lista);
tablaMegjelenit(tablazat);


$(".rendezes").change(tipusValasztas);
tipusValasztas();
kartyakMegjelenit();