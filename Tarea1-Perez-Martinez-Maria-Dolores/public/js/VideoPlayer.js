class VideoPlayer {
    constructor({ titulo = 'mi-video'} = {}) {
        this.titulo = titulo;
        this.videos = [];
        this.render();
    }

    agregarVideo({ src }) {
        this.videos.push({ src });
        this.render();
    }

    render() {
        let contenedor = document.getElementById('contenedor');
        if (contenedor) contenedor.remove();

        contenedor = document.createElement("div");
        contenedor.id = 'contenedor';
        contenedor.classList.add("videoPlayer");

        const videoPlayerDiv = document.createElement("div");
        videoPlayerDiv.id = "videoPlayer";

        const texto = document.createElement("h3");
        texto.innerText = this.titulo;
        videoPlayerDiv.append(texto);

        this.videos.forEach(({ src }) => {
            const video = document.createElement("video");
            video.style.width = "300px";
            video.src = src;
            
            const btnPlay = document.createElement('button');
            btnPlay.classList.add("play");
            btnPlay.innerText = "Play";
            btnPlay.addEventListener("click", () => video.play());

            video.addEventListener("click", () => video.play());

            const btnPausa = document.createElement("button");
            btnPausa.classList.add("pause");
            btnPausa.innerText = "Pause";
            btnPausa.addEventListener("click", () => video.pause());

            const tiempo = document.createElement('p');
            tiempo.id = 'demo';
            
            const tiempoRestante = document.createElement('p');
            tiempoRestante.id= "tiempoRestante";
    
            video.addEventListener("timeupdate", () => {
            const currentTime = video.currentTime;
            const restante = video.duration - video.currentTime;
            tiempo.textContent = `Tiempo reproducido: ${currentTime}`;
            tiempoRestante.textContent = `Tiempo restante: ${restante}`;
      });

            videoPlayerDiv.append(video, btnPlay, btnPausa, tiempo, tiempoRestante);

            
        });

        contenedor.append(videoPlayerDiv);
        document.body.append(contenedor);
    }
}

const v1 = new VideoPlayer({titulo: 'Mi video'});
v1.agregarVideo({src: 'https://www.w3schools.com/html/mov_bbb.mp4'});





