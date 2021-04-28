// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){

    let distance;
    blockNumber > 42 ? distance = blockNumber-42 : distance = 42-blockNumber;
    return distance;
}

function distanceFromHqInFeet (blockNumber) {

    let numberOfFeet;
    let numberOfBlocks = distanceFromHqInBlocks(blockNumber);

    numberOfFeet = 264*numberOfBlocks;

    return numberOfFeet;
}

function distanceTravelledInFeet(startingBlock, endingBlock){

    let feetDistanceBetweenBlocks = distanceFromHqInFeet(endingBlock) - distanceFromHqInFeet(startingBlock);

    return feetDistanceBetweenBlocks;
}

function calculatesFarePrice(start, destination){

    const price = 0.02 ;
    
    let feetTravelled = distanceTravelledInFeet(start, destination);

        if (feetTravelled <= 400){
            return 0;
        }else if (feetTravelled > 400 && feetTravelled < 2000){
            return price*(feetTravelled-400);   
        }else if (feetTravelled >= 2000 && feetTravelled < 2500){
            return 25;
        }else if (feetTravelled >= 2500){
            return 'cannot travel that far';
        }
    
}


