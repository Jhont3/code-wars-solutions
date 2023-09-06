
function goodVsEvil(good, evil){
    let splittedGoodTroupesString = good.split(" ");
    let splittedEvilTroupesString  = evil.split(" ");

    let counterGoodScore = 0;
    let counterEvilScore = 0;

    splittedGoodTroupesString.forEach( (x,i) => {
        if (x != "0"){
            if (i == 3) {
                counterGoodScore += x * 3;
            } else if (i == 4) {
                counterGoodScore += x * 4;
            } else if (i == 5) {
                counterGoodScore += x * 10;
            } else if (i > 0 && i < 5) {
                console.log("U tried to cheat with another type of troupes!");
            } else {
                counterGoodScore += x * (i + 1);
            }
        }
    })

    splittedEvilTroupesString.forEach( (x,i) => {
        if (x != "0"){
            if (i == 2) {
                counterEvilScore += x * 2;
            } else if (i == 3) {
                counterEvilScore += x * 2;
            } else if (i == 4) {
                counterEvilScore += x * 3;
            } else if (i == 5) {
                counterEvilScore += x * 5;
            } else if (i == 6) {
                counterEvilScore += x * 10;
            } else if (i > 0 && i < 6) {
                console.log("U tried to cheat with another type of troupes!");
            } else {
                counterEvilScore += x * (i + 1);
            }
        }
    })

    // console.log(counterGoodScore)
    // console.log(counterEvilScore)

    if (Number(counterGoodScore) > Number(counterEvilScore)) {
        return "Battle Result: Good triumphs over Evil";
    } else if (Number(counterGoodScore) < Number(counterEvilScore)) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else if (Number(counterGoodScore) == Number(counterEvilScore)) {
        return 'Battle Result: No victor on this battle field'
    } else {
        return "Something went wrong";
    }
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));


/* Other solutions I liked

    function goodVsEvil(good, evil){
        var worthGood = [1, 2, 3, 3, 4, 10];
        var worthEvil = [1, 2, 2, 2, 3, 5, 10];
        
        var powerGood = good.split(' ').reduce(function(sum, current, index){ return sum + current*worthGood[index]}, 0);
        var powerEvil = evil.split(' ').reduce(function(sum, current, index){ return sum + current*worthEvil[index]}, 0);
        
        
        if (powerEvil > powerGood) return 'Battle Result: Evil eradicates all trace of Good';
        else if (powerGood > powerEvil) return 'Battle Result: Good triumphs over Evil';
        else return 'Battle Result: No victor on this battle field'
    }

    function goodVsEvil(good, evil) {  
        var getWorth = function( side, worth ) {
            return side.split(' ').reduce( function(result, value, index) { 
            return result + (worth[index] * value);
            }, 0);
        }

        var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );

        return result > 0 ? "Battle Result: Good triumphs over Evil" :
                result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                            "Battle Result: No victor on this battle field";
    }

    
    var app = {}
    //Added arrays so that if / when then Ents come to battle
    app.good = [{ Name : "Hobbits", Strength : 1},
                { Name : "Men", Strength : 2 },
                { Name : "Elves", Strength : 3},
                { Name : "Dwarves", Strength : 3},
                { Name : "Eagles", Strength : 4},
                { Name : "Wizards", Strength : 10}]
                
    app.evil = [{ Name : "Orcs", Strength : 1},
            { Name : "Men", Strength : 2 },
            { Name : "Wargs", Strength : 2},
            { Name : "Goblins", Strength : 2},
            { Name : "Uruk Hai", Strength : 3},
            { Name : "Trolls", Strength : 5},
            { Name : "Wizards", Strength : 10} ]
            
    app.battleResults = [{ Won : "Evil", Message : "Battle Result: Evil eradicates all trace of Good"},
                        { Won : "Good", Message : "Battle Result: Good triumphs over Evil"},
                        { Won : "Tie", Message : "Battle Result: No victor on this battle field"}];

    app.getBattleResultMessage = function(s) { return this.battleResults[this.battleResults.map(function(e) { return e.Won; }).indexOf(s)].Message; }

    function goodVsEvil(good, evil){
    var goodArmy = good.split(' ');
    var evilArmy = evil.split(' ');
    var goodRoll = 0;
    var evilRoll = 0;
    
    for(var i = 0; i < goodArmy.length; i++){
        goodRoll += app.good[i].Strength * goodArmy[i];    
    }
    for(var i = 0; i < evilArmy.length; i++){
        evilRoll += app.evil[i].Strength * evilArmy[i];
    }
    
    if(evilRoll > goodRoll){
        return app.getBattleResultMessage('Evil');
    }else if(evilRoll < goodRoll){
        return app.getBattleResultMessage('Good');
    }else{
        return app.getBattleResultMessage('Tie');
    }
    }


*/


/* Description
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. 
Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of 
good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the
 side of evil, determine which side wins.

Input:
The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single 
space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins,
 or "Battle Result: No victor on this battle field" if it ends in a tie.
*/