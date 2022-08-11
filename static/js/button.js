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

var twist = new ROSLIB.Message({
        linear: {
            x: 0.1,
            y: 0.2,
            z: 0.3
        },
        angular: {
            x: -0.1,
            y: -0.2,
            z: -0.3
        }
    });

function btnup(){
    btnup1 = setInterval("cmdVel.publish(twist);",3000);
}

function btnup_cancel(){
    clearInterval(btnup1);
}

