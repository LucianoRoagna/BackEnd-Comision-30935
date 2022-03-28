let i = 0

const timer = setTimeout(
    ()=>{
    console.log(i++)
    if(i<10){
        clearInterval(timer)
    }
   
    
},2000)