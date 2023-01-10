import chalk from "chalk";
import fs from 'fs'
import pegaArquivo from "./index.js";
import listaValidade from "./http-validacao.js";


const caminho = process.argv

async function imprimeL (valida, resultado, id = ''){
    if (valida){ console.log(
        chalk.yellow('lista validado'),
        chalk.yellow.bgBlue(id),
        await listaValidade(resultado))


    }
    else{
        console.log(
            chalk.yellow('lista de links'),
            chalk.yellow.bgBlue(id),
            resultado)

    }



}


async function processaTexto(argumentos) {
    const caminho =  argumentos[2];
    const valida = argumentos[3] === '--valida';

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
        imprimeL(valida, resultados)

    }
    else if (fs.lstatSync(caminho).isDirectory()){
        const arquivo = await fs.promises.readdir(caminho)
        arquivo.forEach(async (nomeaqv) => {
            const lista = await pegaArquivo(`${caminho}/${nomeaqv}`)
            imprimeL(valida, lista, nomeaqv)
        })
    }

}

processaTexto(caminho);