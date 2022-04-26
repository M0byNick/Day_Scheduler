for(var i = 9; i < 18; i++){
    if(i < 12){
        var hourDisplay = i+" am"
    }
    else if(i === 12){
        var hourDisplay = i+" pm"
    }
    else{
        var hourDisplay = i-12+" pm"
    }
    var rowDiv = $("<div>").addClass("row time-block").attr("id",i)
    var hourDiv = $("<div>").addClass("col-2 hour").text(hourDisplay)
    var textAreaEl = $("<textarea>").addClass("col-8 description").val(localStorage.getItem(i))
    var button = $("<button>").addClass("saveBtn").text("Save")
    $(".container").append(rowDiv.append(hourDiv, textAreaEl, button))
}

$(".saveBtn").on("click",function(){
    var activity = $(this).siblings(".description").val().trim()
    var hour = $(this).parent().attr("id")
    localStorage.setItem(hour, activity)
})
