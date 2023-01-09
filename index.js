import fs from 'fs'
import chalk from 'chalk';

const textotest = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'


function extraiLInks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capituras = [...texto.matchAll(regex)]
    const resultados = capituras.map(capitura => ({[capitura[1]]: capitura[2]}))
    return resultados

}

function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.bgGreen(erro.code, 'nao ha arquivo'));
}

// async/ await

async function pegaArquivo(caminhoAqv){
    try{
        const encoding = 'utf-8'
        const texto  =  await fs.promises.readFile(caminhoAqv, encoding)
        console.log(extraiLInks(texto))

    }
    catch(erro){
        trataErro(erro)
    }
    
}


pegaArquivo('./arquivos/texto.md')
