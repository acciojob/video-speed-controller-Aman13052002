const video =
  document.querySelector('.player__video');

const toggle =
  document.querySelector('.toggle');

const progress =
  document.querySelector('.progress');

const progressFilled =
  document.querySelector('.progress__filled');

const ranges =
  document.querySelectorAll('.player__slider');

const skipButtons =
  document.querySelectorAll('[data-skip]');


// Play/Pause
function togglePlay() {

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update button icon
function updateButton() {

  toggle.textContent =
    video.paused ? '►' : '❚ ❚';
}

// Progress bar
function handleProgress() {

  const percent =
    (video.currentTime / video.duration) * 100;

  progressFilled.style.flexBasis =
    `${percent}%`;
}

// Skip/Rewind
function skip() {

  video.currentTime +=
    parseFloat(this.dataset.skip);
}

// Volume & Speed
function handleRangeUpdate() {

  video[this.name] = this.value;
}

// Scrub progress
function scrub(e) {

  const scrubTime =
    (e.offsetX / progress.offsetWidth) *
    video.duration;

  video.currentTime = scrubTime;
}


// Events
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);

video.addEventListener('pause', updateButton);

video.addEventListener(
  'timeupdate',
  handleProgress
);

progress.addEventListener('click', scrub);

skipButtons.forEach(button =>
  button.addEventListener('click', skip)
);

ranges.forEach(range =>
  range.addEventListener(
    'change',
    handleRangeUpdate
  )
);

ranges.forEach(range =>
  range.addEventListener(
    'mousemove',
    handleRangeUpdate
  )
);