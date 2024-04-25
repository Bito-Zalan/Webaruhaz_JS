## Függvények

## main.js
1. init(lista) ebben hivom meg a legtöbb függvényt. a tablazatLetrehoz(lista), tablazatMegjelenit(txt), kartyakLetrehoz(lista), kartyakMegjelenit(kartyak)
    rendezEsemeny(), torolEsemeny.
2. szuresNevszerint() a szuro id-vel ellátott formra irok egy kódot, billentyüzet felengedésnél a szures() fv segitségével szüri a CIPOK listát a felhasználó 
    által beírt szöveg alapján.
3. rendezEsemeny() rendezi a listát az adminfelületen létrehozott táblázatban névszerint.
4. torolEsemeny() ha rákattintok a .torol id-vel ellátott gombra akkor fut le.

## listakezeles.js
1. listaKiir() kiirja a CIPOK elemeit a konzolra.

## fuggvenyek.js
1. tablazatLetrehoz() amely segitségével létrehozok egy táblázatot amit egy későbbi függvényben megtudok jeleníteni. Visszatérési érték: txt
2. tablazatMegjelenit(txt) megjelenitem a táblázatot a megadott divben.
3. kartyakLetrehoz(szurtCipok) létrehozom a kártyákat amelyekben a termékek lesznek leírással. Visszatérési érték: kartyak
4. kartyaMegjelenit(kartyak) a megadott divbe megjelenitem a kártyákat. 
5. tipusValasztas() "rendezes" divben létrehozott formra irok egy kódot hogy a tipus alapján kiválasztott kártyák jelenjenek meg. Itt meghívom a kartyakLetrehoz(szurtCipok) és a kartyakMegjelenit(kartyak) függvényt.

## esemenykezelo.js
1. tipusok() ebben meghivom a tipusValasztas() függvényt.
2. rendez(lista, kulcs, rIrany) szortirozom a listát. Visszatérési érték: rLista.
3. szures(lista, keresesSzoveg) ha felengedem a billentyüzetet a leirt betükhöz keres név alapján. Visszatérési érték: szurtLista
4. torol(lista,index) az admin oldalon lévő táblázatban a törlés gombra kattintva töröl egy elemet.