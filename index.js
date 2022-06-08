// Code your solutions in this file
function writeCards(arr, eventName){
    const cards = []
    for (let i = 0; i< arr.length; i++){
        cards.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
    }return cards
} 

function countDown(num){
    let countDown = num
    while (countDown >= 0){
        console.log(countDown--)
    }
}