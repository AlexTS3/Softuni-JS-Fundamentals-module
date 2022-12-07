function arrayCheck(array1, array2) {

    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i]);
        sum += array1[i];
    }

    for (let i = 0; i < array2.length; i++) {
        array2[i] = Number(array2[i]);
    }

    let areEqual = true
    for (let i = 0; i < array1.length; i++) {
        let index = i;
        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            areEqual = false;
            break;
        }
    }

    if (areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }

}

arrayCheck(['10','20','30'], ['10','20','30'])