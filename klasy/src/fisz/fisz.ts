import { HungerLevelKey, IsIllKey } from '../hungerLevel, isLll enums';

export class Fish {
	age: number;
	hungerLevel: HungerLevelKey;
	isIll: IsIllKey;

	constructor(age: number, hungerLevel: HungerLevelKey, isIll: IsIllKey) {
		this.age = age;
		this.hungerLevel = hungerLevel;
		this.isIll = isIll;
	}

	changeHungerLevel(hungerLevel: HungerLevelKey) {
		this.hungerLevel = hungerLevel;
	}

	changeIsIll(isIll: IsIllKey) {
		this.isIll = isIll;
	}

	info() {
		return `Age: ${this.age}, Hunger level: ${this.hungerLevel}, Is Ill: ${this.isIll}`;
	}
}
