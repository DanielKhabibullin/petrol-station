/* eslint-disable require-jsdoc */
export class Car {
	constructor(brand, model, maxTank) {
		this.brand = brand;
		this.model = model;
		this.maxTank = maxTank;
		this.nowTank = Math.floor(Math.random() * maxTank);
	}

	getTitle() {
		return `${this.brand} ${this.model}`;
	}

	setModel(model) {
		this.model = model;
		return this;
	}

	get needPetrol() {
		return this.maxTank - this.nowTank;
	}

	fillUp() {
		this.nowTank = this.maxTank;
	}
}

export class PassengerCar extends Car {
	typeCar = 'passenger';

	constructor(brand, model, maxTank, typeFuel = 'petrol') {
		super(brand, model, maxTank);
		this.typeFuel = typeFuel;
	}
}

export class Truck extends Car {
	typeCar = 'truck';

	constructor(brand, model, maxTank, typeFuel = 'diesel') {
		super(brand, model, maxTank);
		this.typeFuel = typeFuel;
	}
}
