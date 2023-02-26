/*!
=========================================================
* Stycky Media - v0.0.16
=========================================================
* Product Page: https://github.com/app-generator/sticky-media
* Copyright AppSeed (https://appseed.us)
=========================================================
*/

// global variable for the player
var player;
var myVideoTimer;

// Embeded HTML
document.body.innerHTML +=
  '<div class="sticky-video-modal"> <div class="sticky-video-modal-header"> <a href="#" class="sticky-video-modal-resize sticky-video-modal-btn" onclick="toggleView()" > <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI2Ml8yKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS44Mjc5IDEwLjE3MkM1LjczNDE0IDEwLjA3ODMgNS42MDY5OCAxMC4wMjU2IDUuNDc0NCAxMC4wMjU2QzUuMzQxODIgMTAuMDI1NiA1LjIxNDY3IDEwLjA3ODMgNS4xMjA5IDEwLjE3MkwxLjAyNDkgMTQuMjY4VjExLjVDMS4wMjQ5IDExLjM2NzQgMC45NzIyMjQgMTEuMjQwMiAwLjg3ODQ1NiAxMS4xNDY0QzAuNzg0Njg4IDExLjA1MjcgMC42NTc1MTEgMTEgMC41MjQ5MDIgMTFDMC4zOTIyOTQgMTEgMC4yNjUxMTcgMTEuMDUyNyAwLjE3MTM0OSAxMS4xNDY0QzAuMDc3NTgwOCAxMS4yNDAyIDAuMDI0OTAyMyAxMS4zNjc0IDAuMDI0OTAyMyAxMS41VjE1LjQ3NUMwLjAyNDkwMjMgMTUuNjA3NiAwLjA3NzU4MDggMTUuNzM0OCAwLjE3MTM0OSAxNS44Mjg1QzAuMjY1MTE3IDE1LjkyMjMgMC4zOTIyOTQgMTUuOTc1IDAuNTI0OTAyIDE1Ljk3NUg0LjQ5OTlDNC42MzI1MSAxNS45NzUgNC43NTk2OSAxNS45MjIzIDQuODUzNDYgMTUuODI4NUM0Ljk0NzIyIDE1LjczNDggNC45OTk5IDE1LjYwNzYgNC45OTk5IDE1LjQ3NUM0Ljk5OTkgMTUuMzQyNCA0Ljk0NzIyIDE1LjIxNTIgNC44NTM0NiAxNS4xMjE0QzQuNzU5NjkgMTUuMDI3NyA0LjYzMjUxIDE0Ljk3NSA0LjQ5OTkgMTQuOTc1SDEuNzMxOUw1LjgyNzkgMTAuODc5QzUuOTIxNjQgMTAuNzg1MiA1Ljk3NDMgMTAuNjU4MSA1Ljk3NDMgMTAuNTI1NUM1Ljk3NDMgMTAuMzkyOSA1LjkyMTY0IDEwLjI2NTggNS44Mjc5IDEwLjE3MlpNMTAuMTcxOSA1LjgyNzk5QzEwLjI2NTcgNS45MjE3MyAxMC4zOTI4IDUuOTc0MzkgMTAuNTI1NCA1Ljk3NDM5QzEwLjY1OCA1Ljk3NDM5IDEwLjc4NTEgNS45MjE3MyAxMC44Nzg5IDUuODI3OTlMMTQuOTc0OSAxLjczMTk5VjQuNDk5OTlDMTQuOTc0OSA0LjYzMjYgMTUuMDI3NiA0Ljc1OTc4IDE1LjEyMTMgNC44NTM1NUMxNS4yMTUxIDQuOTQ3MzIgMTUuMzQyMyA0Ljk5OTk5IDE1LjQ3NDkgNC45OTk5OUMxNS42MDc1IDQuOTk5OTkgMTUuNzM0NyA0Ljk0NzMyIDE1LjgyODUgNC44NTM1NUMxNS45MjIyIDQuNzU5NzggMTUuOTc0OSA0LjYzMjYgMTUuOTc0OSA0LjQ5OTk5VjAuNTI0OTk0QzE1Ljk3NDkgMC4zOTIzODYgMTUuOTIyMiAwLjI2NTIwOSAxNS44Mjg1IDAuMTcxNDRDMTUuNzM0NyAwLjA3NzY3MjMgMTUuNjA3NSAwLjAyNDk5MzkgMTUuNDc0OSAwLjAyNDk5MzlIMTEuNDk5OUMxMS4zNjczIDAuMDI0OTkzOSAxMS4yNDAxIDAuMDc3NjcyMyAxMS4xNDYzIDAuMTcxNDRDMTEuMDUyNiAwLjI2NTIwOSAxMC45OTk5IDAuMzkyMzg2IDEwLjk5OTkgMC41MjQ5OTRDMTAuOTk5OSAwLjY1NzYwMiAxMS4wNTI2IDAuNzg0Nzc5IDExLjE0NjMgMC44Nzg1NDdDMTEuMjQwMSAwLjk3MjMxNSAxMS4zNjczIDEuMDI0OTkgMTEuNDk5OSAxLjAyNDk5SDE0LjI2NzlMMTAuMTcxOSA1LjEyMDk5QzEwLjA3ODIgNS4yMTQ3NiAxMC4wMjU1IDUuMzQxOTEgMTAuMDI1NSA1LjQ3NDQ5QzEwLjAyNTUgNS42MDcwOCAxMC4wNzgyIDUuNzM0MjMgMTAuMTcxOSA1LjgyNzk5WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yNjJfMiI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" alt="maximize" class="maximize-icon"/> <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI2Ml80KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC4xNzE3ODQgMTUuODI4QzAuMjY1NTQ4IDE1LjkyMTcgMC4zOTI3MDIgMTUuOTc0NCAwLjUyNTI4NCAxNS45NzQ0QzAuNjU3ODY2IDE1Ljk3NDQgMC43ODUwMiAxNS45MjE3IDAuODc4Nzg0IDE1LjgyOEw0Ljk3NDc4IDExLjczMlYxNC41QzQuOTc0NzggMTQuNjMyNiA1LjAyNzQ2IDE0Ljc1OTggNS4xMjEyMyAxNC44NTM2QzUuMjE1IDE0Ljk0NzMgNS4zNDIxOCAxNSA1LjQ3NDc4IDE1QzUuNjA3MzkgMTUgNS43MzQ1NyAxNC45NDczIDUuODI4MzQgMTQuODUzNkM1LjkyMjExIDE0Ljc1OTggNS45NzQ3OCAxNC42MzI2IDUuOTc0NzggMTQuNVYxMC41MjVDNS45NzQ3OCAxMC4zOTI0IDUuOTIyMTEgMTAuMjY1MiA1LjgyODM0IDEwLjE3MTRDNS43MzQ1NyAxMC4wNzc3IDUuNjA3MzkgMTAuMDI1IDUuNDc0NzggMTAuMDI1SDEuNDk5NzhDMS4zNjcxOCAxMC4wMjUgMS4yNCAxMC4wNzc3IDEuMTQ2MjMgMTAuMTcxNEMxLjA1MjQ2IDEwLjI2NTIgMC45OTk3ODQgMTAuMzkyNCAwLjk5OTc4NCAxMC41MjVDMC45OTk3ODQgMTAuNjU3NiAxLjA1MjQ2IDEwLjc4NDggMS4xNDYyMyAxMC44Nzg2QzEuMjQgMTAuOTcyMyAxLjM2NzE4IDExLjAyNSAxLjQ5OTc4IDExLjAyNUg0LjI2Nzc4TDAuMTcxNzg0IDE1LjEyMUMwLjA3ODA0ODMgMTUuMjE0OCAwLjAyNTM5MDYgMTUuMzQxOSAwLjAyNTM5MDYgMTUuNDc0NUMwLjAyNTM5MDYgMTUuNjA3MSAwLjA3ODA0ODMgMTUuNzM0MiAwLjE3MTc4NCAxNS44MjhaTTE1LjgyNzggMC4xNzE5OTdDMTUuNzM0IDAuMDc4MjYyIDE1LjYwNjkgMC4wMjU2MDQyIDE1LjQ3NDMgMC4wMjU2MDQyQzE1LjM0MTcgMC4wMjU2MDQyIDE1LjIxNDUgMC4wNzgyNjIgMTUuMTIwOCAwLjE3MTk5N0wxMS4wMjQ4IDQuMjY4VjEuNUMxMS4wMjQ4IDEuMzY3MzkgMTAuOTcyMSAxLjI0MDIxIDEwLjg3ODMgMS4xNDY0NEMxMC43ODQ2IDEuMDUyNjggMTAuNjU3NCAwLjk5OTk5NyAxMC41MjQ4IDAuOTk5OTk3QzEwLjM5MjIgMC45OTk5OTcgMTAuMjY1IDEuMDUyNjggMTAuMTcxMiAxLjE0NjQ0QzEwLjA3NzUgMS4yNDAyMSAxMC4wMjQ4IDEuMzY3MzkgMTAuMDI0OCAxLjVWNS40NzVDMTAuMDI0OCA1LjYwNzYxIDEwLjA3NzUgNS43MzQ3OCAxMC4xNzEyIDUuODI4NTVDMTAuMjY1IDUuOTIyMzIgMTAuMzkyMiA1Ljk3NSAxMC41MjQ4IDUuOTc1SDE0LjQ5OThDMTQuNjMyNCA1Ljk3NSAxNC43NTk2IDUuOTIyMzIgMTQuODUzMyA1LjgyODU1QzE0Ljk0NzEgNS43MzQ3OCAxNC45OTk4IDUuNjA3NjEgMTQuOTk5OCA1LjQ3NUMxNC45OTk4IDUuMzQyMzkgMTQuOTQ3MSA1LjIxNTIxIDE0Ljg1MzMgNS4xMjE0NEMxNC43NTk2IDUuMDI3NjggMTQuNjMyNCA0Ljk3NSAxNC40OTk4IDQuOTc1SDExLjczMThMMTUuODI3OCAwLjg3ODk5OEMxNS45MjE1IDAuNzg1MjM0IDE1Ljk3NDIgMC42NTgwOCAxNS45NzQyIDAuNTI1NDk3QzE1Ljk3NDIgMC4zOTI5MTUgMTUuOTIxNSAwLjI2NTc2MSAxNS44Mjc4IDAuMTcxOTk3WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yNjJfNCI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" alt="minimize" class="minimize-icon"/> </a> <a href="#" class="sticky-video-modal-close sticky-video-modal-btn" onclick="closeStickyVideoModal()" > <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGRhdGEtbmFtZT0iMDIgVXNlciI+PHBhdGggZD0iTTI1IDUxMmEyNSAyNSAwIDAgMS0xNy42OC00Mi42OGw0NjItNDYyYTI1IDI1IDAgMCAxIDM1LjM2IDM1LjM2bC00NjIgNDYyQTI0LjkzIDI0LjkzIDAgMCAxIDI1IDUxMnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNNDg3IDUxMmEyNC45MyAyNC45MyAwIDAgMS0xNy42OC03LjMybC00NjItNDYyQTI1IDI1IDAgMCAxIDQyLjY4IDcuMzJsNDYyIDQ2MkEyNSAyNSAwIDAgMSA0ODcgNTEyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" alt="close"/> </a> </div><div class="sticky-video-modal-body"> <div id="sticky-video-modal-video"></div></div></div>';

// Embeded CSS
var styles = `.sticky-video-modal{position:fixed;background:#000;z-index:9999;display:flex;flex-direction:column;opacity:0;visibility:hidden;transition:.5s}.fullscreen-mode .sticky-video-modal{width:100%;height:100%;right:0;bottom:0}.smallscreen-mode .sticky-video-modal{width:350px;height:250px;right:20px;bottom:20px;box-shadow:0 0 20px rgb(0 0 0 / 80%)}.show-sticky-video-modal .sticky-video-modal{opacity:1;visibility:visible}.show-sticky-video-modal:not(.smallscreen-mode){overflow:hidden}.sticky-video-modal-header{display:flex;align-items:center;justify-content:flex-end;padding:10px}.sticky-video-modal-btn{display:block;padding:8px;margin-left:10px;opacity:.5}.sticky-video-modal-btn:hover{opacity:.8}.sticky-video-modal-btn img{display:block;width:16px;height:16px}body.smallscreen-mode .sticky-video-modal-btn img.minimize-icon,body:not(.smallscreen-mode) .sticky-video-modal-btn img.maximize-icon{display:none}.sticky-video-modal-body{flex-grow:1;position:relative}#sticky-video-modal-video{position:absolute;display:block;padding:0;margin:0;width:100%;height:100%}@media(max-width:400px){.smallscreen-mode .sticky-video-modal{width: calc(100% - 20px); right: 10px; bottom: 10px;}}`;
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
      startSeconds: 0, // localStorage.getItem("videoModalTime"),
    });
    clearInterval(myVideoTimer);
    //myVideoTimer = setInterval(function () {
    //  localStorage.setItem("videoModalTime", player.getCurrentTime());
    //}, 1000);
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
function StickyMedia(e) {
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
      //localStorage.setItem("videoModalTime", 0);
    }
    document.body.classList.add("show-sticky-video-modal");
    player.playVideo();
    clearInterval(myVideoTimer);
    //myVideoTimer = setInterval(function () {
    //  localStorage.setItem("videoModalTime", player.getCurrentTime());
    //}, 1000);
  };

  for (var i = 0; i < elements.length; i++) {
    var VideoId = elements[i].getAttribute("href");
    var dataVideoId;
    if (VideoId.indexOf("embed/") > -1) {
      dataVideoId = VideoId.split("embed/")[1];
    } else if (VideoId.indexOf("watch?v=") > -1) {
      dataVideoId = VideoId.split("watch?v=")[1];
    } else if (VideoId.indexOf("youtu.be/") > -1) {
      dataVideoId = VideoId.split("youtu.be/")[1];
    } else if (VideoId.indexOf("youtube.com/v/") > -1) {
      dataVideoId = VideoId.split("youtube.com/v/")[1];      
    } else {
      // Unknown format
      window.open(VideoId);
      return;
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
