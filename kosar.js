
let kosar = [];

export function kosarLetrehoz() {
    let kosarTabla = `
        <div class="table-responsive">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Név</th>
                        <th>Kép</th>
                        <th>Szín</th>
                        <th>Méret</th>
                        <th>Darab</th>
                        <th>Ár</th>
                    </tr>
                </thead>
                <tbody class="kosar-tartalom"></tbody>
            </table>
        </div>
    `;
    return kosarTabla;
}

export function kosarMegjelenit() {
    let kosarTabla = kosarLetrehoz();
    $('.kosar-tartalom').html(kosarTabla);
}

export function kosarbaRak() {
    $('.termekek').on('click', '.kosarbaRak', function() {
        let kartya = $(this).closest('.card');
        let nev = kartya.find('.ciponev').text();
        let szin = kartya.find('.card-text').find('.szin').text();
        let meret = kartya.find('.card-text').find('.meret').val();
        let darab = 1; 

        
        let termek = {
            nev: nev,
            szin: szin,
            meret: meret,
            darab: darab,
            ar: kartya.find('.card-text').find('.ar').text() 
        };

        kosar.push(termek);

        kosarMegjelenit();
        kosarFrissit();
    });
}

function kosarFrissit() {
    let osszeg = 0;
    let kosarTartalom = $('.kosar-tartalom');
    kosarTartalom.empty();
    
    kosar.forEach(function(termek) {
        osszeg += termek.ar * termek.darab;
        let sor = `
            <tr>
                <td>${termek.nev}</td>
                <td><img src="${termek.kep}" alt="${termek.nev}" style="max-width: 100px;"></td>
                <td>${termek.szin}</td>
                <td>${termek.meret}</td>
                <td>${termek.darab}</td>
                <td>${termek.ar} Ft</td>
            </tr>
        `;
        kosarTartalom.append(sor);
    });
    $('#kosarosszeg').empty().append(osszeg);
}
export function kosarTorles() {
    $('.kosar').on('click', '.delete-btn', function() {
        let index = $(this).closest('tr').index();
        kosar.splice(index, 1);
        kosarMegjelenit();
        kosarFrissit();
        darabSzamFrissites();
    });
}

export function kosarSzamol(){
    let osszeg = 0;
    kosar.forEach(element => {
        osszeg += parseInt(element.ar);
    });
    return osszeg;
}

export function kosarOsszeg(){
    let osszeg = kosarSzamol();
    $('#kosarosszeg').empty().append(osszeg);
}

export function darabSzamFrissites() {
    let darab = kosar.length;
    $('.darabSzam').text(`db: ${darab}`);
}