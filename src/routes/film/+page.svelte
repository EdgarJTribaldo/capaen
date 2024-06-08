<script>
  import Header from "../../components/Header.svelte";
  const videos = [
    {
      title: 'Video 1',
      url: 'https://example.com/video1.mp4',
      thumbnail: 'https://picsum.photos/1200/800',
      rowSpan: 2
    },
    {
      title: 'Video 2',
      url: 'https://example.com/video2.mp4',
      thumbnail: 'https://picsum.photos/500/500',
      rowSpan: 1
    },
    {
      title: 'Video 3',
      url: 'https://example.com/video3.mp4',
      thumbnail: 'https://picsum.photos/500/500',
      rowSpan: 1
    },
    {
      title: 'Video 4',
      url: 'https://example.com/video4.mp4',
      thumbnail: 'https://picsum.photos/1200/800',
      rowSpan: 2
    },
    // Agrega más objetos de video según sea necesario
  ];
</script>

<Header/>

<main>
  <div class="video-grid">
    {#each videos as video}
      <div class="video-item" style="grid-row: span {video.rowSpan};">
        <a href={video.url} target="_blank">
          <div class="thumbnail-container">
            <img src={video.thumbnail} alt={video.title} />
          </div>
        </a>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    margin-top: 20px;
    padding: 0px 20px;
  }
  .video-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px; /* Altura de las filas automáticas */
    gap: 10px;
  }

  .video-item {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
  }

  .thumbnail-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .thumbnail-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    .video-grid {
      grid-template-columns: 1fr;
    }
  }
</style>