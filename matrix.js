let myMatrix=Array.from({length:5}, () => Array.from({length:5}, () => Math.random()*9|0) )

// a type of transpose
const transpose = (refMatrix) => refMatrix[0].map((_, colIndex) => refMatrix.map(row => row[colIndex]));
// transpose(myMatrix)
