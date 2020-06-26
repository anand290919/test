var xPos = 240;
var yPos = -2;
var leftX = 55;
var rightX = 204;
var leftY = 123;
var rightY = 69;
var xPos2 = -9;
var yPos2 = 189;

draw = function() {
    background(10, 35, 199);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 7, 7);
    ellipse(xPos2, yPos2, 7, 7);
    
    //buildings
    fill(0, 0, 0);
    rect(1, 265, 40, 133);
    rect(44, 288, 57, 109);
    rect(102, 300, 40, 100);
    rect(145, 231, 72, 169);
    rect(203, 288, 57, 19);
    rect(227, 231, 72, 169);
    rect(301, 300, 40, 100);
    rect(344, 270, 57, 126);
    
    //moon
    noStroke();
    fill(237, 237, 237);
    ellipse(79, 60, 90, 90);
    fill(247, 247, 247);
    ellipse(72, 59, 70, 69);
    
    //stars
    fill(234, 250, 87);
    ellipse(223, 59, 5, 5);
    ellipse(291, 32, 5, 5);
    ellipse(174, 106, 5, 5);
    ellipse(359, 59, 5, 5);
    ellipse(166, 25, 5, 5);
    ellipse(14, 127, 5, 5);
    ellipse(302, 94, 5, 5);
    ellipse(89, 161, 5, 5);

    // clouds 
    fill(217, 217, 217);
    // left cloud
    ellipse(leftX, leftY, 126, 97);
    ellipse(leftX+63, leftY, 70, 60);
    ellipse(leftX-62, leftY, 70, 60);
    
    // right cloud
    ellipse(rightX, rightY, 126, 97);
    ellipse(rightX+62, rightY, 70, 60);
    ellipse(rightX-62, rightY, 70, 60);
    
    leftX -= 0.2;
    rightX += 0.2;
    xPos++;
    yPos++;
    xPos2++;
    yPos2--;


};



