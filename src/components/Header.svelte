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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .wrapper_title {
    display: flex;
    align-items: baseline;
  }

  .wrapper_title p {
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  .wrapper_title h1 {
    font-size: 1.5rem;
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  nav li {
    margin-left: 1rem;
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
    header {
      flex-direction: column;
      align-items: flex-start;
    }

    .wrapper_title {
      margin-bottom: 1rem;
    }

    nav ul {
      flex-direction: column;
    }

    nav li {
      margin: 0.5rem 0;
    }
  }
</style>

<header>
  <div class="wrapper_title">
    <p>{tagline}</p>
    <h1>{title}</h1>
  </div>

  <nav>
    <ul class="menu">
      {#each menuItems as item}
        <li>
          <a href={item.url} class:active={$page.url.pathname === item.url}>
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>