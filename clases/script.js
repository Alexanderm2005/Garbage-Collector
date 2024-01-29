function makeFriends (Nicolás , Alejandra) {
    Alejandra.bestfriend = Nicolás;
    Nicolás.bestfriend = Alejandra;

    return {
        King: Nicolás,
        Queen: Alejandra,
    };
}

function addHeir(RoyalFamily, heirName) {
    let heir = { name: heirName };
    RoyalFamily.King.bestfriend = heir;
    RoyalFamily.Queen.bestfriend = heir;
    RoyalFamily.Heir = heir;

    return RoyalFamily;
}

let RoyalFamily = makeFriends({ name : "Nicolás" }, { name : "Alejandra"});
console.log(RoyalFamily.King.bestfriend.name) ;

delete RoyalFamily.King.bestfriend;
console.log(RoyalFamily.King) ;

delete RoyalFamily.Queen.bestfriend;
console.log(RoyalFamily.Queen);

RoyalFamily = addHeir(RoyalFamily, "Heredero");
console.log(RoyalFamily.Heir.name);