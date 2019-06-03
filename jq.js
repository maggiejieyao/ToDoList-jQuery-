
/*$("#smileIcon").click(function(){
    $($(".toDoList")[0]).show();
});*/

var ulist = $('<ul>').addClass('u');
var ulen = 0;
$("#addBtn").click(function(e){
    
    var inputVal = $("#in").val();
    if($("#in").val().length <= 0){
        $("#alertMess").text("Nothing there my friend.");
    }else{
        ++ulen;
        console.log(ulen);
        $("#alertMess").text("");
        var li = $('<li>').html($('<input type = "checkbox" name="radio" id="radio"/>' + '<label class="labelCon">' + ' '+ $("#in").val() + '</lable>')).appendTo(ulist);

        //remove button
        var removeBtn = $('<button>').css({'marginLeft': '20px', 'borderRadius': '20%'}).text("remove").click(function(){
            li.remove();
            --ulen;
            console.log(ulen);
            if(ulen == 0){
                $('#removeAll').hide();
            }
        }).appendTo(li);
        //clear input
        $("#in").val('');
        //remove all
        $('#removeAll').show().click(function(){
            $('.u').empty();
        })
    }
    ulist.appendTo($("#container"));
    //console.log($('.u li').length);
    e.preventDefault();
    e.stopPropagation();
});


