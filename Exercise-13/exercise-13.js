function targetTerdekat(arr) {
    
    var o = [];
    var x = [];
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] === 'x'){
            x.push(i);
        }else if(arr[i] === 'o'){
            o.push(i);
        }
    }
    if(x.length === 0){
        return 0;
    }else {
        console.log(o);
        console.log(x);
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
