$(document).ready(function(){
    var myStorage = window.localStorage

    $("#form").submit(function(event){
        event.preventDefault();
        myStorage.setItem("name", $("#name").val())
        myStorage.setItem("email", $("#email").val())
        myStorage.setItem("message", $("#message").val())
    })

    $("#reset").click(function(){
        $("#name").val("")
        $("#email").val("")
        $("#message").val("")
    })
})