alert("You have two names, John / Michael");

var x = prompt("Now type the name...")

var name = x;

switch (name) {
        case 'John':
                alert('it is jewish name originates from the Hebrew name Yochanan, meaning "YHWH has been gracious"');
        break;
        case 'Michael':
                alert('it is a common given name of Hebrew origin, meaning "who is like God?"');
        break;

        default:
                var suggestion = prompt("Your name it?");
                console.log("Your suggested name means if awful can't able to tell. Very awful 😖");
}