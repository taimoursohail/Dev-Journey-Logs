function whosPaying(names) {
  
    var  names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    
    var y = Math.floor(Math.random() * names.length); 
    
    var z = names[y]; 
    
    return z + " is going to buy lunch today!";
    
}

console.log(whosPaying());
