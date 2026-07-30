// assets 폴더에 아래 이름으로 이미지를 넣으면 플레이스홀더가 자동으로 교체됩니다.
document.querySelectorAll("[data-image]").forEach((placeholder) => {
  const file = placeholder.dataset.image;
  const image = new Image();
  image.onload = () => {
    placeholder.style.backgroundImage = `url("./assets/${file}")`;
    placeholder.classList.add("has-image");
  };
  image.src = `./assets/${file}`;
});
