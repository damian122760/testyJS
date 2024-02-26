import { expect, test } from 'vitest'
import { Fish } from './fisz'

test('constructor in fish works correctly',()=>{
    //ARRANGE
    const fishAge=1;
    const basicHungerLevel="minimum"
    const basicHealth="no"
    const fish=new Fish(fishAge,basicHungerLevel,basicHealth)
    //ASSERT
    expect(fish.age).toBe(fishAge)
    expect(fish.hungerLevel).toBe(basicHungerLevel)
    expect(fish.isIll).toBe(basicHealth)

})

test('fish change hunger level, changes hunger level',()=>{
    //ARRANGE
    const fishAge=1;
    const basicHungerLevel="minimum"
    const basicHealth="no"
    const fish=new Fish(fishAge,basicHungerLevel,basicHealth)
    //ACT
    fish.changeHungerLevel("maximum")
    
    //ASSERT
    expect(fish.hungerLevel).toBe("maximum")

})

test('fish change is ill', ()=> {
      //ARRANGE
      const fishAge=1;
      const basicHungerLevel="minimum"
      const basicHealth="no"
      const fish=new Fish(fishAge,basicHungerLevel,basicHealth)
      //ACT
      fish.changeIsIll("yes")
      
      //ASSERT
      expect(fish.isIll).toBe("yes")
} 
)

test('return info about fish age, hunger level, is ill', ()=> {
     //ARRANGE
     const fishAge=1;
     const basicHungerLevel="minimum"
     const basicHealth="no"
     const fish=new Fish(fishAge,basicHungerLevel,basicHealth)
     //ACT
     fish.info()
     
     //ASSERT
     expect(fish.info()).toBe(`Age: ${fishAge}, Hunger level: ${basicHungerLevel}, Is Ill: ${basicHealth}`)
}
)