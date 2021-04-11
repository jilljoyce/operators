const age = 26;

if (age >= 18) {
    console.log("je mag naar binnen!");
}
else {
    console.log("je bent te jong dus je mag helaas niet naar binnen");
}

if (age >= 18 && age <= 25) {
    console.log("je krijgt 50% korting!");
}

const name = "Bram";

if (name == "Sarah" || name == "Abraham" || name == "Bram") {
    console.log("je krijgt een gratis biertje!");
}

const totalAmount = 26;

if (totalAmount > 100) {
    console.log("je krijgt een gratis flesje champagne!");
} else if (totalAmount > 50) {
    console.log("je krijgt een gratis portie nachos!");
} else if (totalAmount > 25) {
    console.log("je krijgt een gratis portie (vega)bitterballen!");
}

/*const isFemale = true;

if (isFemale) {
    console.log("je krijgt toegang tot de ladiesnight!");
} else {
    console.log("je krijg helaas geen toegang tot de ladiesnight");
}

const driverStatus = "bob";

if (driverStatus == 'bob') {
    console.log("jij bent de bob en mag dus rijden");
} else {
    console.log("jij mag niet rijden!");
}*/