import { expect, test } from 'vitest';
import { Aquarium } from './aquarium';
import { Fish } from '../fisz/fisz';
import { isIll } from '../hungerLevel, isLll enums';
import { Gupik } from '../gupik/gupik';
import { Shrimp } from '../shrimp/shrimp';
import { AquariumQuarantine } from '../aquariumQuarantine/aquariumQuarantine';
test('constructor in Aquarium works correctly', () => {
	//ARRANGE
	const fish1 = new Fish(1, 'minimum', 'yes');
	const fish2 = new Fish(2, 'minimum', 'no');
	const fishesArr: Fish[] = [fish1, fish2];
	const basicFillLevel = 0;
	const aquarium = new Aquarium(fishesArr, basicFillLevel);

	//ASSERT
	expect(aquarium.fishes).toBe(fishesArr);
	expect(aquarium.fillLevel).toBe(basicFillLevel);
});

test('Aquarium feed works correctly', () => {
	//ARRANGE
	const fish1 = new Fish(1, 'minimum', 'yes');
	const fish2 = new Fish(2, 'minimum', 'no');
	const fishesArr: Fish[] = [fish1, fish2];
	const basicFillLevel = 0;
	const aquarium = new Aquarium(fishesArr, basicFillLevel);

	//ACT
	aquarium.feed();

	//ASSERT
	expect(aquarium.fishes.forEach((fish) => fish.changeHungerLevel('maximum')));
});

test('Aquarium is Some Hungry works correctly', () => {
	//ARRANGE
	const fish1 = new Fish(1, 'minimum', 'yes');
	const fish2 = new Fish(2, 'minimum', 'no');
	const fishesArr: Fish[] = [fish1, fish2];
	const basicFillLevel = 0;
	const aquarium = new Aquarium(fishesArr, basicFillLevel);

	//ACT
	aquarium.isSomeHungry();

	//ASSERT
	expect(
		aquarium.fishes.some((fish) =>
			['minimum', 'lowLevel'].includes(fish.hungerLevel)
		)
	);
});

test('Aquarium is Some Ill works correctly', () => {
	//ARRANGE
	const fish1 = new Fish(1, 'minimum', 'yes');
	const fish2 = new Fish(2, 'minimum', 'no');
	const fishesArr: Fish[] = [fish1, fish2];
	const basicFillLevel = 0;
	const aquarium = new Aquarium(fishesArr, basicFillLevel);

	//ACT
	aquarium.isSomeIll();

	//ASSERT
	expect(aquarium.fishes.some((fish) => fish.isIll === isIll.yes));
});

test('Aquarium fill works correctly', () => {
	//ARRANGE
	const fish1 = new Fish(1, 'minimum', 'yes');
	const fish2 = new Fish(2, 'minimum', 'no');
	const fishesArr: Fish[] = [fish1, fish2];
	const basicFillLevel = 0;
	const aquarium = new Aquarium(fishesArr, basicFillLevel);

	//ACT
	aquarium.fill(70);

	//ASSERT
	expect(aquarium.fillLevel).toBe(70);
});

test('Aquarium addfish works correctly', () => {
	//ARRANGE
	const fish1 = new Fish(1, 'minimum', 'yes');
	const fish2 = new Fish(2, 'minimum', 'no');
	const fish3 = new Fish(2, 'minimum', 'no');
	const fishesArr: Fish[] = [fish1, fish2];
	const basicFillLevel = 0;
	const aquarium = new Aquarium(fishesArr, basicFillLevel);

	//ACT
	aquarium.addFish(fish3);

	//ASSERT
	expect(aquarium.fishes.push(fish3));
});

test('Aquarium action works correctly', () => {
	//ARRANGE
	const fish1 = new Fish(1, 'minimum', 'yes');
	const fish2 = new Fish(2, 'minimum', 'no');
	const gupik = new Gupik(1, 'highLevel', 'yes', false);
	const shrimp = new Shrimp(1, 'highLevel', 'yes', false);
	const fishesArr: Fish[] = [fish1, fish2, gupik, shrimp];
	const basicFillLevel = 0;
	const aquarium = new Aquarium(fishesArr, basicFillLevel);
	const probability = Math.random();

	//ACT
	aquarium.action();

	//ASSERT
	aquarium.fishes.forEach((fish) => {
		if (probability > 0.5) {
			if (fish instanceof Gupik) {
				expect(gupik.isSleep).toBe(true);
			} else if (fish instanceof Shrimp) {
				expect(shrimp.isFiltering).toBe(true);
			}
		}
	});
});

test('Aquarium info works correctly', () => {
	//ARRANGE
	const fish1 = new Fish(1, 'minimum', 'yes');
	const fish2 = new Fish(2, 'minimum', 'no');
	const fishesArr: Fish[] = [fish1, fish2];
	const basicFillLevel = 0;
	const aquarium = new Aquarium(fishesArr, basicFillLevel);

	//ACT
	aquarium.info();

	//ASSERT
	expect(aquarium.fishes.forEach((fish) => console.log(fish.info())));
});

test('Send to Quarantine works correctly', () => {
	//ARRANGE
	const fish1 = new Fish(1, 'minimum', 'yes');
	const fish2 = new Fish(2, 'minimum', 'no');
	const fishesArr: Fish[] = [fish1, fish2];
	const basicFillLevel = 0;
	const aquarium = new Aquarium(fishesArr, basicFillLevel);
	const aquariumQuarantine = new AquariumQuarantine(fishesArr, basicFillLevel);

	//ACT
	aquarium.sendToQuarantine(aquariumQuarantine, fish1);

	//ASSERT
	expect(aquariumQuarantine.addFish(fish1));
	expect(
		(aquarium.fishes = aquarium.fishes.filter(
			(healthyFish) => healthyFish !== fish1
		))
	);
});
