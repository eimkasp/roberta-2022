console.log(messageData);

var flowerCount = 0;
var flowerCountEim = 0;
var flowerCountRob = 0;
var emoji = "\u00f0\u009f\u008c\u00b9";
var loveDictionary = {};


var totalPictures = 1528; // Static value
var totalVideos = 122; // Static value
var totalVideos = 215; // Static value
var totalVideos = 215; // Static value
for (i = 0; i < messageData2.messages.length; i++) {
    messageData.messages.push(messageData2.messages[i]);
}

for (i = 0; i < messageData.messages.length; i++) {
    var message = messageData.messages[i];

    if (message.content) {
        if (message.content.includes(emoji)) {
            flowerCount++;
            // Count EIM flowers
            if (message.sender_name.includes('Eimantas')) {
                flowerCountEim++;
            }
            if (message.sender_name.includes('Roberta')) {
                flowerCountRob++;
            }
        }

        // Make top words dictionary

        var words = message.content.trim().split(/\s+/);

        for (let j = 0; j < words.length; j++) {
            var word = words[j].toLowerCase();
            if (loveDictionary[word]) {
                loveDictionary[word]++;
            } else {
                loveDictionary[word] = 1;
            }
        }
        // END Make top words dictionary
    }
}

/* Statistics */
console.log("Total Flower Count" + flowerCount);
console.log("Total EIM Count" + flowerCountEim);
console.log("Total Rob Count" + flowerCountRob);



document.addEventListener('DOMContentLoaded', function () {
    var actualFlowerCount = flowerCountEim / 3;
    document.querySelector("#total-flowers").innerHTML = flowerCount + ""; 
    document.querySelector("#actual-flowers").innerHTML = (flowerCountEim + 1)/3; 
    document.querySelector("#actual-flowers").innerHTML += ' Acutal flowers owned';
    document.querySelector("#total-flowers-eim").innerHTML = flowerCountEim;
    document.querySelector("#total-flowers-rob").innerHTML = flowerCountRob;
    document.querySelector("#total-messages").innerHTML = messageData.messages.length;

    var arr = sortObject(loveDictionary);
    console.log(arr);

    var wordList = document.querySelector("#top-words");
    for(let l = 0; l < 300; l++) {
        wordList.innerHTML += "<li class='p-3'>" + arr[l].key + "(" +  arr[l].value + ")</li>";
    }
});

/* End statistics */

/* Refference: https://stackoverflow.com/a/68523626/1028193 */
// if keys are numbers

/* Reference: https://stackoverflow.com/questions/1069666/sorting-object-property-by-values */
function sortObject(obj) {
    var arr = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort(function (a, b) { return b.value - a.value; });
    return arr;
}