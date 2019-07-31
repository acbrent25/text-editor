$(document).ready(function(){
    
    $("#uppercase").on('click', function(){
        let textToFormat = $("#text-edit-area").val();
        console.log('text to format: ' + textToFormat);
        let formattedText = textToFormat.toUpperCase();
        console.log('formatteed text: ' + formattedText);
        $("#text-edit-area").val(formattedText);
    });

    


});