function targetTerdekat(arr) {
    
    var posisiO;
    var posisiX = [];
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] === 'o'){
            posisiO = i;
        }
        else if(arr[i] === 'x'){
            posisiX.push(i);
        }
    }
    
    var sementara = [];
    for(var i = 0 ; i < posisiX.length ; i ++){
        sementara[sementara.length] = posisiX[i] - posisiO;
        if(sementara[i] < 0){
            sementara[i] = sementara[i] - (sementara[i] * 2)
        }
    }



    for(var i = 0 ; i < sementara.length ; i ++){
        var terdekat = sementara[0];
        if(sementara[i] < terdekat){
            terdekat = sementara[i];
        }
    }
    if(sementara.length === 0){
        return 0;
    }else{
        return terdekat;
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
