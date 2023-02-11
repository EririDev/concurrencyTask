let akun = prompt(`Masukkan Nama Akunmu = `);
let id = parseInt(prompt(`Masukkan 6 digit nomor id mu = `));
let dmBiru = parseInt(prompt(`Masukkan Jumlah Dm yang ingin kamu beli`));

function main(akun, id, jumlah, harga) {
  alert(`
  Permintaanmu akan segera diproses.
  Silahkan cek data berikut: 

  Nama Akun : ${akun}
  Nama ID : ${id}
  Jumlah Dm : ${jumlah}
  Total Biaya :  ${harga}
  `);
}
function rego(jumlahDm) {
  const hasil = jumlahDm * 500;
  return hasil;
}
main(akun, id, dmBiru, rego(dmBiru));
