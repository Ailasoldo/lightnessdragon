  function fixScale() {
  const wrapper = document.querySelector('.wrapper');
  const viewport = document.querySelector('.viewport');

  const designWidth = 1280;
  const screenWidth = window.innerWidth;
  const scale = Math.min(screenWidth / designWidth, 1);

  if (screenWidth >= designWidth) {
    wrapper.style.zoom = "1";
    wrapper.style.transform = "none";
    viewport.style.height = "auto";
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
  } else {
    wrapper.style.zoom = scale;
    wrapper.style.transform = "none";

    const scaledHeight = wrapper.getBoundingClientRect().height;
    viewport.style.height = scaledHeight + "px";
    document.body.style.height = scaledHeight + "px";
    document.body.style.overflow = "hidden";
  }
}

window.addEventListener("load", fixScale);
window.addEventListener("resize", fixScale);