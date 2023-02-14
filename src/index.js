// global variable for the player
var player;
var myVideoTimer;

// Add css to main page
var head = document.getElementsByTagName("HEAD")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "src/css/style.css";
head.appendChild(link);

// // Add HTML in Body // @TODO: HTML code should be moved to
// const xhttpHTML = new XMLHttpRequest();
// xhttpHTML.onload = function () {
//   document.body.innerHTML += this.responseText;
// };
// xhttpHTML.open("GET", "src/html/sticky-popup.html");
// xhttpHTML.send();
document.body.innerHTML +=
  '<div class="sticky-video-modal"> <div class="sticky-video-modal-header"> <a href="#" class="sticky-video-modal-resize sticky-video-modal-btn" onclick="toggleView()" > <img src="src/img/ic-maximize.svg" alt="maximize" class="maximize-icon"/> <img src="src/img/ic-minimize.svg" alt="minimize" class="minimize-icon"/> </a> <a href="#" class="sticky-video-modal-close sticky-video-modal-btn" onclick="closeStickyVideoModal()" > <img src="src/img/ic-close.svg" alt="close"/> </a> </div><div class="sticky-video-modal-body"> <div id="sticky-video-modal-video"></div></div></div>';

// Add Default Values for video
if (!localStorage.getItem("videoModalView"))
  localStorage.setItem("videoModalView", "fullscreen-mode");

if (!localStorage.getItem("videoModalFlag"))
  localStorage.setItem("videoModalFlag", "false");

if (localStorage.getItem("videoModalView") == "smallscreen-mode")
  document.body.classList.add("smallscreen-mode");
else document.body.classList.add("fullscreen-mode");

// Toggle Modal View
function toggleView() {
  if (localStorage.getItem("videoModalView") == "fullscreen-mode") {
    localStorage.setItem("videoModalView", "smallscreen-mode");
    document.body.classList.add("smallscreen-mode");
    document.body.classList.remove("fullscreen-mode");
  } else {
    localStorage.setItem("videoModalView", "fullscreen-mode");
    document.body.classList.remove("smallscreen-mode");
    document.body.classList.add("fullscreen-mode");
  }
}

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  player = new YT.Player("sticky-video-modal-video", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  if (
    localStorage.getItem("videoID") &&
    localStorage.getItem("videoModalFlag") == "false"
  ) {
    player.loadVideoById({
      videoId: localStorage.getItem("videoID"),
    });
    player.pauseVideo();
  }

  // Video Modal resume on refresh
  if (
    localStorage.getItem("videoModalView") == "smallscreen-mode" &&
    localStorage.getItem("videoModalFlag") == "true"
  ) {
    player.loadVideoById({
      videoId: localStorage.getItem("videoID"),
      startSeconds: localStorage.getItem("videoModalTime"),
    });
    clearInterval(myVideoTimer);
    myVideoTimer = setInterval(function () {
      localStorage.setItem("videoModalTime", player.getCurrentTime());
    }, 1000);
    document.body.classList.add("show-sticky-video-modal");
    player.playVideo();
  }
}

// Close Modal
function closeStickyVideoModal() {
  player.pauseVideo();
  localStorage.setItem("videoModalFlag", "false");
  document.body.classList.remove("show-sticky-video-modal");
  clearInterval(myVideoTimer);
}

// Button click event
// constructor function
function StrickyMedia(e) {
  var cssClass = "sticky-popup";
  if (e != undefined) cssClass = e.cssClass;
  var elements = document.getElementsByClassName(cssClass);

  var myFunction = function () {
    var e = this;
    event.preventDefault();
    localStorage.setItem("videoModalFlag", "true");
    if (localStorage.getItem("videoID") != e.getAttribute("data-video-id")) {
      localStorage.setItem("videoID", e.getAttribute("data-video-id"));
      player.loadVideoById({
        videoId: localStorage.getItem("videoID"),
      });
      localStorage.setItem("videoModalTime", 0);
    }
    document.body.classList.add("show-sticky-video-modal");
    player.playVideo();
    clearInterval(myVideoTimer);
    myVideoTimer = setInterval(function () {
      localStorage.setItem("videoModalTime", player.getCurrentTime());
    }, 1000);
  };

  for (var i = 0; i < elements.length; i++) {
    var VideoId = elements[i].getAttribute("href");
    var dataVideoId;
    if (VideoId.indexOf("embed") > -1) {
      dataVideoId = VideoId.split("embed/")[1];
    } else if (VideoId.indexOf("watch?v=") > -1) {
      dataVideoId = VideoId.split("watch?v=")[1];
    }

    elements[i].setAttribute("data-video-id", dataVideoId);
    elements[i].addEventListener("click", myFunction, false);
  }
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
