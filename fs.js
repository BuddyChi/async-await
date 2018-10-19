async function main(){
    pack();
    await f4();
}

async function pack(){    
        let random = parseInt(Math.random()*10);
        console.log(random);
        for (let i=0;i<random;i++){
            await zip(i,500*i);
        }
        console.log('pack done')   
}

function zip(i,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(i +': zip done')
            resolve()
        },time)
    })
}

// function f3(){
//     return new Promise((resolve,reject)=>{
//         reject('f3 reject')
//     })
// }

function f4(){
    return new Promise((resolve,reject)=>{
        console.log('f4 done')
        resolve('f4 done')
    })
}


main();


