let myArray=Array.from({length:5}, () => Array.from({length:5}, () => RandInt()) )

// a type of transpose
const transpose = (refArray) => refArray[0].map((_, colIndex) => refArray.map(row => row[colIndex]));
// transpose(myArray)
