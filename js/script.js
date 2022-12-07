$("#btn").click(function(e){
    e.preventDefault();
    //var hlo = $("#email").Html;
    if($("#email").val() == ""){
        alert("please enter email");
    }
    else{
        alert("your welcome");
    }
});
