$("input").on("input", function () {
    if (ValidateInputs())
        CalculateResult();
});

function ValidateInputs() {
    if (parseInt($("#NumberOfPeople").val()) < 1) return false;
    else if (parseInt($("#NumberOfMegabucks").val()) < 0) return false;
    else if (parseInt($("NumberOfMegaMillions").val()) < 0) return false;
    else if (parseInt($("#NumberOfPowerball").val()) < 0) return false;
    else if ($("#NumberOfMegabucks").val() == "") return false;
    else if ($("NumberOfMegaMillions").val() == "") return false;
    else if ($("#NumberOfPowerball").val() == "") return false;

    return true;
};

function CalculateResult() {
    var MegabucksCount = parseInt($("#NumberOfMegabucks").val());
    var MegaMillionsCount = parseInt($("#NumberOfMegaMillions").val());
    var PowerballCount = parseInt($("#NumberOfPowerball").val());
    var PeopleCount = parseInt($("#NumberOfPeople").val());
    var totalCost = MegabucksCount + (MegaMillionsCount * 2) + (PowerballCount * 2);
    var costPerPerson = totalCost / PeopleCount;
    var remainder = (Math.ceil(costPerPerson) * PeopleCount) - totalCost

    $("#Result").text("The total cost of your pool is $" + totalCost + ". The cost for each participant is $" + Math.ceil(costPerPerson) + " with $" + remainder + " left over.");
};