// Write these functions:

//     formatName(firstName, lastName) should return the first and last name as one string.

//     getGreeting(timeOfDay) should return "Good morning", "Good afternoon", or "Good evening".

//     createGreeting(firstName, lastName, timeOfDay) should use the other two functions and return the final greeting.

function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {

    return `Good ${timeOfDay}`;
}

function createGreeting(firstName, lastName, timeOfDay) {
    const name = formatName(firstName, lastName);
    const greeting = getGreeting(timeOfDay);
    return `${greeting}, ${name}!`;
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));