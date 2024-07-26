let promise = new Promise((res,rej)=>res("Activated"));
let promise2 = new Promise((res,rej)=>rej("INActivated"));
console.log(promise);
console.error(promise2);

let promise3 = new Promise((res,rej)=>setTimeout(()=>res("activated"),5000));
console.log(promise3);
promise3.then((result)=>console.log(result)).catch((error)=>console.error(error));

let promise4 = new Promise((res,rej)=>setTimeout(()=>rej("inactivated"),5000));
console.log(promise4);
promise4.then((result)=>console.log(result)).catch((error)=>console.error(error));

let result = [{
    name:"zooma",
    age:300,
    planet:"mars",
    type:"alien"
},
{
    name:"donkey",
    age:32,
    planet:"earth",
    type:"animal"
},
{
    name:"yash",
    age:35,
    planet:"earth",
    type:"human"
}
]
result = JSON.stringify(result);
console.log(result)

let userData = new Promise((res,rej)=>setTimeout(()=>res(result),5000));
console.log(userData);
userData.then(res=>console.log(res)).catch(error=>console.error("reject"));

