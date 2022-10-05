var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(todayDate);

function timeTracker() {
    var timeNow = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < timeNow) {
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).addClass("present");
        }
        else if (blockTime > timeNow) {
            $(this).addClass("future");
        }
    })
}

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
    })

    timeTracker();
})