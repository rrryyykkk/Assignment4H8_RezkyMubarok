// storage
const storageName = localStorage.getItem("name");
const storageRole = localStorage.getItem("role");
const storageAvailability = localStorage.getItem("availability");
const storageUsia = localStorage.getItem("usia");
const storageLokasi = localStorage.getItem("lokasi");
const storagePengalaman = localStorage.getItem("pengalaman");
const storageEmail = localStorage.getItem("email");

// Fill
let isiNama = document.getElementById("fillName");
let isirole = document.getElementById("fillRole");
let isiAvailability = document.getElementById("fillAvailabillity");
let isiUsia = document.getElementById("fillUsia");
let isiLokasi = document.getElementById("fillLokasi");
let isiPengalaman = document.getElementById("fillPengalaman");
let isiEmail = document.getElementById("fillEmail");

if (storageName) isiNama.innerText = storageName;
if (storageRole) isirole.innerText = storageRole;
if (storageAvailability) isiAvailability.innerText = storageAvailability;
if (storageUsia) isiUsia.innerText = storageUsia;
if (storageLokasi) isiLokasi.innerText = storageLokasi;
if (storagePengalaman) isiPengalaman.innerText = storagePengalaman;
if (storageEmail) isiEmail.innerText = storageEmail;
