// Fungsi untuk menjalankan kalkulator
function hitung(operator, angka1, angka2) {
    let hasil;

    //switch case untuk menentukan operasi metamatika berdasarkan operator
    switch (operator) {
        case '+':
            //operasi penambahan 
            hasil = angka1 + angka2;
            break;
        case '-':
            //operasi pengurangan
            hasil = angka1 + angka2;
            break;
        case '*':
            //operasi perkalian
            hasil = angka1 * angka2;
            break;
        case '/':
            //operasi pembagian
            hasil = angka1 / angka2;
            break;
            
    }
