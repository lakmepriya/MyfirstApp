import {test,expect} from '@playwright/test';

test("Verify Age",async()=>{
    const age = 25;
    expect(age).toBe(25);
    console.log(age);
});

test("Verify Name",async()=>{
    const name = "Nivedha";
    expect(name).toBe("Nivedha");
    console.log(name);
});

test("Verify Logged In",async()=>{
    const isLoggedIn  = true;
    expect(isLoggedIn).toBe(true);
    console.log(isLoggedIn);
});

// 4. Create a variable price = 999 and verify it is 999.

test("Verify Price",async()=>{
    const price  = 999;
    expect(price).toBe(999);
    console.log(price);
});

//5. Add two numbers (15 + 25) and verify the result is 40.

test("Add two numbers",async()=>{
    let result  = 15 + 25;
    expect(result).toBe(40);
    console.log(result);
});

//6. Multiply two numbers (12 * 5) and verify the result is 60.

test("Multiply two numbers",async()=>{
    let result  = 12 * 5;
    expect(result).toBe(60);
    console.log(result);
});

//7. Divide 100 / 20 and verify the result is 5

test("Divide two numbers",async()=>{
    let result  = 100 / 20;
    expect(result).toBe(5);
    console.log(result);
});

//8. Find the remainder of 25 % 4 and verify the result is 1.

test("Find the remainder",async()=>{
    let result  = 25 % 4;
    expect(result).toBe(1);
    console.log(result);
});

//9. Create a variable company = "Microsoft" and verify it is "Microsoft".

test("Verify company name",async()=>{
    let company  = "Microsoft";
    expect(company).toBe("Microsoft");
    console.log(company);
});

//10. Create a variable status = false and verify it is false.

test("Verify status",async()=>{
    let status  = false;
    expect(status).toBe(false);
    console.log(status);
});

//11. Check whether 50 - 20 equals 30.

test("Verify subtraction",async()=>{
    let result  = 50 - 20;
    expect(result).toBe(30);
    console.log(result);
});

//12. Verify that the length of "Playwright" is 10.

test("Verify length",async()=>{
    const length  = 10;
    expect(length).toBe(10);
    console.log(length);
});

//13. Verify that the first element of [10, 20, 30] is 10.

test("Verify first element",async()=>{
    const element  = [10, 20, 30];
    expect(element[0]).toBe(10);
    console.log(element[0]);
});

//14. Verify that the last element of ["Java", "TypeScript", "Playwright"] is "Playwright".

test("Verify last element",async()=>{
    const element  = ["Java", "TypeScript", "Playwright"];
    expect(element.pop()).toBe("Playwright");
    console.log(element.pop());
});