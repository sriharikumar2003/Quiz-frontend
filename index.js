function value(key,isCorrect){
    document.querySelectorAll(".option").forEach(function(element)
    {
        element.classList.remove("correct","wrong");
    });
    if(isCorrect){
        key.classList.toggle("correct");
    }
    else {
        key.classList.toggle("wrong");
    }
  
}