
const brojevi = [2, 56, 8, 7, 68, 75, 2, , 3, 45, 6, 33, 254]
const imena = ["Marko", "Aca", "Vuk", "Nidza", "Mujo"]

//brojevi veci od 17
const punoletni = brojevi(broj => broj >= 17)

//imena druza od 3 karaktera
const punoletni = imena.filter(x => imena.length > 3)

//imena koja pocinju na slovo M
const punoletni = imena.filter(nesto => nesto.startsWith("M"))
