// var ros = new ROSLIB.Ros({
//     url: 'ws://localhost:9090'
// });

var viewer = new ROS2D.Viewer({
    divID: 'map',
    width: 600,
    height: 500
});

var gridClient = new ROS2D.OccupancyGridClient({
    ros: ros,
    rootObject: viewer.scene
});

gridClient.on('change', function () {
    viewer.scaleToDimensions(gridClient.currentGrid.width, gridClient.currentGrid.height);
}); //fit the scale

