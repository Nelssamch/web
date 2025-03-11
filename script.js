// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Kuis Interaktif
function cekJawaban() {
    let jawaban = document.querySelector('input[name="q1"]:checked').value;
    let hasil = document.getElementById('hasilKuis');
    if (jawaban === "Jakarta") {
        hasil.innerHTML = "Benar!";
    } else {
        hasil.innerHTML = "Salah, coba lagi!";
    }
}