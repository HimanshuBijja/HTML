// Wait for DOM to be fully loaded
window.addEventListener("load", function () {
  // Animate leaves sequentially
  for (let i = 1; i <= 30; i++) {
    const leaf = document.getElementById(`leaf-${i}`);
    if (leaf) {
      const delay = (i - 1) * 100; // 100ms delay between each leaf

      setTimeout(() => {
        leaf.style.transition = "opacity 0.4s ease-out";
        leaf.style.opacity = "1";
      }, delay);
    }
  }
});
