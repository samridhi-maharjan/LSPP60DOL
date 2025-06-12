let marks=[80,89,76,98,45,68,56];
console.log(marks);
console.log(marks.length);
console.log(marks[6]);


// looping in arrays
let names=["hari" , "sita" ,"rita" , "ram" , "tom" , "bob" ,"brian" ,"taylor", "neesha"];
let n=names.length;
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}

// for of
for(let x of names){
    console.log(x.toUpperCase());
}

// practice1
let stu_marks=[50, 56, 89, 95, 62, 37,79,88,49, 58];
let l=stu_marks.length;
let sum=0;
for(let i=0;i<l;i++){
    sum=stu_marks[i]+sum;
}
let avg=sum/l;
console.log("the average marks is", +avg);

// using for of
let s=0;
for(let a of stu_marks){
    s=s+a;
}
let av=s/l;
console.log("the average marks is", +av);

// array methods
// push
let foods=["apple", "cake", "momo"];
console.log(foods);
foods.push("water","chips","chicken fry");
console.log(foods);
// pop
let d=foods.pop();
console.log("removed:", d);
// toString()->converts array to string
console.log(stu_marks.toString());
// concat()
let list1=["a", "b","c","d","e"];
let list2=["f", "g","h","i","j"];
let list3=["1", "2","3","4","5"];
let c=list1.concat(list2,list3);
console.log(c);

// unshift()-> works like push, pushes at the bottom
// shift()-> works like pop, pops out from bottom

// slice() -> returns the part from indicated start to end (doesnt change original array)
console.log(stu_marks.slice(2,6)); //gives value from start to end_value-1

// splice()->changes original array(add,remove,replace)
// splice(startIndex, delIndex, newElement)
let list=["ram","shyam","sita","hari","rita"];
list.splice(2,2,"bubbly","mandy");
console.log(list);