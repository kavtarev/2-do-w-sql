let arr = []
for (let i = 0; i < 100000; i++) {
    arr.push(Math.random())
}
let arr2 = [...arr]
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

let start = new Date()
bubleSort(arr)
let end = new Date()
let start2 = new Date()
quickSort(arr2)
let end2 = new Date()
console.log('bubble sort ', end - start)
console.log('quick sort ', end2 - start2)
