// Fungsi untuk menjalankan kalkulator
function hitung(operator, angka1, angka2) {
    let hasil;

    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            if (angka2 === 0) {
                hasil = 'Tidak bisa melakukan pembagian dengan nol';
            } else {
                hasil = angka1 / angka2;
            }
            break;
        case '%':
            hasil = angka1 % angka2;
            break;
        default:
            hasil = 'Operator tidak valid';
    }

    return hasil;
}

// Meminta input dari pengguna
const operator = prompt('Masukkan operator (+, -, *, /, %):');
const angka1 = parseFloat(prompt('Masukkan angka pertama:'));
const angka2 = parseFloat(prompt('Masukkan angka kedua:'));

// Memanggil fungsi hitung dengan input dari pengguna
const hasil = hitung(operator, angka1, angka2);

// Menampilkan hasil perhitungan
console.log(`Hasil dari ${angka1} ${operator} ${angka2} adalah ${hasil}`);
