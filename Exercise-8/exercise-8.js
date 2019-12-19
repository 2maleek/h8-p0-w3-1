function pasanganTerbesar(num) {

    var numString = num.toString();
    var number1 = 0;
    var number2 = 0;
    var salah = '';
    for(var i = 0 ; i <= numString.length - 2 ; i ++){
        salah = '';
        number1 = Number(numString[i] + numString[i + 1]);
            for(var j = i ; j <= numString.length - i - 2 ; j++){
                number2 = Number(numString[j] + numString[j + 1]);
                if(number1 >= number2){
                    salah += '';
                }
                else{
                    salah += 'salah';
                }

            }
        if(salah === ''){
            return number1;
        }
        else{
            salah = '';
        }
        

    }


  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99