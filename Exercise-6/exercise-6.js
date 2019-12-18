function angkaPalindrome(num) {
    
    //STRING SEMUA BROO
    do{
        numString = num.toString();
        var numBalik = numString.split('').reverse().join('');
        num ++;
    }while(numString === numBalik);
  }
  return num;

  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

  /* 
num di masukin
num ubah jadi string
num dibalik
kalo salah, num ditambah 1, balik lagi ke nomor 1
kalo bener return num
  
  */