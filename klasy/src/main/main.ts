import { Aquarium } from '../aquarium/aquarium';
import { Fish } from '../fisz/fisz';
import { Gupik } from '../gupik/gupik';
import { Shrimp } from '../shrimp/shrimp';

const fish = new Fish(1, 'minimum', 'yes');
const gupik = new Gupik(1, 'minimum', 'no', false);
const shrimp = new Shrimp(1, 'minimum', 'no', true);

const aquarium1 = new Aquarium([fish, gupik, shrimp], 0);

aquarium1.info();

aquarium1.action();

aquarium1.info();
