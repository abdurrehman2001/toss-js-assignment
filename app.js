var head = prompt("Enter Your First Player Name")
var tail = prompt("Enter Your Second Player Name")

var toss = Math.random() * 3;
console.log(toss)
var floor = Math.floor(toss)
if(floor === 0){
    document.write("<div class=abc>" + head + " Head Win" + "</div>")
}
else if(floor === 1){
        document.write("<div class=abc>" + tail + " Tail win" + "</div>")

}else(
    alert("Incorrect Name")
)