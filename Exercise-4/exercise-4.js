var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    return input;
}
console.log(dataHandling2(input));
//dataHandling2(input);

var ttl = input[3].split('/');

var newBulan = Number(ttl[1]);
var joinArray = ttl.join('-');
switch(newBulan){
    case 1:
        newBulan = 'Januari';
    break;
    case 2:
        newBulan = 'Februari';
    break;
    case 3:
        newBulan = 'Maret';
    break;
    case 4:
        newBulan = 'April';
    break;
    case 5:
        newBulan = 'Mei';
    break;
    case 6:
        newBulan = 'Juni';
    break;
    case 7:
        newBulan = 'Juli';
    break;
    case 8:
        newBulan = 'Agustus';
    break;
    case 9:
        newBulan = 'September';
    break;
    case 10:
        newBulan = 'Oktober';
    break;
    case 11:
        newBulan = 'November';
    break;
    case 12:
        newBulan = 'Desember';
    break;
    default:
        newBulan = 'Input tidak valid.';
}
console.log(newBulan);

var sorting = ttl.sort(function(a, b){return b - a});

console.log(sorting);

console.log(joinArray);

var karakter = input[1].slice(0,14);
console.log(karakter);