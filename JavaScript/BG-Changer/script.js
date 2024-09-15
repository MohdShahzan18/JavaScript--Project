document.getElementById("start").addEventListener("click", function () {
  const names = setInterval(function () {
    let hash = "#";
    const color = "0123456789ABCDEF";
    for (i = 0; i < 6; i++) {
      hash = hash + color[Math.floor(Math.random() * 16)];
      document.body.style.background = hash;
     document.getElementById('para').innerHTML = hash

    }
  }, 2000);
  document.getElementById("stop").addEventListener("click", function () {
    clearInterval(names);
    document.body.style.background = "#ffffff";
    document.getElementById('para').innerHTML = '#ffffff';
  });
});
