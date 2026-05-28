//Your code goes here

const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleUpdate(e) {

  const y = e.pageY - speed.offsetTop;

  const percent = y / speed.offsetHeight;

  const min = 0.4;
  const max = 4;

  const playbackRate =
    percent * (max - min) + min;

  const height =
    Math.round(percent * 100) + '%';

  // Update bar height
  bar.style.height = height;

  // Update text
  bar.textContent =
    playbackRate.toFixed(2) + '×';

  // Update video speed
  video.playbackRate = playbackRate;
}

// Similar to your example
speed.addEventListener('mousemove', handleUpdate);
speed.addEventListener('change', handleUpdate);