import { Fish } from '../fisz/fisz';
import { Shrimp } from '../shrimp/shrimp';
import { Gupik } from '../gupik/gupik';
import { AquariumQuarantine } from '../aquariumQuarantine/aquariumQuarantine';
import { isIll } from '../hungerLevel, isLll enums';

export class Aquarium {
	fishes: Fish[] = [];
	fillLevel: number = 0;

	constructor(fishes: Fish[], fillLevel: number) {
		(this.fishes = fishes), (this.fillLevel = fillLevel);
	}

	feed() {
		this.fishes.forEach((fish) => {
			fish.changeHungerLevel('maximum');
		});
	}

	isSomeHungry() {
		return this.fishes.some((fish) =>
			['minimum', 'lowLevel'].includes(fish.hungerLevel)
		);
	}

	isSomeIll() {
		return this.fishes.some((fish) => fish.isIll === isIll.yes);
	}

	fill(fillPercentage: number) {
		this.fillLevel = fillPercentage;
	}

	addFish(fish: Fish) {
		this.fishes.push(fish);
	}

	action() {
		const probability = Math.random();
		this.fishes.forEach((fish) => {
			if (probability > 0.5) {
				if (fish instanceof Gupik) {
					fish.changeIsSleep();
				} else if (fish instanceof Shrimp) {
					fish.changeIsFiltering();
				}
			}
		});
	}

	info() {
		this.fishes.forEach((fish) => {
			console.log(fish.info());
		});
	}

	sendToQuarantine(aquariumQuarantine: AquariumQuarantine, fish: Fish) {
		aquariumQuarantine.addFish(fish);
		this.fishes = this.fishes.filter((healthyFish) => healthyFish !== fish);
	}
}
