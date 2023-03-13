function jk(pro){
    document.getElementById('pro').innerHTML=pro
}
    let pr=new Promise(function(resolve,reject){
    let x=0
    if(x==0){
        resolve('ok')
    }
    else{
        reject('error')
    }
   })


pr.then(function(value){
    jk(value)
},function(error){
    jk(error)
})