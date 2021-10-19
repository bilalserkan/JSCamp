console.log("Serkan Bilal YILDIZHAN")

let dolarDun = 9.20
let dolarBugun = 9.30

const euroDun= 11.20
// const için yeni değer atamıyoruz. read only
//console.log(`Euro Dün Fiyatı=${euroDun}TL`)
let konutKredileri = ["Konut Kredisi" , "Taşıt Kredisi", "İhtiyaç Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

//console.log(konutKredileri)