function toggleView(){"fullscreen-mode"==localStorage.getItem("videoModalView")?(localStorage.setItem("videoModalView","smallscreen-mode"),document.body.classList.add("smallscreen-mode"),document.body.classList.remove("fullscreen-mode")):(localStorage.setItem("videoModalView","fullscreen-mode"),document.body.classList.remove("smallscreen-mode"),document.body.classList.add("fullscreen-mode"))}var player,myVideoTimer;function onYouTubePlayerAPIReady(){player=new YT.Player("sticky-video-modal-video",{events:{onReady:onPlayerReady}})}function onPlayerReady(e){localStorage.getItem("videoID")&&"false"==localStorage.getItem("videoModalFlag")&&(player.loadVideoById({videoId:localStorage.getItem("videoID")}),player.pauseVideo()),"smallscreen-mode"==localStorage.getItem("videoModalView")&&"true"==localStorage.getItem("videoModalFlag")&&(player.loadVideoById({videoId:localStorage.getItem("videoID"),startSeconds:localStorage.getItem("videoModalTime")}),clearInterval(myVideoTimer),myVideoTimer=setInterval(function(){localStorage.setItem("videoModalTime",player.getCurrentTime())},1e3),document.body.classList.add("show-sticky-video-modal"),player.playVideo())}function closeStickyVideoModal(){player.pauseVideo(),localStorage.setItem("videoModalFlag","false"),document.body.classList.remove("show-sticky-video-modal"),clearInterval(myVideoTimer)}function StrickyMedia(e){var o="sticky-popup";null!=e&&(o=e.cssClass);for(var a=document.getElementsByClassName(o),t=function(){event.preventDefault(),localStorage.setItem("videoModalFlag","true"),localStorage.getItem("videoID")!=this.getAttribute("data-video-id")&&(localStorage.setItem("videoID",this.getAttribute("data-video-id")),player.loadVideoById({videoId:localStorage.getItem("videoID")}),localStorage.setItem("videoModalTime",0)),document.body.classList.add("show-sticky-video-modal"),player.playVideo(),clearInterval(myVideoTimer),myVideoTimer=setInterval(function(){localStorage.setItem("videoModalTime",player.getCurrentTime())},1e3)},l=0;l<a.length;l++){var i,d=a[l].getAttribute("href");d.indexOf("embed")>-1?i=d.split("embed/")[1]:d.indexOf("watch?v=")>-1&&(i=d.split("watch?v=")[1]),a[l].setAttribute("data-video-id",i),a[l].addEventListener("click",t,!1)}}document.body.innerHTML+='<div class="sticky-video-modal"> <div class="sticky-video-modal-header"> <a href="#" class="sticky-video-modal-resize sticky-video-modal-btn" onclick="toggleView()" > <img src="../img/ic-maximize.svg" alt="maximize" class="maximize-icon"/> <img src="../img/ic-minimize.svg" alt="minimize" class="minimize-icon"/> </a> <a href="#" class="sticky-video-modal-close sticky-video-modal-btn" onclick="closeStickyVideoModal()" > <img src="../img/ic-close.svg" alt="close"/> </a> </div><div class="sticky-video-modal-body"> <div id="sticky-video-modal-video"></div></div></div>',localStorage.getItem("videoModalView")||localStorage.setItem("videoModalView","fullscreen-mode"),localStorage.getItem("videoModalFlag")||localStorage.setItem("videoModalFlag","false"),"smallscreen-mode"==localStorage.getItem("videoModalView")?document.body.classList.add("smallscreen-mode"):document.body.classList.add("fullscreen-mode");var tag=document.createElement("script");tag.src="//www.youtube.com/player_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);