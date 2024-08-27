var inputText = document.querySelector(".input_text");
var outputText = document.querySelector(".output_text");
var messageNotfoundTitle = document.querySelector(".message_notfound_title");
var messageNotfoundSubTitle = document.querySelector(".message_notfound_subtitle");
var btnCopy = document.querySelector(".btn_copy");


function validateText(inputText){
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","á","é","í","ó","ú"];
    var cont = 0;


    for( var i = 0; i < inputText.length; i++){
        for (var letter = 0; letter < letters.length; letter++){

            if (inputText.charAt(i) == letters[letter]){
                cont++;
            }
        }
    }
    if(cont == 0){
        return true;
    }
    return false;
}

function encrypt(){

    var text = inputText.value;
    var output = "";

    if (!validateText(text)){
        alert("Texto invalido, verifique su texto.")
        return; 
    }

    for(var i = 0; i < text.length; i++){
        if(text.charAt(i) == "a"){
            output = output + "ai";
        }
        else if(text.charAt(i) == "e"){
            output = output + "enter";
        }
        else if(text.charAt(i) == "i"){
            output = output + "imes";
        }
        else if(text.charAt(i) == "o"){
            output = output + "ober";
        }
        else if(text.charAt(i) == "u"){
            output = output + "ufat";
        }
        else {
            output = output + text.charAt(i);
        }

        inputText.value = "";
        outputText.value = output;
        hideOutput();
    }

}

function decrypt() {
    var text = inputText.value;
    var output = "";
    if(!validate(text)){
        alert("Texto invalido, verifique su texto.")
        return;
    }
    for(var i = 0; i < text.length; i++){
        if(text.charAt(i) == "a" && text.charAt(i + 1) == "i"){
            output = output + "a";
            i = i + 1;
        }
        else if(text.charAt(i) == "e" && text.charAt(i + 1) == "n" && text.charAt(i + 2) == "t" && text.charAt(i + 3) == "e" && text.charAt(i + 4) == "r"){
            output = output + "e";
            i = i + 4;
        }
        else if(text.charAt(i) == "i" && text.charAt(i + 1) == "m" && text.charAt(i + 2) == "e" && text.charAt(i + 3) == "s"){
            output = output + "i";
            i = i + 3;
        }
        else if(text.charAt(i) == "o" && text.charAt(i + 1) == "b" && text.charAt(i + 2) == "e" && text.charAt(i + 3) == "r"){
            output = output + "o";
            i = i + 3;
        }
        else if(text.charAt(i) == "u" && text.charAt(i + 1) == "f" && text.charAt(i + 2) == "a" && text.charAt(i + 3) == "t"){
            output = output + "u";
            i = i + 3;
        }
        else {
            output = output + text.charAt(i);
        }
    }
    inputText.value = "";
    outputText.value = output;
    hideOutput();
}


function hideOutput(){
    outputText.style.background = "white";
    messageNotfoundTitle.style.display = "none";
    messageNotfoundSubTitle.style.display = "none";
    btnCopy.style.display = "";
}

function show(){
    outputText.style.background = "#FFF no-repeat center url(assets/notext.png)";
    messageNotfoundTitle.style.display = "";
    messageNotfoundSubTitle.style.display = "";
    btnCopy.style.display = "none";
}

function copy(){
    var copy =outputText.value;
    navigator.clipboard.writeText(copy);
    
    var message = document.querySelector(".message");
    message.textContent = "Texto copiado";
    message.style.display = "block";
    setTimeout(() => {
        message.style.display = "none";
        outputText.value = "";
        show();
    }, 950);
}