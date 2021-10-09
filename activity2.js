function back()
{
    window.location = "index.html";
}
function get_score()
{
    var score = localStorage.getItem("score");
    document.getElementById("updated_score").innerHTML = "<h1> Score: " + score + "</h1>";
}