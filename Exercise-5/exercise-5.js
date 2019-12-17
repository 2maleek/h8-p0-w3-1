function palindrome(kata) {
    var descending = '';
    for (var j = kata.length ; j > 0 ; j--){
        descending += kata[j-1];
    }
    if(kata === descending){
        return true;
    }
    else{
        return false;
    }
    
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  