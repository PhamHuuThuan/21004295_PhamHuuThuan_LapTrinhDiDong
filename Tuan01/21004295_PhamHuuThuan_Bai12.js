const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for ( const [index, player] of game.scored.entries()){
    console.log('Goal ' + (index + 1) + ': ' + player);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let sum = 0;
for (const odd of Object.values(game.odds)){
    sum += odd;
}
let average = sum / Object.values(game.odds).length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
for (const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : 'victory ' + game[team];
    console.log(`Odd of ${teamStr}: ${odd}`);
}

// Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
const scorers = {};
for (const player of game.scored){
    scorers[player] ? scorers[player]++ : scorers[player] = 1;
}
console.log(scorers);


