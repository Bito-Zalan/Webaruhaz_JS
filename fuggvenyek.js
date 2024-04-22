import { CIPOK } from "./adatok.js";

export function tablazatLetrehoz(lista) {
  let txt = `<div class="table-responsive">
    <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Típus</th>
        <th>Méret</th>
        <th>Szín</th>
        <th>Készlet</th>
        <th>Törlés</th>
      </tr>
    </thead>
    <tbody>`;
    lista.array.forEach((element, index) => {
        txt += `
            <tr>
                <td>${element.tipus}</td>
                <td>${element.meret}</td>
                <td>${element.szin}</td>
                <td>${element.db}db</td>
                <td><button>🗑️</button></td>
            </tr>
        `;
    });
    txt += "</tbody></table></div>"
    return txt;
}

export function tablaMegjelenit(txt){
    const ELEM = $(".tablazat");
    ELEM.html(txt);
}

export function kartyakLetrehoz() {
    let kartyak = "";

    CIPOK.forEach((cipo) => {
        kartyak += `
        <div class="card text-white bg-dark mb-3" style="width: 20rem">
        <img src="${cipo.kep}" class="card-img-top" alt="${cipo.tipus}">
        <div class="card-body">
          <p class="ciponev">${cipo.tipus}</p>
          <p class="card-text">
            Elérhető méretek: ${cipo.meret}<br />
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

export function kartyakMegjelenit() {
    const kartyakContainer = $(".termekek");
    const kartyak = kartyakLetrehoz();
    kartyakContainer.html(kartyak);
}


export function tipusValasztas(){
    let kivalasztottTipus = $(".rendezes").val();
    let szurtCipok = CIPOK.filter(cipo => cipo.tipus === kivalasztottTipus);
    let kartyak = kartyakLetrehoz(szurtCipok);
    $(".termekek").html(kartyak);
}