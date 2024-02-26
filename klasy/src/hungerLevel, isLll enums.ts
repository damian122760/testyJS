enum hungerLevel {
	minimum = 0,
	lowLevel = 30,
	highLevel = 60,
	maximum = 100,
}

export type HungerLevelKey = keyof typeof hungerLevel;

export enum isIll {
	yes = 'yes',
	no = 'no',
}

export type IsIllKey = keyof typeof isIll;
