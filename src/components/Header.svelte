<!-- src/lib/components/Header.svelte -->
<script>
    import { onMount } from 'svelte';
    import './Fonts.css';

    import { page } from '$app/stores';
  
  const menuItems = [
    { label: 'HOME', url: '/' },
    { label: 'FILM', url: '/film' },
    // { label: 'CLIENTS', url: '/services' },
    { label: 'CONTACT', url: '/contact' }
  ];
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
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 100px;
      padding: 20px;
    }

    .wrapper_title {
      position: relative;
      width: 40px;
 
    }

    .wrapper_title p {
      line-height: 0.9;
      font-size: 1rem;
      
    }

    .wrapper_title h1 {
      position: absolute;
      top: 5px;
      left: 20px;
      font-size: 1.3rem;
    
    }

    nav ul {
    display: flex;
    list-style: none;
  }

  nav li {
    margin-right: 1rem;
  }

  nav a {
    color: gray;
    text-decoration: none;
  }

  nav a.active {
    color: black;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
  
    header{
      height: 100px;
      gap: 60px;
    }
    .wrapper_title {
      position: relative;
      width: 40px;
 
    }

    .wrapper_title p {
      line-height: 0.9;
      font-size: 1rem;
      
    }

    .wrapper_title h1 {
      position: absolute;
      top: 13px;
      left: 20px;
      font-size: 1.3rem;
    }

    
    nav ul {
    display: flex;
    list-style: none;
    font-size: 0.8;
  }
  nav li {
    margin-right: 1rem;
    font-size: 0.8rem;
  }
  }
  </style>
  
  <header>


    <div class="wrapper_title">
      <p>{tagline}</p><br>
      <h1>{title}</h1>
    </div>    

    <nav>
      <ul class="menu">
        {#each menuItems as item}
          <li>
            <a 
              href={item.url} 
              class:active={$page.url.pathname === item.url}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>

  </header>
  