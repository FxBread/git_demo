
$(function () {
    $("#mybutton").click(function (event) {
        $.getJSON('/SomeFunction', {},
            function (data) { }); return false;
    });
});

var videoc = document.querySelector('.video>img')


function rgb_Video(){
    document.getElementById("videoc").src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/800px-A_black_image.jpg";
    document.getElementById("videoc").src="/video_feed";
    
}
function head_Orientation(){
    document.getElementById("videoc").src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/800px-A_black_image.jpg";
    document.getElementById("videoc").src="/dect_video";

}
function close_video(){
    location.reload();
}
ps4_on.onclick = function () {

}

ps4_off.onclick = function () {

}

raidarOff.onclick = function () {

}

raidarOn.onclick = function () {

}