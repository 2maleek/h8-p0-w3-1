function mengelompokkanAngka(arr) {
    
    var hasil = [];
    var genap = [];
    var ganjil = [];
    var kelipatan = [];
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] % 2 === 0){
            genap.push(arr[i]);
        }
    }
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] % 2 === 1){
            ganjil.push(arr[i]);
        }
    }
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] % 3 === 0){
            kelipatan.push(arr[i]);
        }
    }




    return hasil;

  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]