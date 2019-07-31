$(document).ready(function(){
    
    // Uppercase
    $("#uppercase").on('click', function(){
        // get text from text area
        let textToFormat = $("#text-edit-area").val();
        // format the text and set new variable
        let formattedText = textToFormat.toUpperCase();
        // replace text for copying
        $("#text-edit-area").val(formattedText);
    });

    // Lowercase
    $("#lowercase").on('click', function(){
        // get text from text area
        let textToFormat = $("#text-edit-area").val();
        // format the text and set new variable
        let formattedText = textToFormat.toLowerCase();
        // replace text for copying
        $("#text-edit-area").val(formattedText);
    });

    // Remove Dashes
    $("#remove-dashes").on('click', function(){
        // get text from text area
        let textToFormat = $("#text-edit-area").val();
        // format the text and set new variable
        let formattedText = textToFormat.replace(new RegExp('-', 'g')," ")
        // replace text for copying
        $("#text-edit-area").val(formattedText);
    });


    


});