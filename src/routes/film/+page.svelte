<script>
  import Header from "../../components/Header.svelte";

  const videos = [
    {
      title: 'SICKNATION - Trust Your Angels PROMO',
      url: 'https://player.vimeo.com/video/952504857',  // URL embebido del video en Vimeo
      thumbnail: './src/img/capaen_sicknation.webp',
      rowSpan: 2
    },
    {
      title: 'LINA CANTILLO - "Herencias"',
      url: 'https://player.vimeo.com/video/950037482',  // URL embebido del video en Vimeo
      thumbnail: './src/img/capaen_lina_cantillo.webp',
      rowSpan: 1
    },
    {
      title: 'SICKNATION - Sickracing',
      url: 'https://player.vimeo.com/video/900903237',  // URL embebido del video en Vimeo
      thumbnail: './src/img/sick_racing_capaen.webp',
      rowSpan: 1
    },
    
    // Agrega más objetos de video según sea necesario
  ];

  let selectedVideoUrl = '';

  function openModal(url) {
    selectedVideoUrl = url;
    document.getElementById('videoModal').style.display = 'block';
  }

  function closeModal() {
    selectedVideoUrl = '';
    document.getElementById('videoModal').style.display = 'none';
  }
</script>

<Header/>

<main>
  <div class="video-grid">
    {#each videos as video}
      <div class="thumbnail-container" on:click={() => openModal(video.url)}>
        <picture>
        <source srcset={video.thumbnail} type="image/webp">
        </picture>
        <div class="overlay">
          <div class="title">{video.title}</div>
        </div>
      </div>
    {/each}
  </div>
</main>

<!-- Modal -->
<div id="videoModal" class="modal">
  <div class="modal-content">
    <span class="close" on:click={closeModal}>&times;</span>
    {#if selectedVideoUrl}
      <iframe src={selectedVideoUrl} width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    {/if}
  </div>
</div>

<style>
  main {
    margin-top: 20px;
    height: calc(100vh - 120px);
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .video-grid {
    display: flex;
    gap: 10px;
    width: 100%;
    height: 350px;
  }

  .thumbnail-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;
  }

  .thumbnail-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .thumbnail-container .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .thumbnail-container .title {
    color: white;
    font-size: 1.5rem;
    text-align: center;
  }

  .thumbnail-container:hover img {
    transform: scale(1.1);
    filter: blur(5px);
  }

  .thumbnail-container:hover .overlay {
    opacity: 1;
  }

  .modal {
    display: none;
    position: fixed;
    padding: 50px;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.9);
  }

  .modal-content {
    position: relative;
    margin: auto;
    padding: 0;
    width: 80%;
    max-width: 1200px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 25px;
    color: #fff;
    font-size: 35px;
    font-weight: bold;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .video-grid {
      flex-direction: column;
    }

    .thumbnail-container {
      margin-bottom: 10px;
    }
  }
</style>
