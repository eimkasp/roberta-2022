console.log(messageData);

var flowerCount = 0;
var flowerCountEim = 0;
var flowerCountRob = 0;

var loveDictionary = {};

for (i = 0; i < messageData.messages.length; i++) {
    console.log(i);

    var message = messageData.messages[i];

    if (message.content) {
        console.log(message.content);

        // Make top words dictionary

        var words = message.content.trim().split(/\s+/);
        console.log(words);

        for (let j = 0; j < words.length; j++) {
            if (loveDictionary[words[j]]) {
                loveDictionary[words[j]]++;
            } else {
                loveDictionary[words[j]] = 1;
            }
        }
        // END Make top words dictionary



    }








    // sleep(1000);

}

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
    arr.sort(function(a, b) { return a.value - b.value; });
    //arr.sort(function(a, b) { a.value.toLowerCase().localeCompare(b.value.toLowerCase()); }); //use this to sort as strings
    return arr; // returns array
}


// I need this ^^ :) :*
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}