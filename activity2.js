function back()
{
    window.location = "activity_1.html";
}
function get_score()
{
    var score = localStorage.getItem("score");
    document.getElementById("updated_score").innerHTML = "<h1> Score: " + score + "</h1>";
}