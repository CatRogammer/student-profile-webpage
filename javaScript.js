let a="4+5";
let b="3+2";
let c="42-3";
let d="1-78";
let arr=[];
arr.push(a);
arr.push(b);
arr.push(c);
arr.push(d);
function findInString(str, word) {
  return str.includes(word);
}
function calc(a){
    let [left, right]=a.split(/[\+\-\*\/]/);
    left=parseInt(left);
    right=parseInt(right);
    const sum=(left,right)=>left+right;
    const subt=(left,right)=>left-right;
    const div=(left,right)=>left/right;
    const mul=(left,right)=>left*right;
    if(findInString(a,"+"))
        return sum(left,right);
    if(findInString(a,"-"))
        return subt(left,right);
    if(findInString(a,"/"))
        return div(left,right);
    if(findInString(a,"*"))
        return mul(left,right);
}
for(let i of arr){
    console.log(calc(i));
}

