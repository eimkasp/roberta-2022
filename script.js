console.log(messageData);

var flowerCount = 0;
var flowerCountEim = 0;
var flowerCountRob = 0;
var emoji = "\u00f0\u009f\u008c\u00b9";
var loveDictionary = {};

for (i = 0; i < messageData.messages.length; i++) {
    console.log(i);

    var message = messageData.messages[i];

    if (message.content) {
        console.log(message);

        if(message.content.includes(emoji)) {
            console.log("Includes");
            flowerCount++;
            // Count EIM flowers
            if(message.sender_name.includes('Eimantas')) {
                flowerCountEim++;
            }
            if(message.sender_name.includes('Roberta')) {
                flowerCountRob++;
            }
        }


        // Make top words dictionary

        var words = message.content.trim().split(/\s+/);
        console.log(words);

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


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#total-flowers").innerHTML = flowerCount;
    document.querySelector("#total-flowers-eim").innerHTML = flowerCountEim;
    document.querySelector("#total-flowers-rob").innerHTML = flowerCountRob;
});

/* End statistics */

/* Refference: https://stackoverflow.com/a/68523626/1028193 */
// if keys are numbers
var arr = sortObject(loveDictionary);
console.log(arr);




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