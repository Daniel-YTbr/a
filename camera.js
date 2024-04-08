// Obtém a referência ao elemento de vídeo
    var video = document.querySelector("#videoElement");

    // Verifica se o navegador suporta acesso à câmera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Solicita acesso à câmera
      navigator.mediaDevices.getUserMedia({
        video: true
      }

      )
      .then(function (stream) {
        // Exibe o vídeo da câmera no elemento de vídeo
        video.srcObject = stream;
      }

      )
      .catch(function (error) {
        console.log("Ocorreu um erro ao acessar a câmera: " + error);
      }

      );
    } else {
      console.log("O seu navegador não suporta acesso à câmera.");
    }