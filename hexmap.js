var svg,hex0;
var point0;
var n = 1;

var board = [];
//square array representation
/*
 *  |------------------|
 *  |  	|   | 0 |   |  |
 *  |------------------|
 *  |  	| 5 |  	| 1 |  |
 *  |------------------|
 *  |  	|   | X	|   |  |
 *  |------------------|
 *  |  	| 4 |  	| 2 |  |
 *  |------------------|
 *  |  	|   | 3	|   |  |
 *  |------------------|
 */
-*
function init()
{
    svg = $("#svg")[0];
    hex0=$("#hex0")[0];

    //  point0 = triangle.points.getItem(0);
    console.log("Started: ", hex0, svg);
    //buildMap()
}

function buildMap() {
    //104,90
    for(var j = 0; j < 25; j++) {
	var y = j*46;
	var xbase = j%2 ? 156/2 : 0;
	for(var i=0; i < 16; i++){
	    var x = 158*i + xbase;
	    var hex = cloneAndAdd(x,y);
	    board[i,j]=hex;
	}
    }
}

function cloneAndAdd(transX, transY)
{	      
  var xform = svg.createSVGTransform();
  xform.setTranslate(transX,transY);

  var hex = hex0.cloneNode(true);
  hex.id = "hex" + n++;
  hex.style.display="block";
  hex.neighbors = new Array(6);
  hex.transform.baseVal.appendItem(xform);
  //hex.addEventListener("mouseover",
  //function(evt) { console.log("Clicked: ",evt.target.id, evt) },
  //		      false)
  svg.appendChild(hex);
  return hex;
}


function blink(id) {
    $("#" + id).addClass("red");
    window.setTimeout(function() {   $("#" + id).removeClass("red"); },0);
}
