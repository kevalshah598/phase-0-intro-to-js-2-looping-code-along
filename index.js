// Code your solutions in this file
function writeCards(array, adjective){
    let finalArray = []
    for (let i = 0; i < array.length; i += 1){
        finalArray.push("Thank you, " + array[i] + ", for the wonderful " + adjective + " gift!")
    }
    return finalArray
}

function countDown(num){
    for (let i = num; i >= 0; i -= 1){
        console.log(i)
    }
}