<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #gallery-container {
            text-align: center;
        }

        #gallery-image {
            max-width: 100%;
            height: auto;
        }

        #btn-prev, #btn-next {
            margin-top: 10px;
            cursor: pointer;
        }
    </style>
    <title>Simple Image Gallery</title>
</head>
<body>

<div id="gallery-container">
    <img id="gallery-image" src="" alt="Gallery Image">
    <br>
    <button id="btn-prev" onclick="prevImage()">Previous</button>
    <button id="btn-next" onclick="nextImage()">Next</button>
</div>

<script>
    const images = [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        // Add more image URLs as needed
    ];

    let currentIndex = 0;
    const galleryImage = document.getElementById('gallery-image');

    function showImage(index) {
        galleryImage.src = images[index];
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Initial display
    showImage(currentIndex);
</script>

</body>
</html>
