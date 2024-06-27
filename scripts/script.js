// scroll-button
function initiScrollButtonTop() {
  const butttonTop = document.querySelector('[data-top="top"]');
  function getDistanceFromTheTop(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }

  function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 30;
    smoothScrollTo(0, distanceFromTheTop);
  }

  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.scrollX;
    const startY = window.scrollY || window.scrollY;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 500;

    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }

  butttonTop.addEventListener('click', scrollToSection);
}

initiScrollButtonTop();
