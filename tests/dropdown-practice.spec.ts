import { test,expect } from "@playwright/test";


test("Dropdown Practice 1", async({page})=>{

    await page.goto("https://demoqa.com/select-menu");

    //Select an option from the 'Old Style Select Menu' using label/visible text.
    const oldDropdown = page.locator("#oldSelectMenu");
    await oldDropdown.selectOption({label:'Blue'});
    await page.waitForTimeout(2000);
    await expect(oldDropdown).toHaveValue("1");

    //Select a Dropdown Value by Value
    await oldDropdown.selectOption("3");
    await page.waitForTimeout(2000);
    await expect(oldDropdown).toHaveValue("3");

    //Select a Dropdown Value by Index
    await oldDropdown.selectOption({index:5});
    await page.waitForTimeout(2000);
    const selectedOption = page.locator('#oldSelectMenu option:checked');
    const selectedText = await selectedOption.textContent();
    console.log('Selected option text:', selectedText);
    
    //Verify the Selected Dropdown Option
    await oldDropdown.selectOption("8");
    const selectedAnyOption = page.locator('#oldSelectMenu option:checked');
    console.log('Selected option text:', await selectedAnyOption.textContent());
    await expect(selectedAnyOption).toHaveText("Indigo");

    // Select Multiple Options
    const multiDropdown = page.locator("#cars");
    await multiDropdown.selectOption(["volvo","audi"]);
    const values = await multiDropdown.evaluate(
        (select: HTMLSelectElement) =>
        Array.from(select.selectedOptions).map(option=>option.value)
    );
    // console.log(values);
    console.log("Selected Dropdown Values:",await page.locator("#cars option:checked").allTextContents());
    await expect(multiDropdown).toHaveValues(["volvo", "audi"]);

    //Verify Dropdown is Enabled
    await expect(oldDropdown).toBeEnabled();
    await oldDropdown.selectOption("4");

    // Select Different Values Sequentially
    await oldDropdown.selectOption("2");
    console.log("Active Selection:", await page.locator('#oldSelectMenu option:checked').textContent());
    await oldDropdown.selectOption("4");
    console.log("Active Selection:", await page.locator('#oldSelectMenu option:checked').textContent());
    await oldDropdown.selectOption("7");
    console.log("Active Selection:", await page.locator('#oldSelectMenu option:checked').textContent());
    
    //Validate Dropdown Functionality
    await expect(oldDropdown).toBeVisible();
    console.log("Select Option visible: ", await oldDropdown.locator("option:checked").textContent());
    await oldDropdown.selectOption("5");
    const optionValue= await oldDropdown.locator("option:checked").textContent();
    console.log("Select Option by Value: ", optionValue);
    await oldDropdown.selectOption({index:5});
    const optionIndex = oldDropdown.locator("option:checked");
    console.log("Select Option by Index: ",await optionIndex.textContent());
    await expect(optionIndex).toHaveText("Black");
});


test("Dropdown Practice 2", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/dropdown");

    const dropdown = page.locator("#dropdown");
    //Print All Dropdown Options
    const allOptions = await page.locator('#dropdown option').allTextContents();
    console.log('All dropdown options:', allOptions);
    for(const option of allOptions){
        console.log("Option: ", option);
    }

    //Count Total Dropdown Options
    console.log("Total Count: ",await page.locator('option').count());

    //Verify Default Selected Option
    const selectedOption = page.locator('option:checked');
    console.log("Default Option: ",await selectedOption.textContent());
    await expect(selectedOption).toHaveText("Please select an option");

    //Change the Selected Option
    await dropdown.selectOption("2");
    await page.waitForTimeout(2000);
    await expect(dropdown).toHaveValue("2");
    console.log(await dropdown.inputValue());

    //Select Every Dropdown Option One by One
    const allDropOptions = await page.locator('#dropdown option').all();
    //o/p
    // [
    // locator('#dropdown option').first(),
    // locator('#dropdown option').nth(1),
    // locator('#dropdown option').nth(2)
    // ]
    // console.log(allDropOptions);
    for(const option of allDropOptions){

        if (await option.isDisabled()) {
            console.log("Skipping disabled option");
            continue;
        }
        const chooseOption = (await option.textContent())?.trim();
        await dropdown.selectOption({label: chooseOption});
        const selectedOption = page.locator('option:checked');
        console.log("Each Option: ", await selectedOption.textContent());
    }

});


test("Dropdown Practice 3", async({page})=>{

    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");

    const dropdown = page.locator("select");

    //Handle Country Dropdown
    const selectedOption = await dropdown.selectOption('IND');
    console.log("Selected Option: ",selectedOption);
    await expect(dropdown).toHaveValue('IND');

    //Print the Selected Country
    const selectLabOption = await dropdown.selectOption({label:"Australia"});
    console.log("Selected Value: ",await page.locator('option:checked').textContent());
});