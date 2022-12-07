$("#btn").click(function(e){
    e.preventDefault();
    //var hlo = $("#email").Html;
    if($("#email").val() == ""){
        alert("please enter email");
    }
    else{
        alert("your welcome");
        $("#email").val("");
    }
});
$("#Un").click(function(){
    let name_ = prompt("Enter ur name","here");
    $("#Un").text(name_);
});