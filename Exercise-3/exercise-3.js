//contoh inputnya
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]



for(var i = 0 ; i <= input.length-1 ; i++){
    for(var j = 0 ; j <= input[i].length-1 ; j++){
        var data = '';
        if (j === 0){
            data = 'ID: ';
            console.log(data + input[i][j]);
        }
        else if(j === 1){
            data = 'Nama lengkap: ';
            console.log(data + input[i][j]);
        }
        else if(j === 2){
            data = 'TTL: ' + input[i][j] + ' ' + input[i][j+1];
            console.log(data);
        }
        else if(j === 4){
            data = 'Hobi: ';
            console.log(data + input[i][j]);
        }
        
    }
    data = '';
    console.log('\n');
}