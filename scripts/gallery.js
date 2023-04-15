function createModal() {
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `

    <div class="modal-container" aria-modal="true" role="dialog">
    <div class="modal">
    <div class="modal-overlay">
      <div class="modalBTNcontainer">
        <button class="modalBTN modal-prev" id="left" aria-label="previous"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="modalBTN modal-close" id="close" aria-label="close"><i class="fa-solid fa-xmark"></i></button>
        <button class="modalBTN modal-next" id="right" aria-label="next"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
      <div class="modalIndicator-container">
        <button class="modalIndicator"></button>
      </div>
    </div>

    <div class="modalImage-container">
      <img src="./img/gallery/accesories/austin-lowman-qS3sqPT1T9s-unsplash.jpg" class="modal-image" alt="">
    </div>
    </div>
    </div>
`
  );
}
createModal();
