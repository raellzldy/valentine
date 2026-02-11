onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("backBtn").classList.add("show");
    }, 7000); // 5000ms = 7 detik
});

