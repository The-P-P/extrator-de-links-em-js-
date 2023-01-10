import chalk from "chalk";

 function extraiLinks(arrLinks){
    return arrLinks.map((objetoLinks) => Object.values(objetoLinks).join())
 }

 async function checaStatus(listaURLs){
    const arrStatus = await Promise.all(

        listaURLs.map(async (url) => {
            try{
                const res = await fetch(url)
                return res.status

            }
            catch (erro){
                return manejaErros(erro)
                
            }
        })

    )
    return arrStatus;
 }

 function manejaErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'link nao encontrato'
    }
    else{
        return 'ocorreu algum erro'
    }
}
 
 export default async function listaValidade(listaLinks){
    const links =  extraiLinks(listaLinks)
    const status = await checaStatus(links)

    return listaLinks.map((objeto, indice) => ({
        ...objeto, 
        status: status[indice]
    }))
}



