// strings
let str= "Samridhi Maharjan";
console.log(str[5]);

// template literals:way to have embedded expressions in string(using back-ticks ``, we can write variables along with string)
 let x= `hello world`;
 console.log(x);

 //practice
let obj={
    item: "pen",
    cost:20
};
let output= `the cost of 10 ${obj.item} is ${obj.cost*10} rupees`;
console.log(output);

// escape characters
    // \n:line break, \t: tab,

// string methods(manipulates strings )
let st = "Hello World"
let st2= "universe"
console.log("the string is", st);
console.log("string length = ",st.length);
console.log("uppercase:",st.toUpperCase());
console.log("lowercase:",st.toLowerCase());
console.log("string trim:", st.trim()); //trims white spaces from starting and ending;
console.log("slice:", st.slice(2,7));
console.log("concatenate:",st.concat(st2));
console.log("concatenate:",st2.concat(st));
console.log("replace", st.replace("l","e"));
console.log("replace all", st.replaceAll("l","e"));



// practice question
console.log("practice question");
let namee= prompt("enter your full name");
// let namee= "Samridhi Maharjan";
let n= namee.length;
for(i=0;i<n;i++)
{
    if(namee[i]==" ")
    {
        let m=i;
        break;
    }
}
let lastName= namee.slice(i+1,n);
let firstName=namee.slice(0,i);
let newName=firstName.concat(lastName);
let l=newName.length;
// let userName=newName.concat(l);
console.log("username for ", namee," is :" ,"@"+newName + l);







