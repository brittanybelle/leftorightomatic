function activateLeftORightOMatic() {
    if (itIsTrueThat("haters gonna hate")) {
        var randomMessage = generateScientificallyRandomMessage();
        return performIntenseRandomnessAlgorithm(randomMessage);
    } 
    else {
        var listOfCats = ["Brooklyn the Cat",
            "Taco the Cat",
            "Garfield the Cat",
            "Grumpy the Cat",
            "Cat the Cat"]
        return performIntenseRandomnessAlgorithm(randomItemFromList(listOfCats));
    }
}

function performIntenseRandomnessAlgorithm(seedString) {
    return convertBooleanToLeftOrRight(convertDigitToBoolean(digitInTenthsPlaceOf(calculateEntropyOf(seedString))));
}

function generateScientificallyRandomMessage() {
    var verbPrefixList = ["Pre", "Dis", "Un", "Re", "Neo", "Hyper", "Cyro", "De", "Geo", "Mega"];
    var verbList = ["combining", "calculating", "configuring", "digitizing", "resticulating", "manifesting", "valuing", "determining", "capturing", "mimicing", "destroying", "writing", "wiring", "estimating", "locating"];
    var nounList = ["splines", "biomarkers", "optimizations", "grids", "meshes", "axes", "distributions", "penguins", "entropy", "spacetime", "all of mathematics", "randomness itself", "human flesh"];
    var message = randomItemFromList(verbPrefixList)
                    + randomItemFromList(verbList)
                    + " "
                    + randomItemFromList(nounList)
                    + "...";
    return message;
}

function calculateEntropyOf(text) {
    // Calculate the Shannon entropy of the input text
    // https://en.wikipedia.org/wiki/Entropy_(information_theory)#Definition
    
    var alphabetSoupArray = "abcdefghijklmnopqrstuvwxyz".split("");
    var letterCountByAlphabetIndex = Array.apply(null, Array(26)).map(Number.prototype.valueOf, 0);
    var totalNumberOfLetters = 0;
    for (var i = 0; i < text.length; i++) {
        var thisCharacter = text.charAt(i).toLowerCase();
        if (isLetter(thisCharacter)) {
            totalNumberOfLetters++;
            for (var j = 0; j < alphabetSoupArray.length; j++) {
                if (thisCharacter == alphabetSoupArray[j]) {
                    letterCountByAlphabetIndex[j]++;
                }
            }
        }
    }

    var entropy = 0;
    for (var i = 0; i < letterCountByAlphabetIndex.length; i++) {
        var frequencyOfLetter = letterCountByAlphabetIndex[i] / totalNumberOfLetters;
        entropy = entropy - frequencyOfLetter * logarithmBaseTwoOf(frequencyOfLetter);
    }

    return entropy;
}

function itIsTrueThat(booleanLabel) {
    var truthValue;
    $.ajax({
        type: 'GET',
        async: false,
        url: 'https://api.booleans.io?label=' + booleanLabel,
        headers: {
            "Authorization":"Token b90f8f8c60eb4c529061339952e965817538c293"
        },
        success: function(returnDataAsArray) {
            truthValue = returnDataAsArray[0].val;
            }
        });
    return truthValue;
}

function convertBooleanToLeftOrRight(boolean) {
    // patent pending
    if (itIsTrueThat("Neil deGrasse Tyson tweeted in the last 15 minutes")) {
        if (boolean) {
            return "left";
        } 
        else {
            return "right";
        }
    } 
    else {
        if (boolean) {
            return "right";
        } 
        else {
            return "left";
        }
    }
}

function convertDigitToBoolean(digit) {
    if (digit % 2 == 0) {
        return true;
    } 
    else {
        return false;
    }
}

function logarithmBaseTwoOf(number) {
    if (number != 0) {
        return Math.log(number) / Math.log(2);
    }
    else {
        return 1;
    }
}

function digitInTenthsPlaceOf(floatNumber) {
    var fractionalPart = floatNumber - Math.floor(floatNumber);
    return Math.floor(fractionalPart * 10);
}

function randomItemFromList(list) {
    var randomInteger = Math.floor(Math.random() * list.length);
    return list[randomInteger];
}

function askWhy() {
    alert("Why did you click THIS button? \nDo you want a gold star or something?");
}

function isLetter(char) {
    return char.match(/[a-z]/i);
}
