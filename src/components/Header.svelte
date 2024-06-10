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
      gap: 80px;
      padding: 20px;
    }

    .wrapper_title {
      position: relative;
      width: 40px;
 
    }

    .wrapper_title p {
      line-height: 0.9;
      
    }

    .wrapper_title h1 {
      position: absolute;
      top: 10px;
      left: 19px;
    
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
  