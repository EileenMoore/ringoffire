export class Game {
    public players: string[] = [];
    public player_images: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation = false;
    public currentCard: string = '';

    constructor() {
        for (let index = 1; index < 2; index++) {
            this.stack.push('spade_' + index);
            this.stack.push('hearts_' + index);
            this.stack.push('clubs_' + index);
            this.stack.push('diamonds_' + index);
        }

        shuffle(this.stack);

    }

    public toJson() {
        return {
            players: this.players,
            player_images: this.player_images,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard,
        };
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}