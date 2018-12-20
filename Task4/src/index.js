$(function(){
    let input = $('#txtInput');
    let btn = $('#btnAdd');
    let tableBody = $('#table tbody');
    let idCounter = 1;

    function onInputValueChanged(){
        let iVal = input.val();

        if(iVal.length === 0 || isNaN(iVal)){
            input.css("border-color", "red");
            btn.attr("disabled", "disabled");
        }
        else
        {
            input.css("border-color","black");
            btn.removeAttr("disabled");
        }
    }

    function onButtonClick(){
        let newRow = $('<tr></tr>').append(`<td>${idCounter++}</td><td>${input.val()}</td>`);
        tableBody.append(newRow);

        input.val("");
        input.keyup();      
    }

    btn.click(onButtonClick);
    input.keyup(onInputValueChanged);
    
    input.keyup();
});