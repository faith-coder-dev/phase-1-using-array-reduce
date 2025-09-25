

// Provided array of battery batches
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce() to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce(function (accumulator, currentBatch) {
    return accumulator + currentBatch;
}, 0);

console.log(totalBatteries); // Should log the sum
