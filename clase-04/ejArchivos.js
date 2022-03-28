const fs = require('fs')



/* fs.writeFile('prueba.txt','probando...',(err)=>{
    if(err){
        console.log(err)
        console.log('termine')
    }else{
        fs.readFile('prueba.txt','uft-8',(err,res)=>{
            if(err){
                console.log(err)
            }else{
                console.log(res)
            }
            console.log('termine')
        })
    }
})
 */


//----------TRY CATCH---------------//
/* try{
fs.writeFileSync('prueba.txt','probando...'.repeat(10))
const result = fs.readFileSync('prueba.txt','utf-8')
console.log(result)
}catch(err){
    console.log(err)
}finally{
    console.log('termine')
} */


// ---------------PROMESAS---------------- //
/* fs.promises.writeFile('prueba.txt', 'probando...'.repeat(10))

    .then(() => {
        return fs.promises.readFile('prueba.txt', 'uft-8')
    })
    .then((datos) => {
        console.log(datos)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log('termine')
    })
 */


    //--------------ASYNC AWAIT--------------//
async function trabajarConArchivos(){
try{
   await fs.promises.writeFile('prueba.txt', 'probando...'.repeat(10))

   
    const datos =  await  fs.promises.readFile('prueba.txt', 'utf-8')
  
   console.log(datos)
    
}catch(err)  {
        console.log(err)
}finally {
        console.log('termine')
    }
}


    


trabajarConArchivos()
console.log(10 + 10)
 
