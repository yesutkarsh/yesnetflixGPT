export const logo = "https://res.cloudinary.com/dpcvcblbt/image/upload/v1719250494/dbznwyphjjs1wat7ckgo.png"
export const banner = "https://image.tmdb.org/t/p/original/"
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDQzOGQ5NDQ0ZTFiNDVmMzcxZGE4YWFhNzUyMjdlOSIsInN1YiI6IjY2NjU3MGQ5NGUzOTM4NDU2YWU5YzRmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fF0_6nfg-Z693nfK7oCbrO52WqXdHCtPVMEUxrrS1n8'
    }
};


export const swiperSettings = {
  slidesPerView: 7, // Default number of slides on larger screens
  spaceBetween: 5, // Default space between slides
  breakpoints: {
    1640: { slidesPerView: 9, spaceBetween: 30 },
    1436: { slidesPerView: 5, spaceBetween: 30 },
    969: { slidesPerView: 3, spaceBetween: 20 },
    573: { slidesPerView: 3, spaceBetween: 20 },
    320: { slidesPerView: 2, spaceBetween: 40 },
    315: { slidesPerView: 1, spaceBetween: 40 },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};