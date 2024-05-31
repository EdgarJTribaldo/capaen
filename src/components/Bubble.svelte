<!-- src/lib/components/Bubble.svelte -->
<script>
      import './Fonts.css';

    export let message = "Filming Tour in Europe";
  </script>
  
  <style>
    h3 {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .bubble {
      font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
      position: fixed;
      bottom: 20px;
      right: -10px;
      padding: 10px 0px;
      background-color: rgba(219, 219, 219, 0);
      color: white;
      border-radius: 25px;
      font-size: 16px;
      animation: float 3s ease-in-out infinite;
    }
  
    /* @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    } */
  </style>
  
  <div class="bubble">
    <h3>Hey👋🏽</h3>
    {message}
    <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
    <dotlottie-player src="https://lottie.host/58ecbe39-3c8e-40df-adc7-b0662bcc385b/s8boQFLyAd.json" background="transparent" speed="1" style="width: 200px; height: 100px;" loop autoplay></dotlottie-player>   

  </div>
  