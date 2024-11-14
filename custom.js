var video = document.getElementById('my-video');
    var videoSrc = 'https://customer-y4rf9cvqyukyhwk8.cloudflarestream.com/de6c451e97394e6773f79fc6acc9caf8/manifest/video.m3u8';

    // Load the video using HLS
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    }




    const VideoBanner = document.getElementById('my-video'); 
    const muteButton = document.getElementById('muteButton');
    let isMuted = true; 

    
    VideoBanner.muted = isMuted;

    
    muteButton.addEventListener('click', () => {
        isMuted = !isMuted; 
        VideoBanner.muted = isMuted; 

        
        if (isMuted) {
            muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    });
   

   
   
   
