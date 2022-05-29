class VideoLightbox {

    constructor() {
  
      this.trailer = document.querySelector( ".trailer" )
      this.lightboxOverlay = document.getElementById( "lightbox-overlay" )
      this.videoLightbox = document.getElementById( "video-lightbox" )
      this.videoOpen = false
      this.iframe = this.videoLightbox.getElementsByTagName("iframe")[0]

      this.events()
  
    }
  
    events() {
  
      this.trailer.addEventListener( "click", () => this.openLightbox() )
      this.lightboxOverlay.addEventListener( "click", () => this.closeLightbox() )
      window.addEventListener( "keyup", ( e ) => this.keyboardLogic( e ) )

    }
  
    openLightbox() {
  
      this.lightboxOverlay.classList.add( "open" )
      this.videoLightbox.classList.add( "show" )

      //Only add iframe parameters on first initial click of trailer
      if( this.videoOpen === false ){

        this.iframe.src += "?autoplay=1&enablejsapi=1"
       
      }

      this.videoOpen = true

      //Replay video from paused position
      this.iframe.contentWindow.postMessage( '{"event":"command","func":"' + 'playVideo' + '","args":""}', '*' )

    }

    closeLightbox() {
  
      this.lightboxOverlay.classList.remove( "open" )
      this.videoLightbox.classList.remove( "show" )
      this.iframe.contentWindow.postMessage( '{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*' )

    }

    keyboardLogic( e ) {
  
      if ( e.keyCode == "27" ) {

        this.closeLightbox()

      }
  
    }
  
}
  
export default VideoLightbox