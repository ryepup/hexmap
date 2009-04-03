var svg,hx0;
var point0;
var n = 1;

function init()
{
    hx0=$("#hx0")[0];
    svg = $("#svg")[0];
    //  point0 = triangle.points.getItem(0);
    console.log("Started: ", hx0, svg);
    
    for(var y= 0; y < 1000; y+=92) {
	buildRow(0,y);
	buildRow(156/2 + 1,y+46);
    }
}

function buildRow(x,y) {
    //104,90
    for(var i=0; i < 16; i++){
	cloneAndAdd(158*i+x,y);
    }

}

function cloneAndAdd(transX, transY)
{
  var xform = svg.createSVGTransform();
  xform.setTranslate(transX,transY);

  var hx = hx0.cloneNode(true);
  hx.id = "hx" + n++;
  hx.style.display="block";
  hx.transform.baseVal.appendItem(xform);
  //hx.addEventListener("mouseover",
  //function(evt) { console.log("Clicked: ",evt.target.id, evt) },
  //		      false)
  svg.appendChild(hx);
}
