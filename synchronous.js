let naikApa = prompt(`Mau naik mobil atau motor?  `);
let jarakTempuh = parseInt(
  prompt(`Masukkan Jarak tempuh antar titik  = ... km  `)
);
let ride = {
  harga: null,
  jarak: function (bayar) {
    this.harga = bayar * 7000;
  },
  kendaraan: function (naik) {
    if (naik === "mobil") {
      this.harga -= 0;
    } else if (naik === "motor") {
      this.harga -= 5000;
    } else {
      alert(
        `maaf,kendaraan tidak ada dalam daftar.Silahkan isi sesuai daftar yang ada`
      );
    }
  },
};
ride.jarak(jarakTempuh);
ride.kendaraan(naikApa);
alert(`
  Anda telah memesan Gojeg dengan memilih kendaraan ${naikApa},
  Dengan jarak tempuh ${jarakTempuh} km,
  Dan total biaya adalah Rp.${ride.harga}
`);
