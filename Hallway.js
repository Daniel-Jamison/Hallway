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

	var scale = 5;
	var canvas = document.getElementById("myCanvas");
	width = Math.floor(window.innerWidth / scale);
	height = Math.floor(window.innerHeight / scale);
	canvas.width = width * scale;
	canvas.height = height * scale;
	
	Hall(delta)						//Make lines going toward center
	
	Squares(Time,n,delta)			//Make Hall look like its moving
		
	pos = 350*Math.sin(Time/30);	
	
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
	
	var t = Time % 100
	
		var b = t/100
				
		var c = b*b*b
		
		var d = (c*630)+10
		
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		//var ctx = canvas.getContext('2d');
		
		ctx.fillStyle = "grey";
		
		ctx.beginPath();
		ctx.moveTo(640-d, 302-(d*delta));
		ctx.lineTo(2*d, 302-(d*delta));
		ctx.lineTo(640-(d+100), 302-((d+100)*delta));
		ctx.lineTo(2*(d+100), 2*((d+100)*delta));
		ctx.closePath();
		ctx.stroke()
		ctx.fill();
	
}

function Shape(pos)
{
	var canvas = document.getElementById("myCanvas");
	
	var xpos2 = 640+pos+60
	var xpos1 = 640+pos-60
	
	var p = ((258*((pos-60)-((70*(pos-60))/218)))/(pos-60))-148
	
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "grey";
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