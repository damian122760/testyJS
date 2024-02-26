import { expect, test } from 'vitest';
import { Gupik } from './gupik';

test('constructor in Gupik works correctly', ()=>{
    //ARRANGE
    const gupikAge = 1;
    const basicHungerLevel="minimum";
    const basicHealth="no";
    const basicIsSleep = true;
    const gupik = new Gupik(gupikAge,basicHungerLevel,basicHealth,basicIsSleep)
    //ASSERT
    expect(gupik.age).toBe(gupikAge)
    expect(gupik.hungerLevel).toBe(basicHungerLevel)
    expect(gupik.isIll).toBe(basicHealth)
    expect(gupik.isSleep).toBe(basicIsSleep)
}
)

test('gupik change is sleep', ()=> {
    //ARRANGE
    const gupikAge = 1;
    const basicHungerLevel="minimum";
    const basicHealth="no";
    const basicIsSleep = true;
    const gupik = new Gupik(gupikAge,basicHungerLevel,basicHealth,basicIsSleep)
    //ACT
    gupik.changeIsSleep()
    //ASSERT
    expect(gupik.isSleep).toBe(false)
}
)

test('return info about gupik age, hunger level, is ill, is sleep', ()=> {
    //ARRANGE
    const gupikAge = 1;
    const basicHungerLevel="minimum";
    const basicHealth="no";
    const basicIsSleep = true;
    const gupik = new Gupik(gupikAge,basicHungerLevel,basicHealth,basicIsSleep)
    //ACT
    gupik.info()
    
    //ASSERT
    expect(gupik.info()).toBe(`Age: ${gupikAge}, Hunger level: ${basicHungerLevel}, Is Ill: ${basicHealth}, isSleep: ${basicIsSleep}`)
}
)
