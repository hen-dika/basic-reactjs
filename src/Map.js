import React from "react";

const makanans = [
  {
    makanan: "Sate",
    harga: 14000,
  },
  {
    makanan: "Mie Ayam",
    harga: 8000,
  },
  {
    makanan: "Kremes",
    harga: 11000,
  },
  {
    makanan: "Pecel",
    harga: 5000,
  },
];

// Reduce
const total_bayar = makanans.reduce((total_harga, makanan) => {
  return total_harga + makanan.harga;
}, 0);

const total_bayar1 = makanans.reduce(
  (total_harga, makanan) => total_harga + makanan.harga,
  0
);

const Map = () => {
  return (
    <div>
      <h2>Simple MAP</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <li>
            {index + 1} - {makanan.makanan}-{makanan.harga}
          </li>
        ))}
      </ul>

      <h2>MAP Filter</h2>
      <p>Harga lebih dari 8000</p>
      <ul>
        {makanans
          .filter((makanan) => makanan.harga > 8000)
          .map((makanan, index) => (
            <li>
              {index + 1} - {makanan.makanan}-{makanan.harga}
            </li>
          ))}
      </ul>
      <h3>Total Harga: {total_bayar}</h3>
      <h3>Total Harga: {total_bayar1}</h3>
    </div>
  );
};

export default Map;
