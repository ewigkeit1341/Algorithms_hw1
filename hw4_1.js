function findEl(arr1, arr2, k) {
    let i = 0, j = 0, count = 0, theEl = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            theEl = arr1[i];
            i++;
        } else {
            theEl = arr2[j];
            j++;
        }
        count++;
        if (count == k) {
            return theEl;
        }
    }

    // ----------
    while (i < arr1.length) {
        theEl = arr1[i];
        i++;
        count++;
        if (count == k) {
            return theEl;
        }
    }

    while (j < arr2.length) {
        theEl = arr2[j];
        j++;
        count++;
        if (count == k) {
            return theEl;
        }
    }

    return -1; 
}

let arr1 = [100, 112, 256, 349, 770];
let arr2 = [72, 86, 113, 119, 265, 445, 892];
let k = 7;
console.log("k-th element is: " + findEl(arr1, arr2, k));