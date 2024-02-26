import { expect, test } from 'vitest';
import { Fish } from '../fisz/fisz';
import { Aquarium } from '../aquarium/aquarium';
import { Gupik } from '../gupik/gupik';
import { Shrimp } from '../shrimp/shrimp';

test('Aquarium info works correctly', () => {
	//ARRANGE
	const fish = new Fish(1, 'minimum', 'yes');
	const gupik = new Gupik(1, 'minimum', 'no', false);
	const shrimp = new Shrimp(1, 'minimum', 'no', true);
	const aquarium1 = new Aquarium([fish, gupik, shrimp], 0);

	//ACT
	fish.info();
	gupik.info();
	shrimp.info();
	aquarium1.info();

	//ASSERT
	expect(aquarium1.fishes.forEach((fish) => console.log(fish.info())));
});
