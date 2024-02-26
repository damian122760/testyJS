import { expect, test } from 'vitest';
import { Fish } from '../fisz/fisz';
import { Aquarium } from '../aquarium/aquarium';
import { AquariumQuarantine } from './aquariumQuarantine';

test('Send to Quarantine works correctly', () => {});
//ARRANGE
const fish1 = new Fish(1, 'minimum', 'yes');
const fishesArr: Fish[] = [fish1];
const basicFillLevel = 0;
const aquarium = new Aquarium(fishesArr, basicFillLevel);
const aquariumQuarantine = new AquariumQuarantine(fishesArr, basicFillLevel);
//ACT
aquariumQuarantine.returnFromQuarantine(aquarium, fish1);
//ASSERT
expect(aquarium.addFish(fish1));
expect(
	(aquariumQuarantine.fishes = aquariumQuarantine.fishes.filter(
		(illFish) => illFish !== fish1
	))
);
