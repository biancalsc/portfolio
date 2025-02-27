document.addEventListener("DOMContentLoaded", () => {
  const certificados = document.querySelectorAll(".certificado-item");
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");

  const popupImage = document.createElement("img");
  popupImage.classList.add("popup-img");

  const popupText = document.createElement("p");
  popupText.classList.add("popup-text");

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.classList.add("close");

  const projetoButton = document.createElement("a");
  projetoButton.classList.add("btn-projeto");
  projetoButton.href = ""; // Coloque o link do projeto aqui
  projetoButton.textContent = "Acessar Projeto";

  popupContent.appendChild(closeButton);
  popupContent.appendChild(popupImage);
  popupContent.appendChild(popupText);
  popupContent.appendChild(projetoButton); // Adiciona o botão ao pop-up
  popup.appendChild(popupContent);
  document.body.appendChild(popup);

  certificados.forEach(certificado => {
    certificado.addEventListener("click", () => {
      const imgSrc = certificado.querySelector("img").src;
      const descricao = certificado.querySelector("p").textContent;
      const linkProjeto = certificado.dataset.link; // Aqui, adicionamos um atributo data-link no HTML

      popupImage.src = imgSrc;
      popupText.textContent = descricao;
      projetoButton.href = linkProjeto; // Atualiza o link do botão com o valor armazenado no data-link
      popup.classList.add("active"); // Adiciona a classe 'active' para mostrar o pop-up
    });
  });

  closeButton.addEventListener("click", () => {
    popup.classList.remove("active"); // Remove a classe 'active' para fechar o pop-up
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.remove("active"); // Fecha o pop-up se o usuário clicar fora dele
    }
  });
});