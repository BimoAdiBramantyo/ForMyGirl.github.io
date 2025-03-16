let music = document.getElementById("bg-music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function showLoveMessage() {
    document.getElementById("love-message").classList.remove("hidden");
}

function unlockVideos() {
    let password = document.getElementById("videoPassword").value;
    let videoSelection = document.getElementById("videoSelection");
    let errorMessage = document.getElementById("errorMessage");

    if (password === "iloveyou") {  // Change this to your secret password
        videoSelection.classList.remove("hidden"); // Show video choices
        errorMessage.classList.add("hidden");  // Hide error message
    } else {
        videoSelection.classList.add("hidden"); // Hide video selection
        document.getElementById("videoWrapper1").classList.add("hidden"); // Hide videos
        document.getElementById("videoWrapper2").classList.add("hidden");
        errorMessage.classList.remove("hidden"); // Show error message
    }
}

function showVideo(videoNumber) {
    let video1 = document.getElementById("videoWrapper1");
    let message = document.getElementById("videoMessage");

    // Hide everything first
    video1.classList.add("hidden");
    message.classList.add("hidden");

    // Show content based on selection
    if (videoNumber === 1) {
        video1.classList.remove("hidden"); // Show first video
    } else {
        message.classList.remove("hidden"); // Show message instead of second video
    }
}



