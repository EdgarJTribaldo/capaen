<script>
    import Header from "../../components/Header.svelte";
    const videos = [
      {
        title: 'Video 1',
        url: 'https://placekitten.com/400x400',
        thumbnail: 'https://picsum.photos/1200/600'
      },
      {
        title: 'Video 2',
        url: 'https://example.com/video2.mp4',
        thumbnail: 'https://picsum.photos/500/400'
      },
      {
        title: 'Video 2',
        url: 'https://example.com/video2.mp4',
        thumbnail: 'https://picsum.photos/800/500'
      },
      {
        title: 'Video 2',
        url: 'https://example.com/video2.mp4',
        thumbnail: 'https://picsum.photos/800/800'
      },
      {
        title: 'Video 2',
        url: 'https://example.com/video2.mp4',
        thumbnail: 'https://picsum.photos/800/600'
      },
      {
        title: 'Video 2',
        url: 'https://example.com/video2.mp4',
        thumbnail: 'https://picsum.photos/400/800'
      },
      {
        title: 'Video 2',
        url: 'https://example.com/video2.mp4',
        thumbnail: 'https://picsum.photos/800/200'
      },
      {
        title: 'Video 2',
        url: 'https://example.com/video2.mp4',
        thumbnail: 'https://picsum.photos/700/200'
      },
      {
        title: 'Video 2',
        url: 'https://example.com/video2.mp4',
        thumbnail: 'https://picsum.photos/500/300'
      },
      // Agrega más objetos de video según sea necesario
    ];
  </script>

  <Header/>
  
  <main>
    <div class="video-grid">
      {#each videos as video}
        <div class="video-item">
          <a href={video.url} target="_blank">
            <img src={video.thumbnail} alt={video.title} />
            <!-- <h3>{video.title}</h3> -->
          </a>
        </div>
      {/each}
    </div>
  </main>
  <style>
    .video-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
    }
  
    .video-item {
      flex: 0 0 calc(33.33% - 20px);
      max-width: calc(33.33% - 20px);
      text-align: center;
    }
  
    .video-item img {
      width: 100%;
      height: 200px; /* Establece un alto fijo para las imágenes */
      object-fit: cover;
      border-radius: 4px;
    }
  
    @media screen and (max-width: 1200px) {
      .video-item {
        flex: 0 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
      }
    }
  
    @media screen and (max-width: 768px) {
      .video-item {
        flex: 0 0 calc(100% - 20px);
        max-width: calc(100% - 20px);
      }
      
      .video-item img {
        height: 300px; /* Ajusta el alto de las imágenes en pantallas más pequeñas */
      }
    }
  </style>