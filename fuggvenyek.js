import { CIPOK } from "./adatok.js";
import { kosarbaRak, kosarTorles, kosarSzamol } from "./kosar.js";


kosarTorles();
kosarSzamol();
const index = 0;
kosarbaRak(CIPOK[index]);
export function tablazatLetrehoz(lista) {
  let txt = `<div class="table-responsive">
    <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Név</th>
        <th>Kép</th>
        <th>Típus</th>
        <th>Méret</th>
        <th>Szín</th>
        <th>Készlet</th>
        <th>Szerkesztés</th>
        <th>Törlés</th>
      </tr>
    </thead>
    <tbody>`;
  CIPOK.forEach((element, index) => {
    txt += `
            <tr>
                <td class="adminszoveg">${element.nev}</td>
                <td><img class="adminkep" src="${element.kep}" alt="kep"></td>
                <td class="adminszoveg">${element.tipus}</td>
                <td class="adminszoveg">${element.meret}</td>
                <td class="adminszoveg">${element.szin}</td>
                <td class="adminszoveg">${element.db}db</td>
                <td class="szerkesztgomb"><button id = "${index}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
              </svg></button></td>
                <td class="adminszoveg"><button id="${index}" class="torol">🗑️</button></td>
            </tr>
        `;
  });
  txt += "</tbody></table></div>";
  return txt;
}

export function tablaMegjelenit(txt) {
  const ELEM = $(".tablazat"); 
  ELEM.html(txt);
}

export function kartyakLetrehoz(szurtCipok) {
  let kartyak = "";

  szurtCipok.forEach((cipo, index) => {
    kartyak += `
        <div class="card text-white bg-dark mb-3" style="width: 19rem">
        <img src="${cipo.kep}" class="card-img-top" alt="${cipo.tipus}">
        <div class="card-body">
          <p class="ciponev">${cipo.nev}</p>
          <label>Elérhető méretek:</label>
          <select id="meret" class="form-select text-white bg-dark mb-3">
            ${cipo.meret.map(meret => `<option value="${meret}">${meret}</option>`).join('')}
          </select>
          <p class="card-text">
            
            Szín: ${cipo.szin}<br />
            Ár: ${cipo.ar} Ft<br />
            Készleten: ${cipo.db}db
          </p>
          <button data-id="${index}" type="button" class="btn btn-success kosarbaRak">Kosárba</button>
        </div>
      </div>
    `;
  });
  return kartyak;
}

export function kartyakMegjelenit(kartyak) {
  const kartyakContainer = $(".termekek");
  console.log(kartyakContainer)
  kartyakContainer.html(kartyak);
}



export function tipusValasztas() {
  let kivalasztottTipus = $("#rendezes").val();
  let szurtCipok = [];
  if (kivalasztottTipus === "osszes") {
    szurtCipok = CIPOK;
  } else {
    szurtCipok = CIPOK.filter((cipo) => cipo.tipus.includes(kivalasztottTipus));
  }
  let kartyak = kartyakLetrehoz(szurtCipok);
  kartyakMegjelenit(kartyak);
}



