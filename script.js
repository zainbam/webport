document.addEventListener("DOMContentLoaded", function() {
    const videos = [
        { src: "video.mp4", description: "Project Demonstration: A full demonstration of the autonomous vehicle, showcasing smooth navigation, obstacle detection, and real-time decision-making." },
        // { src: "video2.mp4", description: "small d v d2" },
        { src: "video1.mp4", description: "Object Detection and Proximity-Based Decisions: Highlights object detection based on proximity, decision is stop if an obstacle is within 2 meters; otherwise, it decides straight. This clip illustrates precise distance-based decision-making." },
        { src: "video3.mp4", description: "3D Image Reconstruction with Stereo Vision: Demonstrates 3D image reconstruction using a RealSense depth camera for enhanced depth perception, essential for accurate environmental awareness." },        
        { src: "video4.mp4", description: "GPS-Based Navigation and Junction Decisions: Shows GPS-driven navigation where the vehicle autonomously makes decision for turns at junctions, integrating real-time location data for accurate path selection." },
        { src: "video5.mp4", description: "National TV (GEO NEWS) Interview on Innovation: A brief clip from a national TV interview, highlighting the project’s innovation in autonomous systems and its potential in the fields of robotics and AI." }     

    ];

    let currentVideoIndex = 0;
    const videoElement = document.getElementById("researchVideo");
    const descriptionElement = document.getElementById("videoDescription");

    // Check if elements exist before using them
    if (!videoElement || !descriptionElement) {
        console.error("Required video elements not found");
        return;
    }

    // Function to load video without autoplaying
    function loadVideo(index) {
        if (index >= 0 && index < videos.length) {
            videoElement.src = videos[index].src;
            descriptionElement.innerText = videos[index].description;
            videoElement.load();
        }
    }

    // Function to change video when arrow button is clicked
    window.changeVideo = function(direction) {
        currentVideoIndex = (currentVideoIndex + direction + videos.length) % videos.length;
        loadVideo(currentVideoIndex);
        
        // Only try to play if the video is visible and user has interacted
        if (videoElement.offsetParent !== null) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn("Manual play required:", error);
                    // Add a play button or user instruction if needed
                });
            }
        }
    };

    // Initialize the first video without autoplay
    loadVideo(currentVideoIndex);

    // Add click-to-play functionality
    videoElement.addEventListener('click', function() {
        if (videoElement.paused) {
            videoElement.play().catch(error => {
                console.warn("Playback failed:", error);
            });
        } else {
            videoElement.pause();
        }
    });
});

// Wrap the download resume functionality in a check for element existence
document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById('download_resume');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            const resumeUrl = 'resume.pdf';
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = "Zain-Ul-Abideen-Resume";
            link.click();
        });
    }
});

// Project report download function
window.downloadReport = function() {
    const reportUrl = 'report.pdf';
    const link = document.createElement('a');
    link.href = reportUrl;
    link.download = "Zain-Ul-Abideen-Research";
    link.click();
};