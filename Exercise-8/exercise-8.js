function pasanganTerbesar(num) {

    var numString = num.toString().split('');
    var number = [];
    for(var i = 0 ; i < numString.length - 1 ; i++){
        number[i] = Number(numString[i] + numString[i+1]);
    }
    var terbesar = number[0];
    for(var j = 1 ; j < number.length ; j++){
        if(number[j] > terbesar){
            terbesar = number[j];
        }
    }
    return terbesar;


  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99