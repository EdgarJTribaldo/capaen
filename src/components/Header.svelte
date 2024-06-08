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

    .menu {
      display: flex;
      padding: 14px;
      gap: 18px;
      margin-left: 150px;
    }
    header {
      color: #000;
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: flex-start;
      padding: 50px 30px;
      text-align: center;
      height: 100px;
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
        margin-left: -20px;

        /* background-color: white; */
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
  