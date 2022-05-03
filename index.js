function diagonalDifference(arr) {
    // Write your code here
    let i = -1;
    let l = arr.length;
    let total = 0;
    while (i++ && l--) {
        total += arr[i][i] - arr[l][i]
    }
    return Math.abs(total)
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(diagonalDifference(matrix))