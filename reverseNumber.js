function reverseNumber(n) {
    let strNum = n.toString()
    if (strNum.match(/[\D]/gm)){ 
      let arrayOfNums = strNum.substring(1,).split('').reverse().join('')
      return Number('-'+ arrayOfNums)
      }
    if (strNum.match(/[\d]/gm)){ return parseInt(strNum.split('').reverse().join(''))}
  }


console.log(reverseNumber(123))
console.log(reverseNumber(-123))
console.log(reverseNumber(1000))
console.log(reverseNumber(4321234))
console.log(reverseNumber(5))
console.log(reverseNumber(0))
console.log(reverseNumber(98989898))