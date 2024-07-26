let promise = new Promise((res,rej)=>setTimeout(()=>res("activated"),5000));
let promise2 = new Promise((res,rej)=>setTimeout(()=>rej("inActivated"),5000));

promise.finally(() => alert("Promise ready")).then(res=>console.log(res)).catch(error=>console.error(error));
promise2.finally(() => alert("Promise ready")).then(res=>console.log(res)).catch(error=>console.error(error));


promise.then((res)=>{alert(`fullfield ${res}`)},(error)=>{alert(`rejected ${error}`)})
promise2.then((res)=>{alert(`fullfield ${res}`)},(error)=>{alert(`rejected ${error}`)})

//only capturing the fullfield
promise.then((res)=>{alert(`fullfield ${res}`)});
//only capturing the rejected
promise2.then(null,(error)=>console.error(error)); /* or */ promise2.catch(error=>console.error(error));


// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise.then(alert);