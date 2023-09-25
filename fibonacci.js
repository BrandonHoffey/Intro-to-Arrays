let series = [0, 1]

while (series.length < 10) {
    let secondNum = series.pop()
    let firstNum = series.pop()
    let sum = firstNum + secondNum
    series.push(firstNum, secondNum, sum)
    if (series.length >= 10) {
        break;
    }
}

console.log(series)