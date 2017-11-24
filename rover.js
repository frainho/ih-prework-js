//Create Rover object
var myRover = {
  position: [0,0], 
  direction: 'N'
};


//Randomize position of Rover in grid
myRover.position = [Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1)];

console.log('Rover initiated, currently at position: [' + myRover.position[0] + ", " + myRover.position[1] + '] and facing: ' + myRover.direction);

//Function to move forward rover
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]--
      break;
  };
  if (rover.position[0] < 1) {
    rover.position[0] = 10;
  } else if (rover.position[1] < 1) {
    rover.position[1] = 10;
  } else if (rover.position[1] > 10) {
    rover.position[1] = 1;
  } else if (rover.position[0] > 10) {
    rover.position[0] = 1;
  }

  console.log("Forward Move - New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

//Function to move back rover
function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]++
      break;
  };
  if (rover.position[0] < 1) {
    rover.position[0] = 10;
  } else if (rover.position[1] < 1) {
    rover.position[1] = 10;
  } else if (rover.position[1] > 10) {
    rover.position[1] = 1;
  } else if (rover.position[0] > 10) {
    rover.position[0] = 1;
  }

  console.log("Backward Move - New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

//Function to move rover left
function turnLeft(rover) {
   if (rover.direction == 'N') {
     rover.direction = 'W';
   } else if (rover.direction == 'W') {
     rover.direction = 'S';
   } else if (rover.direction == 'S') {
     rover.direction = 'E';
   } else {
     rover.direction = 'N';
   }

   console.log('I am now facing: ' + rover.direction);
}
//Function to move rover right
function turnRight(rover) {
  if (rover.direction == 'N') {
    rover.direction = 'E';
  } else if (rover.direction == 'E') {
    rover.direction = 'S';
  } else if (rover.direction == 'S') {
    rover.direction = 'W';
  } else {
    rover.direction = 'N';
  }

  console.log('I am now facing: ' + rover.direction);
}

function go(moves) {
  var moveArray = moves.split('');
  for (var i = 0; i < moveArray.length; i++) {
      if (moveArray[i] == 'f') {
        goForward(myRover);
      } else if (moveArray[i] == 'b') {
        goBack(myRover);
      } else if (moveArray[i] == 'l') {
        turnLeft(myRover);
      } else {
        turnRight(myRover);
      }
  }
}

vamonos = 'ffbflfffrbbbbb'
go(vamonos);
