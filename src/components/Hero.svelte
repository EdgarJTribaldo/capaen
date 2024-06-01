<script>
    import Form from "./Form.svelte";
    let tagline = "FILM BY";
    let title = "CAPAEN";
    let showPopup = false;


    function togglePopup() {
        showPopup = !showPopup;
}
</script>

<!-- Hero.svelte -->
<div class="hero">
    <video class="hero-video" autoplay loop muted>
      <source src="video1.mp4" type="video/mp4">
    </video>
    
    <div class="hero-content">
        <div class="wrapper_title">
            <p>{tagline}</p><br>
            <h1>{title}</h1>
          </div>          
      <div class="buttons">
        <a href="https://www.instagram.com/capaen_/" target="_blank" class="instagram-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
              </svg>          </a>
        <button class="enter-button">Enter</button>
        <button class="contact-button close-button" on:click={togglePopup}>Contact</button>
      </div>
      
    
    </div>
    {#if showPopup}
    <div class="popup-overlay" on:click={togglePopup}>
        <div class="popup-content" on:click|stopPropagation>
            <Form />
        </div>
    </div>
{/if}
  </div>
  
  <style>
    .popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .popup-content {
        background-color: transparent;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 30px 30px -30px rgba(27, 26, 26, 0.315);
        max-width: 400px; /* Ajusta el ancho máximo según tus necesidades */

        width: 100%;
    }


    .hero {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
    
    .hero-video {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
    
    .hero-content {
      position: relative;
      width: 100%;
      z-index: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 50px 30px;
      text-align: center;
      color: #fff;
    }
    
    .wrapper_title {
        position: absolute;
      width: 100px; /* Adjust the width as needed */
      gap: 1px;
      display: flex;
      align-items: flex-end;
    }

    .wrapper_title p {
        font-size: 1rem;
        line-height: 1rem;
        text-align: left;
        margin: 0;
        padding: 0;
    }

    .wrapper_title h1 {
        padding: 3px;
        color: white;
        line-height: 0.7rem;
        font-size: 1.3rem;
        margin: 0;
        margin-left: -30px;

        /* background-color: white; */
    }
    
    .buttons {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        right: 50px;
    }

    
    .enter-button:hover,
    .contact-button:hover{
        background-color: white;
        color: black;
    }
    
    .enter-button,
    .contact-button {
      padding: 10px 25px;
      margin: 0 10px;
      font-size: 18px;
      background-color: transparent;
      color: white;
      border: 2px solid white;
      cursor: pointer;
    }

    
    .instagram-icon {
      width: 30px; /* Adjust the width as needed */
      height: 30px;
      fill: #fff;
    }


    @media(max-width: 700px){
      .wrapper_title h1 {
        padding: 3px;
        color: white;
        line-height: 0.7rem;
        font-size: 1.3rem;
        margin: 0;
        margin-left: -28px;

        /* background-color: white; */
    }

        .hero-content {
            padding: 20px 10px;
        }

        .buttons {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        right: 5px;
    }

    .enter-button,
    .contact-button {
      padding: 8px 15px;
      margin: 0 10px;
      font-size: 12px;
      background-color: transparent;
      color: white;
      border: 2px solid white;
      cursor: pointer;
    }
    }
  </style>