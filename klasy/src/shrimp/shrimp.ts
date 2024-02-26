import { HungerLevelKey, IsIllKey } from '../hungerLevel, isLll enums';
import { Fish } from '../fisz/fisz';

export class Shrimp extends Fish {
	isFiltering: boolean;
	constructor(
		age: number,
		hungerLevel: HungerLevelKey,
		isIll: IsIllKey,
		isFiltering: boolean
	) {
		super(age, hungerLevel, isIll);
		this.isFiltering = isFiltering;
	}
	changeIsFiltering() {
		this.isFiltering = !this.isFiltering;
	}

	info() {
		return `Age: ${this.age}, Hunger level: ${this.hungerLevel}, Is Ill: ${this.isIll}, isFiltering: ${this.isFiltering}`
	}
}
