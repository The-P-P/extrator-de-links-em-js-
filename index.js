import fs from 'fs'
import chalk from 'chalk';


function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'nao ha arquivo'));
}

// async/ await

async function pegaArquivo(caminhoAqv){
    try{
        const encoding = 'utf-8'
        const texto  =  await fs.promises.readFile(caminhoAqv, encoding)
        console.log(chalk.green(texto))

    }
    catch(erro){
        trataErro(erro)
    }
    
}




// promises com then()

// function pegaArquivo(caminhoAqv){
//     const encoding = 'utf-8'
//     fs.promises.readFile(caminhoAqv, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro)

// }

// function pegaArquivo(caminhoAqv){
//     const encoding = 'utf-8'
//     fs.readFile(caminhoAqv, encoding, (erro, texto) =>{
//         if (erro){
//             trataErro(erro);
//         }

//         console.log(chalk.green(texto))

//     } )
// }

pegaArquivo('./arquivos/texto.md')
