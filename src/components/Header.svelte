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
    position: relative;
    z-index: 1;
  }

  .wrapper_title {
    display: flex;
    align-items: baseline;
    flex-shrink: 0;
  }

  .wrapper_title p {
    font-size: 1rem;
    margin-right: 0.5rem;
    white-space: nowrap;
  }

  .wrapper_title h1 {
    font-size: 1.5rem;
    white-space: nowrap;
  }

  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav li {
    margin-left: 1rem;
  }

  nav a {
    color: gray;
    text-decoration: none;
    white-space: nowrap;
  }

  nav a.active {
    color: black;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    header {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
    }

    .wrapper_title {
      margin-bottom: 1rem;
    }

    nav ul {
      flex-direction: column;
      gap: 0.5rem;
    }

    nav li {
      margin: 0;
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