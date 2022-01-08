function merge(leftArr, rightArr) {
    const output = [];
    let leftIndex = 0, rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            output.push(leftArr[leftIndex]);
            leftIndex++;
        }
        else {
            output.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

function mergeSort(array){
    if(array.length<=1){
        return array;
    }
    let middleIndex = Math.floor(array.length/2);
    let leftArray = array.slice(0,middleIndex);
    let rightArray = array.slice(middleIndex);
    return merge(mergeSort(leftArray),mergeSort(rightArray));
}

console.log(mergeSort([0,123,123,4532,23,1,6,44,444,42423,1236]));