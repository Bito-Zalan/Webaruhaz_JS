import { CIPOK } from "./adatok.js";

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

  szurtCipok.forEach((cipo) => {
    kartyak += `
        <div class="card text-white bg-dark mb-3" style="width: 20rem">
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
          <button type="button" class="btn btn-success">Kosárba</button>
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
  if (kivalasztottTipus === "Összes") {
    szurtCipok = CIPOK;
  } else {
    szurtCipok = CIPOK.filter((cipo) => cipo.tipus.includes(kivalasztottTipus));
  }
  let kartyak = kartyakLetrehoz(szurtCipok);
  kartyakMegjelenit(kartyak);
}


