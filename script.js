// Wait for DOM to be fully loaded
window.addEventListener("load", function () {
  // Animate leaves sequentially
  for (let i = 1; i <= 30; i++) {
    const leaf = document.getElementById(`leaf-${i}`);
    if (leaf) {
      const delay = (i - 1) * 50; // 50ms delay between each leaf

      setTimeout(() => {
        leaf.style.transition = "opacity 0.4s ease-out";
        leaf.style.opacity = "1";
      }, delay);
    }
  }

  // After all leaves are animated, animate fire group
  const totalLeafDelay = 30 * 50 + 400; // All leaves delay + last animation duration
  
  setTimeout(() => {
    const fire = document.getElementById("fire");
    
    if (fire) {
      fire.style.animation = "fireZoom 1s ease-in forwards";
    }
  }, totalLeafDelay);
});
