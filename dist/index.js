// Add HTML in Body
document.body.innerHTML +=
  '<div class="sticky-video-modal"> <div class="sticky-video-modal-header"> <a href="#" class="sticky-video-modal-resize sticky-video-modal-btn" onclick="toggleView()" > <img src="src/img/ic-maximize.svg" alt="maximize" class="maximize-icon"/> <img src="src/img/ic-minimize.svg" alt="minimize" class="minimize-icon"/> </a> <a href="#" class="sticky-video-modal-close sticky-video-modal-btn" onclick="closeStickyVideoModal()" > <img src="src/img/ic-close.svg" alt="close"/> </a> </div><div class="sticky-video-modal-body"> <div id="sticky-video-modal-video"></div></div></div>';

// Style Required for Modal
var styles = `.sticky-video-modal{position:fixed;background:#000;z-index:9999;display:flex;flex-direction:column;opacity:0;visibility:hidden;transition:.5s}.fullscreen-mode .sticky-video-modal{width:100%;height:100%;right:0;bottom:0}.smallscreen-mode .sticky-video-modal{width:350px;height:250px;right:20px;bottom:20px;box-shadow:0 0 20px rgb(0 0 0 / 80%)}.show-sticky-video-modal .sticky-video-modal{opacity:1;visibility:visible}.show-sticky-video-modal:not(.smallscreen-mode){overflow:hidden}.sticky-video-modal-header{display:flex;align-items:center;justify-content:flex-end;padding:10px}.sticky-video-modal-btn{display:block;padding:8px;margin-left:10px;opacity:.5}.sticky-video-modal-btn:hover{opacity:.8}.sticky-video-modal-btn img{display:block;width:16px;height:16px}body.smallscreen-mode .sticky-video-modal-btn img.minimize-icon,body:not(.smallscreen-mode) .sticky-video-modal-btn img.maximize-icon{display:none}.sticky-video-modal-body{flex-grow:1;position:relative}#sticky-video-modal-video{position:absolute;display:block;padding:0;margin:0;width:100%;height:100%}`;
var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.getElementsByTagName("head")[0].appendChild(styleSheet);

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

// global variable for the player
var player;
var myVideoTimer;

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
var elements = document.getElementsByClassName("show-sticky-video-modal");

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
  elements[i].addEventListener("click", myFunction, false);
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
