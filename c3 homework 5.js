class ElectricDevice {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isWorking = false;
    }
    // метод для определения прибора как включенный
    connect() {
        console.log(this.name + " is working!");
        this.isWorking = true;
    }

    // метод для определения прибора как выключенный
    unconnect() {
        console.log(this.name + " not working!");
        this.isWorking = false;
    }
}

// Прибор 1
class Teapot extends ElectricDevice {
    constructor (name, brand, power, materialType) {
        super(name, power);
        this.brand = brand;
        this.materialType = materialType;
        this.isWorking = true;
    }
}

// Прибор 2
class Computer extends ElectricDevice {
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isWorking = false;
    }
}

// экземпляр чайника
const electricTeapot = new Teapot("electric Teapot", "Bosh", 2, "METAL");

// экземпляр компьютера
const Notebook = new Computer("Notebook", "ASUS", 100, "mobile", "program development");

// отключить чайник
electricTeapot.unconnect();

// включить Notebook
Notebook.connect();

// результат
console.log(Notebook)
console.log(electricTeapot)