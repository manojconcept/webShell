# 1. creating promise
```js

/* promise is an object */

let promise = new Promise(/* callback */)
/* callback parameters
1. resolve
2. reject
*/

/*
initial state
state --> pending
result --> undefined

either resolve or reject

resolve 
state --> fullfilled 
result --> value

reject 
state --> rejected
result --> error


*/

let promise = new Promise((resolve,reject)=>{
    /*executor*/
})

let promise = new Promise((res,rej)=>setTimeout(()=>res("completed"),5000));

/*
promise.then(handle fullfilled,handle rejected)
promise.then((res)=>console.log(res),(error)=>console.error(error))
*/






``` 

<hr>
``

```js
let result = [{
    name:"zooma",
    age:300,
    planet:"mars"
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

console.log(JSON.stringify(result));
```

output

```json
'[{"name":"zooma","age":300,"planet":"mars","type":"alien"},{"name":"donkey","age":32,"planet":"earth","type":"animal"},{"name":"yash","age":35,"planet":"earth","type":"human"}]'
```



