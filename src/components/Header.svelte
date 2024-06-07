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

    .menu {
      display: flex;
      gap: 18px;
    }
    header {
      color: #000;
      display: flex;
      flex-direction: row;
      justify-content: right;
      align-items: center;
      padding: 50px 30px;
      text-align: center;
      height: 100px
    }
  
    h1 {
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
      margin: 0;
      font-size: 1.3rem;
      line-height: 1.3rem;
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
      line-height: 1rem;
    }

  .wrapper_title{

    position: absolute;
    left: 0px;
    padding: 50px 30px;
  }
  </style>
  
  <header>


    <div class="wrapper_title">
      <p>{tagline}</p>
      <h1 class:animate>{title}</h1>
    </div>    

    <ul class="menu">
      <a href="/"><li>HOME</li></a>
      <a><li>CLIENTS</li></a>
      <a><li>SHOP</li></a>

    </ul>

  </header>
  