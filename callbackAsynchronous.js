const menuKopi = "Caramel Latte";
let hargaTotal = 15000;
function pilihCup(cup) {
  let iniCup = cup;
  if (cup === "besar") {
    hargaTotal += 5000;
  } else if (cup === "sedang") {
    hargaTotal += 3000;
  } else if (cup === "kecil") {
    hargaTotal += 0;
  } else {
    console.log(`Masukkan sesuai menu yang tertera`);
  }
  return iniCup;
}
function pilihToast(toast) {
  let iniToast = toast;
  if (toast === "Spicy Bulgogi") {
    hargaTotal += 10000;
  } else {
    hargaTotal += 0;
  }
  return iniToast;
}
setTimeout(() => {
  function yourMenu(kopi, cup, toast, harga) {
    console.log(`
  ${kopi} dengan Ukuran "${cup}" dan Toast ${toast} Sudah Siap
  Selamat menikmati kak...
  Total Biaya :  Rp${harga}
  Jangan lupa bayar ya...
  `);
  }

  yourMenu(
    menuKopi,
    pilihCup("besar"),
    pilihToast("Spicy Bulgogi"),
    hargaTotal
  );
}, 6000);
setTimeout(() => {
  console.log(`
  Anda telah memilih minuman ${menuKopi},dengan Ukuran "${pilihCup("besar")}"
  Dan Tambahan menu Toast ${pilihToast("Spicy Bulgogi")}
  Kami akan segera mempersiapkannya.Harap tunggu sebentar...
  `);
}, 1500);
setTimeout(() => {
  console.log(`
  Selamat Datang di Kedai Kopi "Janji Jawa"
  Silahkan pilih menu yang ingin anda pesan
`);
}, 100);
