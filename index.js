function XO(str) {
    let oCount = 0
    let xCount = 0
    
    let letters = str.split("")
    letters.forEach((letter) => {
      if (letter.toLowerCase() === "x") {
        xCount += 1
      }
      if (letter.toLowerCase() === "o") {
        oCount += 1
      }
    })
  return xCount === oCount
}