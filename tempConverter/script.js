const calculateTemp = () => {
    event.preventDefault();//prevents in blinking of result
    const numTemp = document.getElementById('temp').value;
    // console.log(numTemp);

    const tempSelected = document.getElementById('temp_diff');

    // SelectedIndex is used for the dropdown list and the values starts with index 0
    const value = temp_diff.options[tempSelected.selectedIndex];
    //    console.log(value);

    const celToFah = (cel) => {
        let fah = Math.round((cel * 9 / 5) + 32);
        return fah;
    }
    const fahToCel = (fah) => {
        let cel = Math.round((fah - 32) * 5 / 9);
        return cel;
    }

    let result;

    if (value == 'cel') {
        result = celToFah(numTemp)
        document.getElementById('resultContainer').innerHTML = `=${result}Celcius`
    } else {
        result = fahToCel(numTemp)
        document.getElementById('resultContainer').innerHTML = `=${result}Fahrenheit`
    };
}