const slides = document.querySelector(".slides");
        const slidesCount = document.querySelectorAll(".slides img").length;
        let index = 0;
        let deg = 360 / slidesCount
        const imgs = document.querySelectorAll(".slides img");

        document.querySelector(".next").addEventListener("click", () => {
            // slides.style.transform = "perspective(1000px) rotateY(-60deg)";
            index++;
            slides.style.transition = "all 500ms ease-in";
            if (index > slidesCount - 1) {
                slides.style.transition = "none";
                index = 0;
            }
            slides.style.transform = `perspective(1000px) rotateY(${-deg * index}deg)`;
        });
        document.querySelector(".prev").addEventListener("click", () => {
            index--;
            slides.style.transition = "all 500ms ease-in";
            if (index < 0) {
                slides.style.transition = "none";
                index = slidesCount - 1;
            }
            slides.style.transform = `perspective(1000px) rotateY(${-deg * index}deg)`;
        });  