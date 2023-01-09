import chalk from "chalk";
import fs from 'fs'
import pegaArquivo from "./index.js";


const caminho = process.argv

function imprimeL (resultado, id = ''){
    console.log(
        chalk.yellow('lista de links'),
        chalk.yellow.bgBlue(id),
        resultado)


}


async function processaTexto(argumentos) {
    const caminho =  argumentos[2];

    try{
        fs.lstatSync(caminho);

    }catch(erro){
        if(erro.code === 'ENOENT'){
            console.log(chalk.red('arquivo ou diretorio nao existe'))
            return;
        }

    }

    if (fs.lstatSync(caminho).isFile()){
        const resultados = await pegaArquivo(caminho)
        imprimeL(resultados,  )

    }
    else if (fs.lstatSync(caminho).isDirectory()){
        const arquivo = await fs.promises.readdir(caminho)
        arquivo.forEach(async (nomeaqv) => {
            const lista = await pegaArquivo(`${caminho}/${nomeaqv}`)
            imprimeL(lista, nomeaqv)
        })
    }

}

processaTexto(caminho);