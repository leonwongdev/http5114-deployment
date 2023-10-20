window.onload = () => {
  const breakProdH2 = document.getElementById("break-prod");
  setInterval(() => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    breakProdH2.style.backgroundColor = "#" + randomColor;
  }, 50);
};
