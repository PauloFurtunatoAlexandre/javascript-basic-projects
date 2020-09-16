const btns = document.querySelectorAll(".tab-all");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;

    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        articles.forEach((article) => {
            article.classList.remove("active");
        });

        const activeEl = document.getElementById(id);
        activeEl.classList.add("active");
    }
});
