<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>Dreamworks</title>
    <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/styles.css">
    <style>
        .media-container {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        .media-container img {
            max-height: calc(100vh - 180px);
            margin-right: 20px;
        }
        .media-container div {
            overflow: auto;
        }
        .container {
            padding: 10px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    </style>
</head>
<body>
    <header>
        <div class="header-container">
            <h1>Dreamworks</h1>
            <nav>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/movies">Movies</a></li>

                </ul>
            </nav>
            <a href="/profile"class="profile-link"> <%= user.username %></a>
        </div>
    </header>
    
    <div class="container">
        <div class="media-container">
            <img src="https://cdn.mos.cms.futurecdn.net/xAzmv9D9dkbJeweJuwtWhU-1200-80.jpg" alt="Dreamworks" width="400">
            <div>
                <p>Welcome Dreamers to our magnificient world of dreams! Founded in 1984, Dreamworks has become synonymous with captivating storytelling, cutting-edge animation, and timeless entertainment. As a global film studio, Dreamworks has left an indelible mark on the world of cinema, bringing to life some of the most beloved animated and live-action films.At the heart of Dreamworks' success is a commitment to pushing the boundaries of imagination and creativity. From the enchanting world of Shrek to the heartwarming tales of friendship in How to Train Your Dragon, Dreamworks has mastered the art of storytelling, creating experiences that resonate with audiences of all ages. The iconic Dreamworks logo, with its magical moon and boy fishing from a crescent moon, has become a symbol of quality entertainment. It serves as a beacon, inviting audiences to embark on extraordinary journeys filled with laughter, tears, and a touch of magic. Dreamworks' dedication to innovation extends beyond the screen. The studio has consistently embraced new technologies and techniques, ensuring that each film is a visual masterpiece. Whether through captivating characters, stunning visuals, or compelling narratives, Dreamworks continues to set the standard for excellence in the world of animation and filmmaking. As we explore the vast landscape of Dreamworks' filmography, we are invited to witness the power of dreams, the importance of friendship, and the triumph of the human spirit. Dreamworks not only tells stories; it creates immersive worlds where fantasy and reality seamlessly blend, leaving a lasting impact on the hearts and minds of audiences worldwide. </p>

                <p>In every frame and every scene, Dreamworks invites us to dream big, laugh heartily, and believe in the magic of storytelling. Through its commitment to creativity and innovation, Dreamworks continues to be a beacon of inspiration, enchanting generations and ensuring that the art of storytelling remains timeless.</p>
    
    
            </div>
        </div>
    </div>
</body> 
</html>
