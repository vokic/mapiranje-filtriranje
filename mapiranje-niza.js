//const kvadriraj = x => x * x

function kvadriraj (x){
    return x * x
}

const niz = [2, 56, 8, 7, 68, 75, 2, 45, 6, 33, 254]

const noviNiz = niz.map(String)

console.log(noviNiz)

const imena = ["Marko", "Aca", "Vuk", "Nidza"]
const mapiranaImena = imena.map(ime => `<h1>${ime}</h1>`)
console.log(mapiranaImena)