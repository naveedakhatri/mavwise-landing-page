// get element ID and store in a variable
const button = document.getElementById("theme-toggle");

// execute the function upon click
button.onclick = function(){

    // toggle the classlist 
    document.body.classList.toggle("light-mode");
    
};