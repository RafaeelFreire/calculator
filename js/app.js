function add(numero){
    let textInput= document.querySelector("#textInput");
    textInput.value +=numero;        

}
function resetText(){
    let textInput= document.querySelector("#textInput");
    textInput.value = "";     

}
function clean(){
    let textInput= document.querySelector("#textInput");
    let deleteText = textInput.value.substring(0,textInput.value.length -1);
    textInput.value=deleteText;

}
function result(){
    let textInput= document.querySelector("#textInput");
    if( textInput.value === "") return;
    
    let result=eval(textInput.value);
    textInput.value=result

}
