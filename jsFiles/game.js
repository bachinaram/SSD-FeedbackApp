$(function(){
    var canvas = document.getElementById('firstCanvas');
    var lineContext = canvas.getContext('2d');
    //horizantal line code
    
    lineContext.moveTo(10, 400);
    lineContext.lineTo(1410, 400);
    lineContext.lineWidth = 20;
    lineContext.strokeStyle = 'black';
    lineContext.lineCap = 'butt';
    lineContext.stroke();

    //rect code which is car top
    lineContext.rect(1190, 314, 200, 50); //1st car body
    lineContext.rect(810, 284, 300, 80); //lorry body
    lineContext.rect(810, 224, 150, 60); //lorry head
    lineContext.rect(380, 224, 300, 140); //bus body
    lineContext.rect(90, 314, 200, 50); //2nd car body
    lineContext.rect(130, 260, 120, 50); //2nd car top
    lineContext.fillStyle = 'black';
    lineContext.fill();
    lineContext.lineWidth = 7;
    lineContext.strokeStyle = 'black';
    lineContext.moveTo(1220, 410);
    lineContext.quadraticCurveTo(1250, 80, 1368, 320); //car top
    lineContext.stroke();


    //circle code
    var circleContext = canvas.getContext("2d");
    circleContext.beginPath();
    circleContext.lineWidth = 5;
    circleContext.fillStyle = 'red';
    circleContext.strokeStyle = 'red';
    //context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    //1st car tyres
    circleContext.arc(1350,369,20,0,2*Math.PI);
    circleContext.arc(1330,369,20,0,2*Math.PI);
    circleContext.arc(1250,369,20,0,2*Math.PI);
    circleContext.arc(1230,369,20,0,2*Math.PI);

    //lorry tyres
    circleContext.arc(1100,369,20,0,2*Math.PI);
    circleContext.arc(1080,369,20,0,2*Math.PI);
    circleContext.arc(950,369,20,0,2*Math.PI);
    circleContext.arc(930,369,20,0,2*Math.PI);

    //bus tyres
    circleContext.arc(600,369,20,0,2*Math.PI);
    circleContext.arc(580,369,20,0,2*Math.PI);
    circleContext.arc(450,369,20,0,2*Math.PI);
    circleContext.arc(430,369,20,0,2*Math.PI);


    //2nd car tyres
    circleContext.arc(250,369,20,0,2*Math.PI);
    circleContext.arc(230,369,20,0,2*Math.PI);
    circleContext.arc(150,369,20,0,2*Math.PI);
    circleContext.arc(130,369,20,0,2*Math.PI);

    circleContext.fill();
    circleContext.stroke();


    
});

