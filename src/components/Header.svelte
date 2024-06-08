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
  
  
  
    .wrapper_title {
        position: absolute;
        width: 100px;
        top: 50px;
        left: 30px;
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
        color: black;
        line-height: 0.7rem;
        font-size: 1.3rem;
        margin: 0;
        margin-left: -30px;

        /* background-color: white; */
    }

  ul li {
    list-style: none;
  }
  </style>
  
  <header>


    <div class="wrapper_title">
      <p>{tagline}</p><br>
      <h1>{title}</h1>
    </div>    

    <ul class="menu">
      <a href="/"><li>HOME</li></a>
      <a><li>CLIENTS</li></a>
      <a><li>SHOP</li></a>

    </ul>

  </header>
  