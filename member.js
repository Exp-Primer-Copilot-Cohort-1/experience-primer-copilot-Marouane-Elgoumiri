function skillsMember() {
    // Array to be sorted
    let array = [5, 3, 8, 4, 2];

    // Bubble sort algorithm
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    // Print sorted array
    console.log(array);
}
function bfsSort() {
    // Array to be sorted
    let array = [5, 3, 8, 4, 2];
    // Create a queue and enqueue the initial array
    let queue = [array];

    while (queue.length > 0) {
        // Dequeue the next array from the queue
        let currentArray = queue.shift();

        // Check if the current array is sorted
        let isSorted = true;
        for (let i = 0; i < currentArray.length - 1; i++) {
            if (currentArray[i] > currentArray[i + 1]) {
                isSorted = false;
                break;
            }
        }

        // If the current array is sorted, print it and exit the loop
        if (isSorted) {
            console.log(currentArray);
            break;
        }

        // Generate all possible next arrays by swapping adjacent elements
        for (let i = 0; i < currentArray.length - 1; i++) {
            let nextArray = [...currentArray]; // Create a copy of the current array
            // Swap adjacent elements
            let temp = nextArray[i];
            nextArray[i] = nextArray[i + 1];
            nextArray[i + 1] = temp;
            // Enqueue the next array
            queue.push(nextArray);
        }
    }
}

bfsSort();