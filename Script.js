// Function to handle video upload and display
function uploadVideo() {
    const fileInput = document.getElementById('videoUpload');
    const file = fileInput.files[0];
    
    if (file) {
        // Check if file is a video
        if (file.type.startsWith("video/")) {
            const videoURL = URL.createObjectURL(file);

            // Create a new video player element
            const videoElement = document.createElement("video");
            videoElement.src = videoURL;
            videoElement.controls = true;
            videoElement.width = 200; // Set width of the thumbnail

            // Add video to the video gallery list
            const videoList = document.getElementById('videoList');
            const listItem = document.createElement('li');
            listItem.appendChild(videoElement);
            videoList.appendChild(listItem);

            // Display the video in the video player section
            const videoPlayer = document.getElementById('videoPlayer');
            videoPlayer.src = videoURL;

            // Clear the input field after upload
            fileInput.value = '';
        } else {
            alert("Please upload a valid video file.");
        }
    } else {
        alert("No file selected!");
    }
}
