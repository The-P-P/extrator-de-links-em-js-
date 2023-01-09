 function extraiLinks(arrLinks){
    return arrLinks.map((objetoLinks) => Object.values(objetoLinks).join())
 }
 
 
 export default function listaValidade(listaLinks){
    return extraiLinks(listaLinks)
}