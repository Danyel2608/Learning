document.addEventListener("DOMContentLoaded", () => {
  let icon = document.querySelector(".fa-solid");
  let header = document.querySelector("h1");
  icon.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    document.body.classList.toggle("tour");
    icon.classList.toggle("fa-gift");
    icon.classList.toggle("fa-bomb");
    icon.classList.toggle("spin");
    header.classList.toggle("smack");
    console.log(header.textContent);
    if (header.textContent.includes("3...2...1...¡PRESS!")) {
      header.textContent = header.innerHTML.replace(
        "3...2...1...¡PRESS!",
        "BOOM!!"
      );
    } else {
      header.textContent = header.innerHTML.replace(
        "BOOM!!",
        "3...2...1...¡PRESS!"
      );
    }
  });
});
