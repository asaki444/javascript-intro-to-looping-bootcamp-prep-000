function forLoop(arr){
  for(var i = 1; i <=25; i++){
    if(i == 1){
      arr.push("I am 1 strange loop.")
    }
    else{
      arr.push(`I am ${i} strange loops.`)
    }
  }
 return arr;
}

function whileLoop(n){
 while(n >= 0){
   if(n == 0){
     return "done";
   }
   n--
   console.log(n);
 }
}

function doWhileLoop(arr){
  do{
    arr.pop();
  }
  while(
    arr.length>0
  )
 return arr;
}
