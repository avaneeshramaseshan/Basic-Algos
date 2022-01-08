function quickSort(array) {
    if (array.length <= 1)
        return array;
    let leftArr = [], rightArr = [];
    let pivot = array[array.length - 1];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot)
            leftArr.push(array[i]);
        else
            rightArr.push(array[i]);
    }
    if (leftArr.length > 0 && rightArr.length > 0)
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    else if (leftArr.length > 0)
        return [...quickSort(leftArr), pivot];
    else
        return [pivot, ...quickSort(rightArr)];
}
console.log(quickSort([0,123,123,4532,23,1,6,44,444,42423,1236]));