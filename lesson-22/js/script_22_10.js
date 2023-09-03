
function getRandomArr(maxValue, minValue, arrLength = 10000){  // 10 000

    let randomArray = []
    for (let i = 0; i < arrLength; i++) {
        randomArray.push(getRandomNum(maxValue, minValue))
    }
    return randomArray
}

function getRandomNum(maxValue = 800, minValue = 1) {
    let randomNum = Math.floor((Math.random()*(maxValue - minValue + 1) + minValue))
    return randomNum
}

function getBubbleSort(arr) {
    this.startDateBubbleSort = new Date().getTime()
    let changed
    do {
        changed = false
        let tmp
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                tmp = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = tmp
                changed = true
            }
        }
    } while (changed)
    this.endDateBubbleSort = new Date().getTime()
    this.bubbleSortUsedTime = endDateBubbleSort - startDateBubbleSort
    return arr
}

function getInsertionSort(arr) {
    this.startDateInsertionSort = new Date().getTime()
    for (let i = 1; i < arr.length; i++) {
          let currentElement = arr[i]
          let j = i - 1
          while (j >= 0 && arr[j] > currentElement) {
              arr[j + 1] = arr[j]
              j--
          }
          arr[j + 1] = currentElement
    }
    this.endDateInsertionSort = new Date().getTime()
    this.insertionSortUsedTime = endDateInsertionSort - startDateInsertionSort

return arr
}

window.onload = function () {
    let randomArr = getRandomArr()
    console.log(randomArr)

    let bubbleSort = getBubbleSort(randomArr)
    console.log(bubbleSort)
    console.log(this.startDateBubbleSort)
    console.log(this.endDateBubbleSort)
    console.log(this.bubbleSortUsedTime)

    let insertionSort = getInsertionSort(randomArr)
    console.log(insertionSort)
    console.log(this.startDateInsertionSort)
    console.log(this.endDateInsertionSort)
    console.log(this.insertionSortUsedTime)
}