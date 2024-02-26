import { Fish } from '../fisz/fisz';
import { Aquarium } from '../aquarium/aquarium';

export class AquariumQuarantine extends Aquarium {
	returnFromQuarantine(aquarium: Aquarium, fish: Fish) {
		aquarium.addFish(fish);
		this.fishes = this.fishes.filter((illFish) => illFish !== fish);
	}
}
