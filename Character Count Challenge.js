var Limit = 80;
var name = ""; 
var limit_count = name.length;
var bio_count = 0; 

while (true) { 
    var bio = prompt("Tell us about yourself. (Characters left: " + (Limit - limit_count) + ")");
    bio_count = bio.length;
    var characters_left = Limit - (name.length + bio_count);

    alert("There are " + characters_left + " left. Are you sure you want to publish?");
    var decision = prompt("Yes/No");

    if (decision === "Yes") {
        alert("Thank you, your BIO has been made public.");
        break;
    } else {
        alert("Please try again. Enter your BIO again.");
    }
}