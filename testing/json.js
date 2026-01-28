const details={
    name:"yash",
    age:21
}

const jsonformat=JSON.stringify(details,["name"]);

console.log("Json Format :",jsonformat);

const parseddata=JSON.parse(jsonformat);

console.log("Og object : ", parseddata);

