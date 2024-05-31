<!-- src/lib/components/Header.svelte -->
<script>
    import { onMount } from 'svelte';
    import './Fonts.css';
    let animate = false;
  
    onMount(() => {
        animate = true;
    });

    let title;
    let tagline;
    title = "CAPAEN";
    tagline = "FILM BY"
  </script>
  
  <style>
    header {
      color: #fff;
      padding: 20px;
      text-align: center;
    }
  
    h1 {
      font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
      margin: 0;
      font-size: 1.5rem;
      line-height: 1.5rem;
      padding-bottom: 18px;
      opacity: 0;
    transform: translateY(100%);
    transition: opacity 1s, transform 1s;
    }

    h1.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
    p {
      margin: 0;
      font-size: 0.9rem;
      padding: 0;
    }

  .wrapper_title{
    position: absolute;
  }
  </style>
  
  <header>


    <div class="wrapper_title">
      <p>{tagline}</p>
      <h1 class:animate>{title}</h1>
    </div>    

  </header>
  