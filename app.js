//arrey inbuild functions
var num = [345, 512, 345, 12, 13]

for (var i of num) {
    console.log(i);
}
for (var i in num) {
    console.log(i);
}

//map function
num.map((i) => { console.log(i); })

//for each function
num.forEach((i)=>{
    console.log(i);
})

// filter function
var newArrey =  num.filter((el)=>{
return el > 12
})
console.log(newArrey);

//arrey inbuild functions
var number =[12,24,36,48,60]
console.log(number);
for(var i of number)
console.log(i);
for(var i in number)
console.log(i);

//map function
number.map((i)=>{console.log(i);})
number.forEach((i)=>{console.log(i);})

//filter function
newarrey = number.filter((el)=>{
    return el >24
})
console.log(newarrey);

function add(a,b) {
    console.log(a+b);
}
add(3,2)


