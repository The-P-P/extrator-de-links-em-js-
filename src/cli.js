import chalk from "chalk";
import fs from 'fs'
import pegaArquivo from "./index.js";


const caminho = process.argv

function imprimeL (resultado){
    console.log(chalk.yellow('lista de links'), resultado)


}


async function processaTexto(argumentos) {
    const caminho =  argumentos[2]

    if (fs.lstatSync(caminho).isFile()){
        const resultados = await pegaArquivo(caminho)
        imprimeL(resultados)

    }
    else if (fs.lstatSync(caminho).isDirectory()){
        const arquivo = await fs.promises.readdir(caminho)
        arquivo.forEach(async (nomeaqv) => {
            const lista = await pegaArquivo(`${caminho}/${nomeaqv}`)
            imprimeL(lista)
        })
    }

}

processaTexto(caminho);