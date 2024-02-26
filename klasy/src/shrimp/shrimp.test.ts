import { expect, test } from 'vitest';
import { Shrimp } from './shrimp';


test('constructor in Shrimp works correctly', ()=>{
    //ARRANGE
    const shrimpAge = 1;
    const basicHungerLevel="minimum";
    const basicHealth="no";
    const basicIsFiltering = true;
    const shrimp = new Shrimp(shrimpAge,basicHungerLevel,basicHealth,basicIsFiltering)
    //ASSERT
    expect(shrimp.age).toBe(shrimpAge)
    expect(shrimp.hungerLevel).toBe(basicHungerLevel)
    expect(shrimp.isIll).toBe(basicHealth)
    expect(shrimp.isFiltering).toBe(basicIsFiltering)
}
)

test('shrimp change is filtering', ()=> {
     //ARRANGE
     const shrimpAge = 1;
     const basicHungerLevel="minimum";
     const basicHealth="no";
     const basicIsFiltering = true;
     const shrimp = new Shrimp(shrimpAge,basicHungerLevel,basicHealth,basicIsFiltering)
     //ACT
     shrimp.changeIsFiltering()
     //ASSERT
     expect(shrimp.isFiltering).toBe(false)
}
)

test('return info about shrimp age, hunger level, is ill, is filtering', ()=> {
    //ARRANGE
    const shrimpAge = 1;
    const basicHungerLevel="minimum";
    const basicHealth="no";
    const basicIsFiltering = true;
    const shrimp = new Shrimp(shrimpAge,basicHungerLevel,basicHealth,basicIsFiltering)
    //ACT
    shrimp.info()
    
    //ASSERT
    expect(shrimp.info()).toBe(`Age: ${shrimpAge}, Hunger level: ${basicHungerLevel}, Is Ill: ${basicHealth}, isFiltering: ${basicIsFiltering}`)
}
)