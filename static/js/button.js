var linkstate = false
function connection() {
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
        linkstate = true;
    });

    ros.on('close', function () {
        console.log('Connection closed.');
        document.getElementById('connecting').style.display = 'none';
        document.getElementById('connected').style.display = 'none';
        document.getElementById('closed').style.display = 'inline';
        linkstate = false;
    });
}
function reconnection(){
    if(!linkstate){
        connection();
    }
    
}
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
    btnup1 = setInterval("cmdVel.publish(twist_up);", 500);
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
    btnup2 = setInterval("cmdVel.publish(twist_down);", 500);
}

function btndown_cancel() {
    clearInterval(btnup2);
}

var twist_left = new ROSLIB.Message({
    linear: {
        x: 0.0,
        y: 0.5,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    }
});

function btnleft() {
    btnup3 = setInterval("cmdVel.publish(twist_left);", 500);
}

function btnleft_cancel() {
    clearInterval(btnup3);
}

var twist_right = new ROSLIB.Message({
    linear: {
        x: 0.0,
        y: -0.5,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    }
});

function btnright() {
    btnup4 = setInterval("cmdVel.publish(twist_right);", 500);
}

function btnright_cancel() {
    clearInterval(btnup4);
}


var twist_Lup = new ROSLIB.Message({
    linear: {
        x: 0.5,
        y: 0.5,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    }
});

function btnLup() {
    btnup5 = setInterval("cmdVel.publish(twist_Lup);", 500);
}

function btnLup_cancel() {
    clearInterval(btnup5);
}

var twist_Rup = new ROSLIB.Message({
    linear: {
        x: 0.5,
        y: -0.5,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: -1.0
    }
});

function btnRup() {
    btnup6 = setInterval("cmdVel.publish(twist_Rup);", 500);
}

function btnRup_cancel() {
    clearInterval(btnup6);
}

var twist_Ldown = new ROSLIB.Message({
    linear: {
        x: -0.5,
        y: 0.5,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    }
});

function btnLdown() {
    btnup7 = setInterval("cmdVel.publish(twist_Ldown);", 500);
}

function btnLdown_cancel() {
    clearInterval(btnup7);
}

var twist_Rdown = new ROSLIB.Message({
    linear: {
        x: -0.5,
        y: 0.0,
        z: 0.0
    },
    angular: {
        x: 0.0,
        y: 0.0,
        z: 1.0
    }
});

function btnRdown() {
    btnup8 = setInterval("cmdVel.publish(twist_Rdown);", 500);
}

function btnRdown_cancel() {
    clearInterval(btnup8);
}

var twist_rotateL = new ROSLIB.Message({
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

function rotateL() {
    btnup9 = setInterval("cmdVel.publish(twist_rotateL);", 500);
}

function rotateL_cancel() {
    clearInterval(btnup9);
}

var twist_rotateR = new ROSLIB.Message({
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

function rotateR() {
    btnup10 = setInterval("cmdVel.publish(twist_rotateR);", 500);
}

function rotateR_cancel() {
    clearInterval(btnup10);
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

shortcut.add("Q", function () {
    if (w_down == false) {
        console.log("Q");
        btnLup()
        w_down = true
    }

}, {
    'type': 'keydown',
    'propagate': false,
    'target': document
});
shortcut.add("Q", function () {
    if (w_down == true) {
        console.log("QP");
        btnLup_cancel()
        w_down = false
    }
}, {
    'type': 'keyup',
    'propagate': false,
    'target': document
});

shortcut.add("E", function () {
    if (w_down == false) {
        console.log("E");
        btnRup()
        w_down = true
    }

}, {
    'type': 'keydown',
    'propagate': false,
    'target': document
});
shortcut.add("E", function () {
    if (w_down == true) {
        console.log("EP");
        btnRup_cancel()
        w_down = false
    }
}, {
    'type': 'keyup',
    'propagate': false,
    'target': document
});

shortcut.add("Z", function () {
    if (w_down == false) {
        console.log("Z");
        btnLdown()
        w_down = true
    }

}, {
    'type': 'keydown',
    'propagate': false,
    'target': document
});
shortcut.add("Z", function () {
    if (w_down == true) {
        console.log("ZP");
        btnLdown_cancel()
        w_down = false
    }
}, {
    'type': 'keyup',
    'propagate': false,
    'target': document
});

shortcut.add("C", function () {
    if (w_down == false) {
        console.log("C");
        btnRdown()
        w_down = true
    }

}, {
    'type': 'keydown',
    'propagate': false,
    'target': document
});
shortcut.add("C", function () {
    if (w_down == true) {
        console.log("CP");
        btnRdown_cancel()
        w_down = false
    }
}, {
    'type': 'keyup',
    'propagate': false,
    'target': document
});

shortcut.add("J", function () {
    if (w_down == false) {
        console.log("J");
        rotateR()
        w_down = true
    }

}, {
    'type': 'keydown',
    'propagate': false,
    'target': document
});
shortcut.add("J", function () {
    if (w_down == true) {
        console.log("JP");
        rotateR_cancel()
        w_down = false
    }
}, {
    'type': 'keyup',
    'propagate': false,
    'target': document
});

shortcut.add("K", function () {
    if (w_down == false) {
        console.log("K");
        rotateL()
        w_down = true
    }

}, {
    'type': 'keydown',
    'propagate': false,
    'target': document
});
shortcut.add("K", function () {
    if (w_down == true) {
        console.log("KP");
        rotateL_cancel()
        w_down = false
    }
}, {
    'type': 'keyup',
    'propagate': false,
    'target': document
});





