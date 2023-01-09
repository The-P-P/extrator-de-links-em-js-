import fs from 'fs'
import chalk from 'chalk';



function extraiLInks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capituras = [...texto.matchAll(regex)]
    const resultados = capituras.map(capitura => ({[capitura[1]]: capitura[2]}))
    return resultados.length !== 0 ? resultados : chalk.redBright('nao existe links');

}

function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.green(erro.code, 'nao ha arquivo'));
}

// async/ await

async function pegaArquivo(caminhoAqv){
    try{
        const encoding = 'utf-8'
        const texto  =  await fs.promises.readFile(caminhoAqv, encoding)
        return extraiLInks(texto)

    }
    catch(erro){
        trataErro(erro)
    }
    
}


export default pegaArquivo