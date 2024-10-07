class Sensor {
    constructor(nama, lokasi) {
        this.nama = nama;
        this.lokasi = lokasi;
        this._status = "Mati"; 
    }

    aktifkan() { 
        this._status = "Aktif";
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah diaktifkan.`;
    }

    nonaktifkan() { 
        this._status = "Mati";
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah dinonaktifkan.`;
    }

    getStatus() { 
        return `Sensor ${this.nama} di lokasi ${this.lokasi} sedang dalam kondisi ${this._status}.`;
    }
}

class SensorSuhu extends Sensor {
    constructor(nama, lokasi, suhu) {
        super(nama, lokasi);
        this.suhu = suhu; 
    }

    ukurSuhu(suhuBaru) {
        this.suhu = suhuBaru; 
        return `Sensor ${this.nama} di lokasi ${this.lokasi} mengukur suhu: ${this.suhu}°C.`;
    }

    getStatus() {
        return `${super.getStatus()} Suhu saat ini yang diukur adalah ${this.suhu}°C.`;
    }
}

class SensorKetinggianAir extends Sensor {
    constructor(nama, lokasi, ketinggianAir) {
        super(nama, lokasi);
        this.ketinggianAir = ketinggianAir; 
    }

    ukurKetinggianAir(ketinggianBaru) {
        this.ketinggianAir = ketinggianBaru; 
        return `Sensor ${this.nama} di lokasi ${this.lokasi} mengukur ketinggian air: ${this.ketinggianAir} meter.`;
    }

    getStatus() {
        return `${super.getStatus()} Ketinggian air saat ini adalah ${this.ketinggianAir} meter.`;
    }
}

class SensorArus extends Sensor {
    constructor(nama, lokasi, kecepatanArus) {
        super(nama, lokasi);
        this.kecepatanArus = kecepatanArus; 
    }

    ukurArus(kecepatanBaru) {
        this.kecepatanArus = kecepatanBaru;
        return `Sensor ${this.nama} di lokasi ${this.lokasi} mengukur kecepatan arus: ${this.kecepatanArus} km/jam.`;
    }

    getStatus() {
        return `${super.getStatus()} Kecepatan arus saat ini adalah ${this.kecepatanArus} km/jam.`;
    }
}

class SensorSalinitas extends Sensor {
    constructor(nama, lokasi, salinitas) {
        super(nama, lokasi);
        this.salinitas = salinitas; 
    }

    ukurSalinitas(salinitasBaru) {
        this.salinitas = salinitasBaru;
        return `Sensor ${this.nama} di lokasi ${this.lokasi} mengukur salinitas: ${this.salinitas} PPT.`;
    }

    getStatus() {
        return `${super.getStatus()} Salinitas air saat ini adalah ${this.salinitas} PPT.`;
    }
}

class SensorTurbiditas extends Sensor {
    constructor(nama, lokasi, turbiditas) {
        super(nama, lokasi);
        this.turbiditas = turbiditas; 
    }

    ukurTurbiditas(turbiditasBaru) {
        this.turbiditas = turbiditasBaru;
        return `Sensor ${this.nama} di lokasi ${this.lokasi} mengukur turbiditas: ${this.turbiditas} NTU.`;
    }

    getStatus() {
        return `${super.getStatus()} Tingkat kekeruhan air saat ini adalah ${this.turbiditas} NTU.`;
    }
}

class SensorTekananAir extends Sensor {
    constructor(nama, lokasi, tekananAir) {
        super(nama, lokasi);
        this.tekananAir = tekananAir; 
    }

    ukurTekanan(tekananBaru) {
        this.tekananAir = tekananBaru;
        return `Sensor ${this.nama} di lokasi ${this.lokasi} mengukur tekanan air: ${this.tekananAir} bar.`;
    }

    getStatus() {
        return `${super.getStatus()} Tekanan air saat ini adalah ${this.tekananAir} bar.`;
    }
}

// Polymorphism: Fungsi untuk menampilkan status sensor apapun
function tampilkanStatusSensor(sensor) {
    console.log(sensor.getStatus());
}

// Penggunaan polimorfisme dengan berbagai macam sensor:
const sensorSuhu = new SensorSuhu("Sensor Suhu Laut", "Samudera Hindia", 25);
const sensorKetinggianAir = new SensorKetinggianAir("Sensor Ketinggian Air", "Muara Sungai", 5);
const sensorArus = new SensorArus("Sensor Arus Laut", "Samudera Pasifik", 2.5);
const sensorSalinitas = new SensorSalinitas("Sensor Salinitas Laut", "Selat Malaka", 35);
const sensorTurbiditas = new SensorTurbiditas("Sensor Kekeruhan", "Laut Jawa", 15);
const sensorTekananAir = new SensorTekananAir("Sensor Tekanan Air", "Palung Mariana", 1000);

// Polymorphism: Memanggil metode yang sama dari berbagai subclass
tampilkanStatusSensor(sensorSuhu);
tampilkanStatusSensor(sensorKetinggianAir);
tampilkanStatusSensor(sensorArus);
tampilkanStatusSensor(sensorSalinitas);
tampilkanStatusSensor(sensorTurbiditas);
tampilkanStatusSensor(sensorTekananAir);
