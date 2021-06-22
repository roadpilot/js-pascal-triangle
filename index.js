const pascRow = (count) => {
  let out=[]
  for (let i=0; i<count; i++){
    let currentRow = []
    for (let j=0; j<=i; j++){
      if (j === 0 || j === i){
        currentRow.push(1)
      }
      else {
        currentRow.push(out[i-1][j-1] + out[i-1][j])
      }
    }
    out.push(currentRow)
  }
  return out
}

console.log(pascRow(5))

// const pascalsTriangle = function (inputNumber) {
//   let results = []
//   for (let i = 0; i < inputNumber; i += 1) {
//     let currentRow = []
//     for (let j = 0; j <= i; j += 1) {
//       if (j === 0 || j === i) {
//         currentRow.push(1)
//       } else {
//         currentRow.push(results[i - 1][j - 1] + results[i - 1][j])
//       }
//     }
//     results.push(currentRow)
//   }
//   return results[results.length - 1]
// }

// console.log(pascalsTriangle(1))
// console.log(pascalsTriangle(2))
// console.log(pascalsTriangle(10))