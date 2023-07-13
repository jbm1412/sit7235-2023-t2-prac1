function changeTopic()
{
    let list = ["Introduction to the unit", "Writing SRS Document", "Design", "Coding/Ethical Programming", "Project Management", "Texting", "Introduction to the cloud", "Virtualisation", "Guest Lecture", "Recap"];

    let probability = getRandomTopic(0, list.length - 1);
    console.log(probability);

    document.getElementById("change").innerHTML = list[probability];
}

function getRandomTopic(min, max)
{
    let change = Math.random();
    return Math.floor(change*(max-min+1)+min);
}
