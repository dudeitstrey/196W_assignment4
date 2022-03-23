
let initialText = document.getElementById("Text");

function biggerButton()
{
    alert("Hello, world!");

    let myText = document.getElementById("Text");

    myText.style.fontSize = "24pt"

}

function fancy()
{
    let myText = document.getElementById("Text");
    let fancyButton = document.getElementById("fancyButton");

    if(fancyButton.checked)
    {
        myText.style.fontSize = "12pt";
        myText.style.fontWeight = "bold";
        myText.style.color = "blue";
        myText.style.textDecoration = "underline";
        myText.style.textTransform = "none"
    }

}

function boring()
{
    let myText = document.getElementById("Text");
    let boringButton = document.getElementById("boringButton");

    if(boringButton.checked)
    {
        myText.style.fontSize = "12pt";
        myText.style.fontWeight = "normal";
        myText.style.color = "black";
        myText.style.textDecoration = "none";
        myText.style.textTransform = "none"
    }

}

function mooButton()
{
    let myText = document.getElementById("Text");

    myText.style.fontSize = "12pt";
    myText.style.fontWeight = "normal";
    myText.style.color = "black";
    myText.style.textDecoration = "none";
    myText.style.textTransform = "uppercase";

    let content = myText.value;
    let parts = content.split(".");
    content = parts.join(" MOO.");

    myText.value = content;
    

}