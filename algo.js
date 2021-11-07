let arr = []
/* for (let i = 0; i < 100; i++) {
    arr.push(Math.random())
} */
let arr2 = [...arr]
let arr3 = [...arr]
function bubleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = arr[0]
    let more = []
    let less = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pivot) {
            more.push(arr[i])
        }
        if (arr[i] <= pivot) {
            less.push(arr[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(more)]
}

function countSearch(arr) {
    let counter = []
    let result = []
    let max = Math.max(...arr)
    let min = Math.min(...arr)

    let k = max - min + 1

    for (let i = 0; i <= k; i++) {
        counter.push(0)
    }
    for (let item of arr) {
        counter[item] += 1
    }
    for (let i = 0; i < counter.length; i++) {
        let j = counter[i]
        while (j !== 0) {
            result.push(i)
            j -= 1
        }
    }
    console.log(result)
}

countSearch([1, 2, 3, 4, 6, 2, 3, 5, 12, 2, 1, 1, 3, 2])
let start = new Date()
bubleSort(arr)
let end = new Date()
let start2 = new Date()
quickSort(arr2)
let end2 = new Date()
let start3 = new Date()
countSearch(arr3)
let end3 = new Date()

console.log('bubble sort ', end - start)
console.log('quick sort ', end2 - start2)
console.log('count sort ', end3 - start3)
