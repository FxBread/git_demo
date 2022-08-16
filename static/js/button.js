var ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});//connecting to rosbridge with websocket

//If there is an error on the backend, an 'error' will be show
ros.on('error', function (error) {
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('connected').style.display = 'none';
    document.getElementById('closed').style.display = 'none';
    document.getElementById('error').style.display = 'inline';
    console.log(error);
});

// Find out exactly when we made a connection.
ros.on('connection', function () {
    console.log('Connection made!');
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('closed').style.display = 'none';
    document.getElementById('connected').style.display = 'inline';
});

ros.on('close', function () {
    console.log('Connection closed.');
    document.getElementById('connecting').style.display = 'none';
    document.getElementById('connected').style.display = 'none';
    document.getElementById('closed').style.display = 'inline';
});

var cmdVel = new ROSLIB.Topic({
    ros: ros,
    name: '/cmd_vel',
    messageType: 'geometry_msgs/Twist'
});

var twist_up = new ROSLIB.Message({
    linear: {
        x: 0.5,
        y: 0.0,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    }
});

function btnup() {
    btnup1 = setInterval("cmdVel.publish(twist_up);", 1000);
}

function btnup_cancel() {
    clearInterval(btnup1);
}

var twist_down = new ROSLIB.Message({
    linear: {
        x: -0.5,
        y: 0.0,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    }
});

function btndown() {
    btnup2 = setInterval("cmdVel.publish(twist_down);", 1000);
}

function btndown_cancel() {
    clearInterval(btnup2);
}

var twist_left = new ROSLIB.Message({
    linear: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: 1.0
    }
});

function btnleft() {
    btnup3 = setInterval("cmdVel.publish(twist_left);", 1000);
}

function btnleft_cancel() {
    clearInterval(btnup3);
}

var twist_right = new ROSLIB.Message({
    linear: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: -1.0
    }
});

function btnright() {
    btnup4 = setInterval("cmdVel.publish(twist_right);", 1000);
}

function btnright_cancel() {
    clearInterval(btnup4);
}

var w_down = false

shortcut.add("W", function () {
    if (w_down == false) {
        console.log("W");
        btnup()
        w_down = true
    }    
}, {
    'type': 'keydown',
    'propagate': false,
    'target': document
});
shortcut.add("W", function () {
    if (w_down == true) {
        console.log("Wp");
        btnup_cancel()
        w_down = false
    }
}, {
    'type': 'keyup',
    'propagate': false,
    'target': document
});


shortcut.add("A", function () {
    if (w_down == false) {
        console.log("A");
        btnleft()
        w_down = true
    }   
}, {
    'type': 'keydown',
    'propagate': false,
    'target': document
});
shortcut.add("A", function () {
    if (w_down == true) {
        console.log("AP");
        btnleft_cancel()
        w_down = false
    } 
}, {
    'type': 'keyup',
    'propagate': false,
    'target': document
});





shortcut.add("S", function () {
    if (w_down == false) {
        console.log("S");
        btndown()
        w_down = true
    }
    
}, {
    'type': 'keydown',
    'propagate': false,
    'target': document
});
shortcut.add("S", function () {
    if (w_down == true) {
        console.log("SP");
        btndown_cancel()
        w_down = false
    } 
}, {
    'type': 'keyup',
    'propagate': false,
    'target': document
});


shortcut.add("D", function () {
    if (w_down == false) {
        console.log("D");
        btnright()
        w_down = true
    }
    
}, {
    'type': 'keydown',
    'propagate': false,
    'target': document
});
shortcut.add("D", function () {
    if (w_down == true) {
        console.log("DP");
        btnright_cancel()
        w_down = false
    } 
}, {
    'type': 'keyup',
    'propagate': false,
    'target': document
});


