
export async function getBet(userID: string) {
    const bet = await bets.findOne({_userID: userID})
    return bet
}


export function addBet(user: string, matches: Array<string>){

}

