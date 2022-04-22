window.onload = function init()

{	
	document.onkeydown = checkKey;
	
	var n = 64;
	var timestep = 50
	
	var steps = 0;
	var intervalId = setInterval(function(){Rect(steps,n);
	   steps++;
	}, timestep);
}


function Rect(Time,n)
{	



	var scale = 1;
	var canvas = document.getElementById("myCanvas");
	width = Math.floor(window.innerWidth / scale);
	height = Math.floor(window.innerHeight / scale);
	canvas.width = width * scale;
	canvas.height = height * scale;
	
	xcenter = width/2
	ycenter = height/2
	
	setx = xcenter+(xcenter*.5)*Math.sin(Time/20)
	sety= ycenter+(ycenter*.5)*Math.cos(Time/20)
	
//	setx = .8*width
//	sety= .5*height
	
	
	
	
	delta1 = (setx)/(sety)
	delta2 = (height-setx)/(sety)
	delta3 = (height-setx)/(width-sety)
	delta4 = (setx)/(width-sety)
	
	Squares(Time,n)			//Make Hall look like its moving
	
	Hall()						//Make lines going toward center

	

		
	//pos = (1/4)*width*Math.sin(Time/30);	
	pos = 350	
	

	
//	Shape(pos)						//Make object move around
	
}


function checkKey(e) 
{

	var a

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
	   a = -1;
    }
    else if (e.keyCode == '39') {
       // right arrow
	   a = 1;
    }
	else {
		a = 0;
	}
	console.log(a);
	return a
}

function Hall()
{	
	
	var ctx = document.getElementById("myCanvas").getContext("2d");
	
	z1 = .03
	
	ctx.fillStyle = "black";
	
	ctx.beginPath();
	ctx.moveTo(setx-z1*(setx-0),sety-z1*(sety-0));
	ctx.lineTo(setx-z1*(setx-width),sety-z1*(sety-0));
	ctx.lineTo(setx-z1*(setx-width),sety-z1*(sety-height));
	ctx.lineTo(setx-z1*(setx-0),sety-z1*(sety-height));
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(setx, sety);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(width, 0);
	ctx.lineTo(setx, sety);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(width, height);
	ctx.lineTo(setx, sety);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(0, height);
	ctx.lineTo(setx, sety);
	ctx.stroke();
}

function Squares(Time,n)
{
	var ctx = document.getElementById("myCanvas").getContext("2d");
			
	var t = Time % 10
	t = 4
	for (let s = 0; s < n; s++) 
	{
		var b1 = (2*s)/n + ((.2/n)*t)
		var b2 = ((2*s)-1)/n + ((.2/n)*t)
		var b3 = ((2*s)+1)/n + ((.2/n)*t)
		//var b1 = b+(.05*(2*s))
		//var b2 = b+(.05*(2*s+1))
		
		pow = 11
					
		var e1 = Math.pow(b1,pow)
		var e2 = Math.pow(b2,pow)
		var e3 = Math.pow(b3,pow)
				
		ctx.strokeStyle = "black";
		
		ctx.fillStyle = `rgb(255,255,255)`;
				
		ctx.beginPath();
		ctx.moveTo(setx-e1*(setx-0),sety-e1*(sety-0));
		ctx.lineTo(setx-e2*(setx-0),sety-e2*(sety-0));
		ctx.lineTo(setx-e2*(setx-0),sety-e2*(sety-height));
		ctx.lineTo(setx-e1*(setx-0),sety-e1*(sety-height));
		ctx.closePath();
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(setx-e1*(setx-width),sety-e1*(sety-0));
		ctx.lineTo(setx-e2*(setx-width),sety-e2*(sety-0));
		ctx.lineTo(setx-e2*(setx-width),sety-e2*(sety-height));
		ctx.lineTo(setx-e1*(setx-width),sety-e1*(sety-height));
		ctx.closePath();
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(setx-e1*(setx-0),sety-e1*(sety-0));
		ctx.lineTo(setx-e2*(setx-0),sety-e2*(sety-0));
		ctx.lineTo(setx-e2*(setx-width),sety-e2*(sety-0));
		ctx.lineTo(setx-e1*(setx-width),sety-e1*(sety-0))
		ctx.closePath();
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(setx-e1*(setx-0),sety-e1*(sety-height));
		ctx.lineTo(setx-e2*(setx-0),sety-e2*(sety-height));
		ctx.lineTo(setx-e2*(setx-width),sety-e2*(sety-height));
		ctx.lineTo(setx-e1*(setx-width),sety-e1*(sety-height));
		ctx.closePath();
		ctx.fill();
		
		
		
		ctx.fillStyle = `rgb(90,90,90)`;
		
		
		ctx.beginPath();
		ctx.moveTo(setx-e1*(setx-0),sety-e1*(sety-0));
		ctx.lineTo(setx-e3*(setx-0),sety-e3*(sety-0));
		ctx.lineTo(setx-e3*(setx-0),sety-e3*(sety-height));
		ctx.lineTo(setx-e1*(setx-0),sety-e1*(sety-height));
		ctx.closePath();
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(setx-e1*(setx-width),sety-e1*(sety-0));
		ctx.lineTo(setx-e3*(setx-width),sety-e3*(sety-0));
		ctx.lineTo(setx-e3*(setx-width),sety-e3*(sety-height));
		ctx.lineTo(setx-e1*(setx-width),sety-e1*(sety-height));
		ctx.closePath();
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(setx-e1*(setx-0),sety-e1*(sety-0));
		ctx.lineTo(setx-e3*(setx-0),sety-e3*(sety-0));
		ctx.lineTo(setx-e3*(setx-width),sety-e3*(sety-0));
		ctx.lineTo(setx-e1*(setx-width),sety-e1*(sety-0))
		ctx.closePath();
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(setx-e1*(setx-0),sety-e1*(sety-height));
		ctx.lineTo(setx-e3*(setx-0),sety-e3*(sety-height));
		ctx.lineTo(setx-e3*(setx-width),sety-e3*(sety-height));
		ctx.lineTo(setx-e1*(setx-width),sety-e1*(sety-height));
		ctx.closePath();
		ctx.fill();
	}

}
function Squares2()
{
	var t = Time % 10
	
	for (let s = 0; s < n; s++) 
	{
		var b1 = (2*s)/n + ((.2/n)*t)
		var b2 = ((2*s)-1)/n + ((.2/n)*t)
		var b3 = ((2*s)+1)/n + ((.2/n)*t)
		//var b1 = b+(.05*(2*s))
		//var b2 = b+(.05*(2*s+1))
		
		pow = 10
					
		var e1 = Math.pow(b1,pow)
		var e2 = Math.pow(b2,pow)
		var e3 = Math.pow(b3,pow)
		
		var d1 = e1*xcenter
		var d2 = e2*xcenter
		var d3 = e3*xcenter
		
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		//var ctx = canvas.getContext('2d');
		
		//ctx.fillStyle = "grey";
		//ctx.fillStyle = `rgb(${Math.floor(255*((s/n))+t)},${Math.floor(255*((s/n))+t)},${Math.floor(255*((s/n))+t)})`;
		ctx.fillStyle = `rgb(0,0,0)`;
		
		ctx.beginPath();
		ctx.moveTo(xcenter-d1, ycenter-(d1*delta));
		ctx.lineTo(xcenter+d1, ycenter-(d1*delta));
		ctx.lineTo(xcenter+d2, ycenter-(d2*delta));
		ctx.lineTo(xcenter-d2, ycenter-(d2*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(xcenter-d1, ycenter+(d1*delta));
		ctx.lineTo(xcenter+d1, ycenter+(d1*delta));
		ctx.lineTo(xcenter+d2, ycenter+(d2*delta));
		ctx.lineTo(xcenter-d2, ycenter+(d2*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(xcenter-d1, ycenter+(d1*delta));
		ctx.lineTo(xcenter-d1, ycenter-(d1*delta));
		ctx.lineTo(xcenter-d3, ycenter-(d3*delta));
		ctx.lineTo(xcenter-d3, ycenter+(d3*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(xcenter+d1, ycenter-(d1*delta));
		ctx.lineTo(xcenter+d1, ycenter+(d1*delta));
		ctx.lineTo(xcenter+d3, ycenter+(d3*delta));
		ctx.lineTo(xcenter+d3, ycenter-(d3*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.fillStyle = `rgb(255,255,255)`;
		
		ctx.beginPath();
		ctx.moveTo(xcenter-d1, ycenter-(d1*delta));
		ctx.lineTo(xcenter+d1, ycenter-(d1*delta));
		ctx.lineTo(xcenter+d3, ycenter-(d3*delta));
		ctx.lineTo(xcenter-d3, ycenter-(d3*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(xcenter-d1, ycenter+(d1*delta));
		ctx.lineTo(xcenter+d1, ycenter+(d1*delta));
		ctx.lineTo(xcenter+d3, ycenter+(d3*delta));
		ctx.lineTo(xcenter-d3, ycenter+(d3*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(xcenter-d1, ycenter+(d1*delta));
		ctx.lineTo(xcenter-d1, ycenter-(d1*delta));
		ctx.lineTo(xcenter-d2, ycenter-(d2*delta));
		ctx.lineTo(xcenter-d2, ycenter+(d2*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(xcenter+d1, ycenter-(d1*delta));
		ctx.lineTo(xcenter+d1, ycenter+(d1*delta));
		ctx.lineTo(xcenter+d2, ycenter+(d2*delta));
		ctx.lineTo(xcenter+d2, ycenter-(d2*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();

	}
}

function Shape(pos)
{
	var canvas = document.getElementById("myCanvas");
	
	var xpos2 = xcenter+pos+(width/20)
	var xpos1 = xcenter+pos-(width/20)
	
	var p = ((((258/604)*height)*((pos-(width/20))-((70*(pos-(width/20)))/218)))/(pos-(width/20)))-(148/604)*height
	
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "gray";
	ctx.strokeStyle = "black";
	ctx.lineWidth = -3;
	
	ctx.beginPath();
	ctx.moveTo(xpos1, (9/12)*height);
	ctx.lineTo(xpos1, (10/12)*height);
	ctx.lineTo(xpos1-((70*(pos-(width/20)))/218), (8/12)*height+p);
	ctx.lineTo(xpos1-((70*(pos-(width/20)))/218), (8/12)*height);
	ctx.closePath();
	ctx.stroke()
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(xpos2, (9/12)*height);
	ctx.lineTo(xpos2, (10/12)*height);
	ctx.lineTo(xpos2-((70*(pos+(width/20)))/218), (8/12)*height+p);
	ctx.lineTo(xpos2-((70*(pos+(width/20)))/218), (8/12)*height);
	ctx.closePath();
	ctx.stroke()
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(xpos1, (9/12)*height);
	ctx.lineTo(xpos2, (9/12)*height);
	ctx.lineTo(xpos2, (10/12)*height);
	ctx.lineTo(xpos1, (10/12)*height);
	ctx.closePath();
	ctx.stroke()
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(xpos1, (9/12)*height);
	ctx.lineTo(xpos2, (9/12)*height);
	ctx.lineTo(xpos2-(((pos+(width/20)))/3), (8/12)*height);
	ctx.lineTo(xpos1-(((pos-(width/20)))/3), (8/12)*height);
	ctx.closePath();
	ctx.stroke()
	ctx.fill();
}