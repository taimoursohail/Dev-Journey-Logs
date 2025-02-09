/*
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

Continue Via propgram Untill the Last verse:

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
*/

function lyrics() {
    var x = 99;

    while (x >= 0) {
    
        if (x === 0) {
            console.log("No more bottles of honey on the wall, no more bottles of honey.");
            console.log("Go to the store and buy some more, 99 bottles of honey on the wall.");
        } else {
                console.log(x + " bottles of honey on the wall, " + x + " bottles of honey.");
                console.log("Take one down and pass it around, " + (x - 1) + " bottles of honey on the wall.");
        }
        

    x--;
    }
}

lyrics();
