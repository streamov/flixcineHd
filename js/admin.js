document.addEventListener("DOMContentLoaded", function () {
    const uploadForm = document.getElementById("upload-form");
    const videoFileInput = document.getElementById("video-file");
    const uploadStatus = document.getElementById("upload-status");

    uploadForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const videoFile = videoFileInput.files[0];
        if (!videoFile) {
            uploadStatus.textContent = "No video selected!";
            uploadStatus.style.color = "red";
            return;
        }

        const formData = new FormData();
        formData.append("video", videoFile);

        uploadStatus.textContent = "Uploading...";
        uploadStatus.style.color = "orange";

        fetch("upload.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                uploadStatus.textContent = "Upload Successful!";
                uploadStatus.style.color = "green";
            } else {
                uploadStatus.textContent = data.message;
                uploadStatus.style.color = "red";
            }
        })
        .catch(error => {
            uploadStatus.textContent = "Error uploading video.";
            uploadStatus.style.color = "red";
            console.error(error);
        });
    });
});
