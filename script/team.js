window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [{
            name: "Kartikeya Joshi",
            role: "TEAM CAPTAIN",
            role1: "Chassis Head",
            desc: "Leadership and learning are indispensable to each other, and it's the teamwork that multiplies the success.",
            photo: "https://res.cloudinary.com/danefi6av/image/upload/v1692335626/landingpage/meet%20our%20team/meet%20our%20team/kartikeya_n6urms.jpg",
            linkedin: "https://www.linkedin.com/in/kartikeya-chandra-joshi-b011ab1a9",
            instagram: "https://instagram.com/kj200.1?igshid=MzRlODBiNWFlZA==",
        },
        {
            name: "Rajveer Singh",
            role: "VICE CAPTAIN",
            role1: "Brakes & Tyre Head",
            desc: "When something is important enough, you do it even if the odds are not in your favour.",
            photo: "https://res.cloudinary.com/danefi6av/image/upload/v1692335629/landingpage/meet%20our%20team/meet%20our%20team/rajveer_hwzxqs.jpg",
            linkedin: "https://www.linkedin.com/in/rajveer-singh-1459091a7/",
            instagram: "https://instagram.com/rajveer.017?igshid=MzRlODBiNWFlZA=="
        },
        {
            name: "Tejasva Marwaha",
            role: "TEAM MANAGER",
            role1: "Chassis Head",
            desc: "Teamwork is the secret that makes common people achieve uncommon results.",
            photo: "https://res.cloudinary.com/danefi6av/image/upload/v1692335630/landingpage/meet%20our%20team/meet%20our%20team/tejasava_d4vfsm.jpg",
            linkedin: "https://www.linkedin.com/in/tejasva-marwaha-7ab8aa1b4",
            instagram: "https://instagram.com/tejasva_marwaha?igshid=MzRlODBiNWFlZA==",
        },
        {
            name: "Udit Raj",
            role: "FINANACE & PROCUREMENT HEAD",
            role1: "Brakes & Tyre Head",
            desc: "That lesson will repeat itself until you learn it.",
            photo: "https://res.cloudinary.com/danefi6av/image/upload/v1692335631/landingpage/meet%20our%20team/meet%20our%20team/udit_fchhj7.jpg",
            linkedin: "https://www.linkedin.com/in/udit-raj-155809183",
            instagram: "https://instagram.com/how_you_doi_n?igshid=MzRlODBiNWFlZA==",
        },
        {
            name: "Rahul Mittu",
            role: "Electrical Head",
            role1: "",
            desc: "Being successful is a choice and, therefore, being defeated is a decision.",
            photo: "https://res.cloudinary.com/danefi6av/image/upload/v1692335628/landingpage/meet%20our%20team/meet%20our%20team/rahul_siwvjl.jpg",
            linkedin: "",
            instagram: "https://instagram.com/rahul.mittu15?igshid=MzRlODBiNWFlZA==",
        },
        {
            name: "Vansh Garg",
            role: "Steering Head",
            role1: "",
            desc: "The best view comes after the hardest climb.",
            photo: "https://res.cloudinary.com/danefi6av/image/upload/v1692335630/landingpage/meet%20our%20team/meet%20our%20team/vansh_tr1he8.jpg",
            linkedin: "https://www.linkedin.com/in/vansh-garg-b17382274",
            instagram: "https://instagram.com/vansh.112?igshid=MzRlODBiNWFlZA==",
        },
        {
            name: "Jaskirat Singh",
            role: "Suspension Head",
            role1: "",
            desc: "Against the odds, that's what we are here for.",
            photo: "https://res.cloudinary.com/danefi6av/image/upload/v1692335627/landingpage/meet%20our%20team/meet%20our%20team/jaskirat_alxpyk.jpg",
            linkedin: "https://www.linkedin.com/in/jaskirat-singh-530428207",
            instagram: "https://instagram.com/jaskiratsingh12?igshid=MzRlODBiNWFlZA==",
        },
        {
            name: "Pulkit Tikku",
            role: "Transmission Head",
            role1: "Content Head",
            desc: "If you do what you've always done, you'll get what you've always gotten.",
            photo: "https://res.cloudinary.com/danefi6av/image/upload/v1692335629/landingpage/meet%20our%20team/meet%20our%20team/pulkit_nkim1w.jpg",
            linkedin: "https://www.linkedin.com/in/pulkit-tikku-0a6ab0195",
            instagram: "https://instagram.com/pulkittikku?igshid=MzRlODBiNWFlZA==",
        },
        {
            name: "Parmeet Singh Surdhar",
            role: "Transmission Head",
            role1: "",
            desc: "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
            photo: "https://res.cloudinary.com/danefi6av/image/upload/v1692335628/landingpage/meet%20our%20team/meet%20our%20team/parmeet_uh8xnh.jpg",
            linkedin: "https://www.linkedin.com/in/parmeet-singh-surdhar-43242a1a0",
            instagram: "https://instagram.com/parmeetsingh21?igshid=MzRlODBiNWFlZA==",
        },
        {
            name: "Vidi Keshav",
            role: "Graphic Designing & Publicity Head",
            role1: "",
            desc: "You didn't come this far, to only come this far",
            photo: "https://res.cloudinary.com/danefi6av/image/upload/v1692335630/landingpage/meet%20our%20team/meet%20our%20team/vidhi_lcmwna.jpg",
            linkedin: "https://www.linkedin.com/in/vidi-keshav-50348a250",
            instagram: "https://instagram.com/vidi_iiiiiiiiii?igshid=MzRlODBiNWFlZA==",
        },

    ];

    /* Social Icons */
    var icons = [{
        iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
        iInstagram: "https://rafaelalucas.com/dailyui/6/assets/instagram.svg"
    }];

    var 
        iLinkedin = icons[0].iLinkedin,
        iInstagram = icons[0].iInstagram;



    /* Function to populate the team members */
    function addTeam() {
        for (let i = 0; i < team.length; i++) {

            /* Variables for the team */
            var name = team[i].name,
                role = team[i].role,
                role1 = team[i].role1,
                desc = team[i].desc,
                photo = team[i].photo,
                linkedin = team[i].linkedin;
                instagram = team[i].instagram;

            /* Template for the Team Cards */
            var template = `
                <div class="swiper-slide">
                <div class="card">
                    <span class="bg"></span>
                    <span class="more"></span>
                    <figure class="photo"><img src="${photo}"></figure>
                        <article class="text">
                            <p class="name">${name}</p>
                            <p class="role">${role}</p>
                            <p class="role">${role1}</p> 
                            <p class="desc">${desc}</p> 
                        </article>
                        
                        <div class="social">
                        <span class="pointer"></span>
                        <div class="icons">
                            <a class="icon" href="${linkedin}" target="_blank" data-index="2"><img src="${iLinkedin}"></a>
                            <a class="icon" href="${instagram}" target="_blank" data-index="2"><img src="${iInstagram}"></a>

                            </div>
                            </div>
                    </div>
                </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        }
    };


    addTeam();



    /* Swiper Settings */

    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: false,
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 40,
        threshold: 5,


        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1180: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
            },
            799: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
            },
        }
    });

    /* Show More */

    var btnShow = document.querySelectorAll('.more');



    btnShow.forEach(function (el) {
        el.addEventListener('click', showMore);
    });

    function showMore(event) {
        var card = event.target.closest(".swiper-slide");

        if (card.classList.contains('show-more')) {
            card.classList.remove('show-more');
        } else {
            card.classList.add('show-more')
        }

    }


    /* Social Hover */
    var icon = document.querySelectorAll('.icon');

    icon.forEach(function (el) {
        el.addEventListener("mouseenter", followCursor);

    });


    function followCursor(event) {
        var pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
            index = event.currentTarget.dataset.index,
            sizeIcon = (60 * index) + 25;

        pointer.style.transform = `translateX(${sizeIcon}px)`;
    }


    /* end */
});