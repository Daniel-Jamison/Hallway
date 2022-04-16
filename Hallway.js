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
	var delta = 302/640

	var scale = 1;
	var canvas = document.getElementById("myCanvas");
	width = Math.floor(window.innerWidth / scale);
	height = Math.floor(window.innerHeight / scale);
	canvas.width = width * scale;
	canvas.height = height * scale;
	
	
	
	Squares2(Time,n,delta)			//Make Hall look like its moving
		
	pos = 350*Math.sin(Time/30);	
	
	Shape(pos)						//Make object move around
	
	Hall(delta)						//Make lines going toward center
		
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
	ctx.fillRect(640-10, 302-(10*delta), 2*10, 2*(10*delta));

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(640, 302);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(1280, 0);
	ctx.lineTo(640, 302);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(0, 604);
	ctx.lineTo(640, 302);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(1280, 604);
	ctx.lineTo(640, 302);
	ctx.stroke();
}

function Squares(Time,n,delta)
{
	
	var t = Time % 10
	
	for (let rec = 0; rec < n; rec++) 
	{			
		var b = rec/n + ((.1/n)*t)
		
		var c = b*b*b*b*b*b*b*b*b
		
		var d = c*640
		
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.rect(640-d, 302-(d*delta), 2*d, 2*(d*delta));
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
		
		var d1 = e1*640
		var d2 = e2*640
		var d3 = e3*640
		
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		//var ctx = canvas.getContext('2d');
		
		//ctx.fillStyle = "grey";
		//ctx.fillStyle = `rgb(${Math.floor(255*((s/n))+t)},${Math.floor(255*((s/n))+t)},${Math.floor(255*((s/n))+t)})`;
		ctx.fillStyle = `rgb(255,255,255)`;
		
		ctx.beginPath();
		ctx.moveTo(640-d1, 302-(d1*delta));
		ctx.lineTo(640+d1, 302-(d1*delta));
		ctx.lineTo(640+d2, 302-(d2*delta));
		ctx.lineTo(640-d2, 302-(d2*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(640-d1, 302+(d1*delta));
		ctx.lineTo(640+d1, 302+(d1*delta));
		ctx.lineTo(640+d2, 302+(d2*delta));
		ctx.lineTo(640-d2, 302+(d2*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(640-d1, 302+(d1*delta));
		ctx.lineTo(640-d1, 302-(d1*delta));
		ctx.lineTo(640-d3, 302-(d3*delta));
		ctx.lineTo(640-d3, 302+(d3*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(640+d1, 302-(d1*delta));
		ctx.lineTo(640+d1, 302+(d1*delta));
		ctx.lineTo(640+d3, 302+(d3*delta));
		ctx.lineTo(640+d3, 302-(d3*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.fillStyle = `rgb(0,0,0)`;
		
		ctx.beginPath();
		ctx.moveTo(640-d1, 302-(d1*delta));
		ctx.lineTo(640+d1, 302-(d1*delta));
		ctx.lineTo(640+d3, 302-(d3*delta));
		ctx.lineTo(640-d3, 302-(d3*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(640-d1, 302+(d1*delta));
		ctx.lineTo(640+d1, 302+(d1*delta));
		ctx.lineTo(640+d3, 302+(d3*delta));
		ctx.lineTo(640-d3, 302+(d3*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(640-d1, 302+(d1*delta));
		ctx.lineTo(640-d1, 302-(d1*delta));
		ctx.lineTo(640-d2, 302-(d2*delta));
		ctx.lineTo(640-d2, 302+(d2*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(640+d1, 302-(d1*delta));
		ctx.lineTo(640+d1, 302+(d1*delta));
		ctx.lineTo(640+d2, 302+(d2*delta));
		ctx.lineTo(640+d2, 302-(d2*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();

	}
}

function Shape(pos)
{
	var canvas = document.getElementById("myCanvas");
	
	var xpos2 = 640+pos+60
	var xpos1 = 640+pos-60
	
	var p = ((258*((pos-60)-((70*(pos-60))/218)))/(pos-60))-148
	
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "gray";
	ctx.strokeStyle = "black";
	ctx.lineWidth = -3;
	
	ctx.beginPath();
	ctx.moveTo(xpos1, 520);
	ctx.lineTo(xpos1, 560);
	ctx.lineTo(xpos1-((70*(pos-60))/218), 450+p);
	ctx.lineTo(xpos1-((70*(pos-60))/218), 450);
	ctx.closePath();
	ctx.stroke()
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(xpos2, 520);
	ctx.lineTo(xpos2, 560);
	ctx.lineTo(xpos2-((70*(pos+60))/218), 450+p);
	ctx.lineTo(xpos2-((70*(pos+60))/218), 450);
	ctx.closePath();
	ctx.stroke()
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(xpos1, 520);
	ctx.lineTo(xpos2, 520);
	ctx.lineTo(xpos2, 560);
	ctx.lineTo(xpos1, 560);
	ctx.closePath();
	ctx.stroke()
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(xpos1, 520);
	ctx.lineTo(xpos2, 520);
	ctx.lineTo(xpos2-((70*(pos+60))/218), 450);
	ctx.lineTo(xpos1-((70*(pos-60))/218), 450);
	ctx.closePath();
	ctx.stroke()
	ctx.fill();
}