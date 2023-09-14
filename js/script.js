// Fungsi button menu
function persegi() {
    const showPersegi = document.getElementById('persegi');

    if (showPersegi) {
        const content = document.getElementById('main-content');
        content.style.visibility = 'visible';
        showPersegi.style.visibility = 'visible';
        content.style.display = 'flex';

    } else {
        const showPersegiPanjang = document.getElementById('persegi-panjang');
        showPersegiPanjang.style.visibility = 'visible';
        const content = document.getElementById('main-content');
        content.style.visibility = 'visible';
        content.style.display = 'flex';
    }
}

function persegiPanjang() {
    const showPersegiPanjang = document.getElementById('persegi-panjang');

    if (showPersegiPanjang) {
        const content = document.getElementById('main-content');
        content.style.visibility = 'visible';
        content.style.display = 'flex';
        showPersegiPanjang.style.visibility = 'visible';

    } else {
        const showPersegi = document.getElementById('persegi');
        const content = document.getElementById('main-content');
        content.style.visibility = 'visible';
        content.style.display = 'flex';
        showPersegi.style.visibility = 'visible';
    }
}


// Fungsi Perhitungan
function luasPersegi() {
    const sisi = document.getElementById('sisi').value;
    const s = parseInt(sisi);
    
    if (s) {
        const luasPersegi = s * s;
        const errInputSisi = document.getElementById('sisi-error');
        perhitunganLP = document.getElementById('perhitunganLP');
        hasilLP = document.getElementById('hasilLP');
        perhitunganLP.textContent = `L = ${s} x ${s}`;
        hasilLP.textContent = `L = ${luasPersegi}`;
        errInputSisi.style.display = 'none';
        errInputSisi.style.visibility = 'hidden';

    } else {
        const errInputSisi = document.getElementById('sisi-error');
        errInputSisi.style.display = 'block';
        errInputSisi.style.visibility = 'visible';
        errInputSisi.textContent = "Harap masukkan nilai sisi.";
    }
}

function kelilingPersegi() {
    const sisi = document.getElementById('sisi').value;
    const s = parseInt(sisi);
    
    if (s) {
        const kelilingPersegi = 4 * (s);
        const errInputSisi = document.getElementById('sisi-error');
        perhitunganKP = document.getElementById('perhitunganKP');
        hasilKP = document.getElementById('hasilKP');
        perhitunganKP.textContent = `K = 4 x ${s}`;
        hasilKP.textContent = `K = ${kelilingPersegi}`;
        errInputSisi.style.display = 'none';
        errInputSisi.style.visibility = 'hidden';

    } else {
        const errInputSisi = document.getElementById('sisi-error');
        errInputSisi.style.display = 'block';
        errInputSisi.style.visibility = 'visible';
        errInputSisi.textContent = "Harap masukkan nilai sisi.";
    }
}

function luasPersegiPanjang() {
    const panjang = document.getElementById('panjang').value;
    const lebar = document.getElementById('lebar').value;
    const p = parseInt(panjang);
    const l = parseInt(lebar);
    
    if (p && l) {
        const luasPersegiPanjang = p * l;
        const errInputLebar = document.getElementById('lebar-error');
        const errInputPanjang = document.getElementById('panjang-error');
        perhitunganLPP = document.getElementById('perhitunganLPP');
        hasilLPP = document.getElementById('hasilLPP');
        perhitunganLPP.textContent = `L = ${p} x ${l}`;
        hasilLPP.textContent = `L = ${luasPersegiPanjang}`;
        errInputLebar.style.display = 'none';
        errInputPanjang.style.display = 'none';
        errInputLebar.style.visibility = 'hidden';
        errInputPanjang.style.visibility = 'hidden';

    } else if (p) {
        const errInputLebar = document.getElementById('lebar-error');
        const errInputPanjang = document.getElementById('panjang-error');
        errInputLebar.style.display = 'block';
        errInputLebar.style.visibility = 'visible';
        errInputPanjang.style.display = 'none';
        errInputPanjang.style.visibility = 'hidden';
        errInputLebar.textContent = "Harap masukkan nilai lebar.";
        
    } else if (l) {
        const errInputPanjang = document.getElementById('panjang-error');
        const errInputLebar = document.getElementById('lebar-error');
        errInputPanjang.style.display = 'block';
        errInputPanjang.style.visibility = 'visible';
        errInputLebar.style.display = 'none';
        errInputLebar.style.visibility = 'hidden';
        errInputPanjang.textContent = "Harap masukkan nilai panjang.";

    } else {
        const errInputPanjang = document.getElementById('panjang-error');
        const errInputLebar = document.getElementById('lebar-error');
        errInputPanjang.style.display = 'block';
        errInputPanjang.style.visibility = 'visible';
        errInputPanjang.textContent = "Harap masukkan nilai panjang.";
        errInputLebar.style.display = 'block';
        errInputLebar.style.visibility = 'visible';
        errInputLebar.textContent = "Harap masukkan nilai lebar.";
    }
}

function kelilingPersegiPanjang() {
    const panjang = document.getElementById('panjang').value;
    const lebar = document.getElementById('lebar').value;
    const p = parseInt(panjang);
    const l = parseInt(lebar);
    
    if (p && l) {
        const kelilingPersegiPanjang = 2 * (p + l);
        const errInputLebar = document.getElementById('lebar-error');
        const errInputPanjang = document.getElementById('panjang-error');
        perhitunganKPP = document.getElementById('perhitunganKPP');
        hasilKPP = document.getElementById('hasilKPP');
        perhitunganKPP.textContent = `K = 2 x (${p} + ${l})`;
        hasilKPP.textContent = `K = ${kelilingPersegiPanjang}`;
        errInputLebar.style.display = 'none';
        errInputPanjang.style.display = 'none';
        errInputLebar.style.visibility = 'hidden';
        errInputPanjang.style.visibility = 'hidden';

    } else if (p) {
        const errInputLebar = document.getElementById('lebar-error');
        const errInputPanjang = document.getElementById('panjang-error');
        errInputLebar.style.display = 'block';
        errInputLebar.style.visibility = 'visible';
        errInputPanjang.style.display = 'none';
        errInputPanjang.style.visibility = 'hidden';
        errInputLebar.textContent = "Harap masukkan nilai lebar.";
        
    } else if (l) {
        const errInputPanjang = document.getElementById('panjang-error');
        const errInputLebar = document.getElementById('lebar-error');
        errInputPanjang.style.display = 'block';
        errInputPanjang.style.visibility = 'visible';
        errInputLebar.style.display = 'none';
        errInputLebar.style.visibility = 'hidden';
        errInputPanjang.textContent = "Harap masukkan nilai panjang.";

    } else {
        const errInputPanjang = document.getElementById('panjang-error');
        const errInputLebar = document.getElementById('lebar-error');
        errInputPanjang.style.display = 'block';
        errInputPanjang.style.visibility = 'visible';
        errInputPanjang.textContent = "Harap masukkan nilai panjang.";
        errInputLebar.style.display = 'block';
        errInputLebar.style.visibility = 'visible';
        errInputLebar.textContent = "Harap masukkan nilai lebar.";
    }
}


// Fungsi Reset
function resetPersegi() {
    const sisi = document.getElementById('sisi');
    sisi.value = "";
    sisi.setAttribute('placeholder', "Nilai Sisi");

    const perhitunganLP = document.getElementById('perhitunganLP');
    const hasilLP = document.getElementById('hasilLP');
    const perhitunganKP = document.getElementById('perhitunganKP');
    const hasilKP = document.getElementById('hasilKP');
    const errInputSisi = document.getElementById('sisi-error');

    perhitunganLP.textContent = "";
    hasilLP.textContent = "";
    perhitunganKP.textContent = "";
    hasilKP.textContent = "";
    errInputSisi.textContent = "";
}

function resetPersegiPanjang() {
    const panjang = document.getElementById('panjang');
    const lebar = document.getElementById('lebar');
    panjang.value = "";
    lebar.value = "";
    panjang.setAttribute('placeholder', "Nilai Panjang");
    lebar.setAttribute('placeholder', "Nilai Lebar");

    const perhitunganLPP = document.getElementById('perhitunganLPP');
    const hasilLPP = document.getElementById('hasilLPP');
    const perhitunganKPP = document.getElementById('perhitunganKPP');
    const hasilKPP = document.getElementById('hasilKPP');
    const errInputPanjang = document.getElementById('panjang-error');
    const errInputLebar = document.getElementById('lebar-error');

    perhitunganLPP.textContent = "";
    hasilLPP.textContent = "";
    perhitunganKPP.textContent = "";
    hasilKPP.textContent = "";
    errInputPanjang.textContent = "";
    errInputLebar.textContent = "";
}