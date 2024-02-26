import { HungerLevelKey, IsIllKey } from '../hungerLevel, isLll enums';
import { Fish } from '../fisz/fisz';

export class Gupik extends Fish {
	isSleep: boolean;
	constructor(
		age: number,
		hungerLevel: HungerLevelKey,
		isIll: IsIllKey,
		isSleep: boolean
	) {
		super(age, hungerLevel, isIll);
		this.isSleep = isSleep;
	}

	changeIsSleep() {
		this.isSleep = !this.isSleep;
	}

	info() {
		return `Age: ${this.age}, Hunger level: ${this.hungerLevel}, Is Ill: ${this.isIll}, isSleep: ${this.isSleep}`
	}
}
