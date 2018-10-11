// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

// ======================

// ======================

// function to turn left de rover object

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      document.getElementById("roverimg").src = "imgroverwest.jpg";
      break;
    case "W":
      rover.direction = "S";
      document.getElementById("roverimg").src = "imgroversouth.jpg";
      break;
    case "S":
      rover.direction = "E";
      document.getElementById("roverimg").src = "imgrovereast.jpg";
      break;
    case "E":
      rover.direction = "N";
      document.getElementById("roverimg").src = "imgrovernorth.jpg";
      break;
  }
  console.log("Rover direction: " + rover.direction);
  return rover.direction;

}

// function to turn right de rover object

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      document.getElementById("roverimg").src = "imgrovereast.jpg";
      break;
    case "E":
      rover.direction = "S";
      document.getElementById("roverimg").src = "imgroversouth.jpg";
      break;
    case "S":
      rover.direction = "W";
      document.getElementById("roverimg").src = "imgroverwest.jpg";
      break;
    case "W":
      rover.direction = "N";
      document.getElementById("roverimg").src = "imgrovernorth.jpg";
      break;
  }
  console.log("Rover direction: " + rover.direction);
  return rover.direction;

}


// function to move forward de rover object and to compilate its movement in a "10x10" grid.
// If the rover is going out of the grid when x > 10 and y > 10 there will be an alert to indicate to turn backwards

function moveForward(rover){
  switch (rover.direction){
    case "N":
    if (rover.y > 0){
    rover.y--;
    document.getElementById("positiony").innerHTML = rover.y;
    document.getElementById("failcommand1").innerHTML = "";
  } else {
    alert("You are entring in an martian village. Move carefully backwards...Now.");
    document.getElementById("roverimg").src = "martians.jpg";  }
  break;
    case "W":
    if (rover.x > 0){
      rover.x--;
      document.getElementById("positionx").innerHTML = rover.x;
      document.getElementById("failcommand1").innerHTML = "";
  } else {
    alert("You are entring in an martian village. Move carefully backwards...Now.");
  document.getElementById("roverimg").src = "martians.jpg"; }
  break;
    case "E":
    if (rover.x < 10){
    rover.x++;
    document.getElementById("positionx").innerHTML = rover.x;
    document.getElementById("failcommand1").innerHTML = "";
  } else {
    alert("You are entring in an martian village. Move carefully backwards...Now.");
  document.getElementById("roverimg").src = "martians.jpg";}
  break;
    case "S":
    if (rover.y < 10){
      rover.y++;
      document.getElementById("positiony").innerHTML = rover.y;
        document.getElementById("failcommand1").innerHTML = "";
    } else {
      alert("You are entring in an martian village. Move carefully backwards...Now.");
      document.getElementById("roverimg").src = "martians.jpg";}
  break;
  }

  console.log("Rover position is :" + "[" + rover.x  + ", " + rover.y + "]");
  rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
  document.getElementById("travelloghtml").innerHTML = rover.travelLog;
}

// function to move forward de rover object and to compilate its movement in a "10x10" grid.
// If the rover is going out of the grid when x > 10 and y > 10 there will be an alert to indicate to turn backwards

function moveBackward(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.y < 10) {
        rover.y++;
      } else {
        alert("You are entering in a martian village. Move carefully backwards...Now.");
      }
      break;
    case "W":
      if (rover.x < 10) {
        rover.x++;
      } else {
        alert("You are entering in a martian village. Move carefully backwards...Now.");
      }
      break;
    case "E":
      if (rover.x > 0) {
        rover.x--;
      } else {
        alert("You are entering in a martian village. Move carefully backwards...Now.");
      }
      break;
    case "S":
      if (rover.y > 0) {
        rover.y--;
      } else {
        alert("You are entering in a martian village. Move carefully backwards...Now.");
      }
      break;
  }
  console.log("Rover position is :" + "[" + rover.x + "," + rover.y + "]");
  rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
    document.getElementById("travelloghtml").innerHTML = rover.travelLog;
}

//function to recieve a list of commands to move the rover object

function movementCommands(commands) {
  document.getElementById("failcommand").innerHTML = "";
  for (var i = 0; i < commands.length; i++) {
    if (commands[i] === "f") {
      moveForward(rover);
    } else if (commands[i] === "b") {
      moveBackward(rover);
    } else if (commands[i] === "r") {
      turnRight(rover);
    } else if (commands[i] === "l") {
      turnLeft(rover);
    } else {
    document.getElementById("failcommand1").innerHTML = "What did you expect? " + "' " + commands[i] + " '" + " isn't a valid comand! Use 'r','l','f' or 'b' :)";
    alert("you must write the commands 'l','r','f' or 'b'");

    }
      document.getElementById("commands").innerHTML = commands;


  }

}
