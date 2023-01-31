function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isWorking = false;
}

// метод для включенния в розетку
ElectricDevice.prototype.connect = function() {
    console.log(this.name + " is working!");
    this.isWorking = true;
};

// метод для выключенния из розетку
ElectricDevice.prototype.unconnect = function() {
    console.log(this.name + " not working!");
    this.isWorking = false;
};

// Прибор 1
function Teapot(name, brand, power, materialType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.materialType = materialType;
    this.isWorking = true;
}

Teapot.prototype = new ElectricDevice();

// Прибор 2
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isWorking = false;
}

Computer.prototype = new ElectricDevice();

// экземпляр чайника
const electricTeapot = new Teapot("Electric Teapot", "Bosh", 2, "METAL");

// экземпляр компьютера
const workPC = new Computer("Notebook", "Asus", 100, "mobile", "program development");

// отключить чайник из розетки
electricTeapot.unconnect();

// включить workPC в розетку
workPC.connect();

// результат
console.log(workPC)
console.log(electricTeapot)