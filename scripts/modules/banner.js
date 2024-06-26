export default function initBannerMobile() {
  const mobile = window.matchMedia('(max-width: 992px)').matches;

  if (mobile) {
    const banner = document.querySelector('[data-banner="banner"]');
    banner.src = 'images/banners/02-Principal_Mobile.jpg';
  }
}
