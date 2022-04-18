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
	var delta = ycenter/xcenter
	
	
	
	Squares2(Time,n,delta)			//Make Hall look like its moving
		
	pos = (1/4)*width*Math.sin(Time/30);	
	//pos = 350	
	
	Hall(delta)						//Make lines going toward center
	
	Shape(pos)						//Make object move around
	
	
		
}

document.onkeydown = checkKey;

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

function Hall(delta)
{	
	
	var ctx = document.getElementById("myCanvas").getContext("2d");
	
	ctx.fillStyle = "black";
	ctx.fillRect(xcenter-10, ycenter-(10*delta), 2*10, 2*(10*delta));

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(xcenter, ycenter);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(xcenter*2, 0);
	ctx.lineTo(xcenter, ycenter);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(0, ycenter*2);
	ctx.lineTo(xcenter, ycenter);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(xcenter*2, ycenter*2);
	ctx.lineTo(xcenter, ycenter);
	ctx.stroke();
}

function Squares(Time,n,delta)
{
	
	var t = Time % 10
	
	for (let rec = 0; rec < n; rec++) 
	{			
		var b = rec/n + ((.1/n)*t)
		
		var c = b*b*b*b*b*b*b*b*b
		
		var d = c*xcenter
		
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.rect(xcenter-d, ycenter-(d*delta), 2*d, 2*(d*delta));
		ctx.stroke();
	}
}

function Squares2(Time,n,delta)
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
	ctx.lineTo(xpos2-((70*(pos+(width/20)))/218), (8/12)*height);
	ctx.lineTo(xpos1-((70*(pos-(width/20)))/218), (8/12)*height);
	ctx.closePath();
	ctx.stroke()
	ctx.fill();
}