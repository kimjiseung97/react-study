//index.js
import 'core-js/features/string/pad-start';

//someFile.js
const value = '123'.padStart(5,'0'); // 00123
import { addNumber } from "./util";

it('add two numbers', ()=>{
    const result = addNumber(1,2);
    expect(result).toBe(3);
});