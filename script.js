// your JS code here

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressFilled =
  player.querySelector('.progress__filled');

const toggle =
  player.querySelector('.toggle');

const ranges =
  player.querySelectorAll('.player__slider');

const skipButtons =
  player.querySelectorAll('[data-skip]');


// Play / Pause toggle
function togglePlay() {

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Change button icon
function updateButton() {

  if (video.paused) {
    toggle.textContent = '►';
  } else {
    toggle.textContent = '❚ ❚';
  }
}

// Update progress bar
function handleProgress() {

  const percent =
    (video.currentTime / video.duration) * 100;

  progressFilled.style.flexBasis =
    `${percent}%`;
}

// Scrub progress bar
function scrub(e) {

  const scrubTime =
    (e.offsetX / progress.offsetWidth) *
    video.duration;

  video.currentTime = scrubTime;
}

// Skip video
function skip() {

  video.currentTime +=
    parseFloat(this.dataset.skip);
}

// Handle volume and playback speed
function handleRangeUpdate() {

  video[this.name] = this.value;
}


// Event Listeners
video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);

video.addEventListener('pause', updateButton);

video.addEventListener(
  'timeupdate',
  handleProgress
);

toggle.addEventListener('click', togglePlay);

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

// Progress bar click
progress.addEventListener('click', scrub);