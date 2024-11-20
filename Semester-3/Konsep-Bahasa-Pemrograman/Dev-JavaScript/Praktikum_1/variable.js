// penggunaan const
const id = 123;
let usernama = "Konsep Bahasa Pemrograman";

console.log(id);
console.log(usernama);

// penggunaan let
let username = "KBP kelas B";
console.log("Sebelum diubah: ", username);

username = "KBP kelas A";
console.log("Setelah diubah: ", username);

// aturan penamaan pada variable tidak boleh sama
const name = "Dicoding";
const legal = "LLC";

const nama = "jacob";
const division = "HRD";

// pengecualian dengan menggunakan function
function printCompanyInfo() {
  const name = "Chalisun Firifqah"; // <- nama variable sama
  const legal = "LLC";
  console.log(`Company name:`, name);
  console.log(`Legal type:`, legal);
}

function printEmployeeInfo() {
  const nama = "jhon"; // <- nama variable sama
  const division = "IT";
  console.log(`Employee name:`, nama);
  console.log(`Division:`, division);
}
printCompanyInfo();
printEmployeeInfo();

// pengecualian nama variable hanya menggunakan karakter tertentu VERSI BENAR
const firstName = "Fulan";
const lastName = "Lestari";
const $message = "Hello, World!";
const userId1 = 123;
const userId2 = 456;

// pengecualian nama variable hanya menggunakan karakter tertentu VERSI SALAH
const fist-name = "Fulan"; // tidak boleh mengandung karakter
const last name = "Lestari"; // tidak boleh mengandung spasi
const @message = "Hello, World!"; // tidak boleh mengandung karakter @

// pengecualian Variabel Tidak Boleh Diawali dengan Angka VERSI BENAR
const firstName = "Fulan";
const _secondName = "Lestari";

// pengecualian Variabel Tidak Boleh Diawali dengan Angka VERSI SALAH
const 1stName = "Fulan"; 
const 2ndName = "Lestari";