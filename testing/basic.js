const data={
    name:"Yash",
    age:21
}

const result1= data?.name; 
const result2= data &&  data.name;

// console.log("Result 1 :", result1);
// console.log("Result 2 :", result2);


// const implicitreturn= ()=>({name:"Yash"});
const implicitreturn= ()=>{ return ({name:"Yash"})};

const explicit =()=> { return 23};


// console.log(implicitreturn());
console.log(explicit);


