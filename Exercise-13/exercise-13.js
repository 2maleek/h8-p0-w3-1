function targetTerdekat(arr) {
    var jarak = 0;
    var jarakO = 0;
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] === 'o'){
            jarak = 0;
        }else if(arr[i] === 'x'){
            jarak ++;
            return jarak;
        }
        else{
            jarak++;
        }
    }

    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] === 'x'){
            jarakO = 0;
        }else if(arr[i] === 'o'){
            jarakO ++;
            return jarak0;
        }
        else{
            jarakO++;
        }
    }

    if(jarak <= jarakO){
        return jarak;
    }
    else{
        return jarakO;
    }

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
