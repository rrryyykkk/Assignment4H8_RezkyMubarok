function updateData() {
  let newName = document.getElementById("updateName").value;
  let newRole = document.getElementById("updateRole").value;
  let newAvailability = document.getElementById("updateAvailability").value;
  let newUsia = document.getElementById("updateUsia").value;
  let newLokasi = document.getElementById("updateLokasi").value;
  let newPengalaman = document.getElementById("updatePengalaman").value;
  let newEmail = document.getElementById("updateEmail").value;

  if (newName) {
    localStorage.setItem("name", newName);
  }
  if (newRole) {
    localStorage.setItem("role", newRole);
  }
  if (newAvailability) {
    localStorage.setItem("availability", newAvailability);
  }
  if (newUsia) {
    localStorage.setItem("usia", newUsia);
  }
  if (newLokasi) {
    localStorage.setItem("lokasi", newLokasi);
  }
  if (newPengalaman) {
    localStorage.setItem("pengalaman", newPengalaman);
  }
  if (newEmail) {
    localStorage.setItem("email", newEmail);
  }
  window.location.href = "index.html";
}
