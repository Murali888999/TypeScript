let s1 = "java tech" ;
let s2 = s1.substring(2,4);
console.log(s2);

let s3;
s3 = "java tech";
let s6="12346";
let s4 = (<string>s3).substring(3,5);
let s5 = (s3 as string).substring(1, 15);
let s7=(s6 as string).substring(2,5);
console.log(s2);
console.log(s4);
console.log(s5);
console.log(s7);