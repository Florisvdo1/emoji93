// Data for emojis
const rawEmojiData = {
  smileys: [
    '😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
    '😇','🙂','🙃','😌','😍','😘','😗','😙','😚','😋',
    '😛','😜','😝','🤑','🤗','🤔','🤐','🤨','😐','😑',
    '😶','😏','😒','🙄','😬','🤥','😌','😔','😪','🤤',
    '😴','😷','🤒','🤕','🤢','🤮','🤧','😵','🤯','🤠',
    '🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯',
    '😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭',
    '😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡',
    '😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺',
  ],
  animals: [
    '🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯',
    '🦁','🐮','🐷','🐸','🐵','🙈','🙉','🙊','🐒','🐔',
    '🐧','🐦','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺',
    '🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🕷️',
    '🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞',
    '🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅',
    '🐆','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦒',
    '🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌',
  ],
  nature: [
    '🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍',
    '🎋','🍃','🍂','🍁','🍄','🌾','💐','🌷','🌹','🥀',
    '🌺','🌸','🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕',
    '🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍',
    '🌏','💫','⭐','🌟','✨','⚡','☄️','💥','🔥','🌪️',
    '🌈','☀️','🌤️','⛅','🌥️','☁️','🌦️','🌧️','⛈️','🌩️',
    '🌨️','❄️','☃️','⛄','🌬️','💨','🌫️','🌊','💧','💦',
  ],
  food: [
    '🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈',
    '🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦',
    '🥒','🥬','🌶️','🌽','🥕','🥔','🍠','🥐','🍞','🥖',
    '🥨','🥯','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩',
    '🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🧆','🌮',
    '🌯','🥗','🥘','🍝','🍜','🍲','🍛','🍣','🍱','🥟',
    '🍤','🍙','🍚','🍘','🍥','🥮','🥠','🍢','🍡','🍧',
  ],
  activities: [
    '⚽','🏀','🏈','⚾','🎾','🏐','🏉','🎱','🏓','🏸',
    '🥅','🏒','🏑','🥍','🏏','⛳','🏹','🎣','🥊','🥋',
    '🎽','⛸️','🥌','🛷','🥇','🥈','🥉','🏆','🎮','🕹️',
    '🎲','♠️','♥️','♦️','♣️','🃏','🎴','🎭','🖼️','🎨',
    '🎤','🎧','🎼','🎹','🥁','🎷','🎺','🎸','🎻','🎬',
    '🎪','🎟️','🎫','🛎️','🎗️','🎏','🎐','🎀','🎁','🎊',
    '🎉','🎈','💍','🥽','🥼','🦺','👑','🎩','🧢','👒',
  ],
  travel: [
    '🚗','🚕','🚙','🚌','🚎','🏎️','🚓','🚑','🚒','🚐',
    '🚚','🚛','🚜','🏍️','🛵','🚲','🛴','🚏','🛣️','🛤️',
    '🚨','🚥','🚦','⛽','🚧','⚓','⛵','🛶','🚤','🛳️',
    '⛴️','🛥️','🚢','✈️','🛩️','🛫','🛬','💺','🚁','🚟',
    '🚠','🚡','🚂','🚋','🚞','🚝','🚄','🚅','🚈','🚇',
    '🚆','🚊','🚉','🛤️','🚀','🛸','🛰️','💫','🌠','🌌',
  ],
  objects: [
    '⌚','📱','📲','💻','⌨️','🖥️','🖨️','🖱️','🖲️','🕹️',
    '🗜️','💽','💾','💿','📀','📼','📷','📸','📹','🎥',
    '📽️','🎞️','📞','☎️','📟','📠','📺','📻','🎙️','🎚️',
    '🎛️','⏱️','⏲️','⏰','🕰️','⌛','⏳','📡','🔋','🔌',
    '💡','🔦','🕯️','🧯','🛢️','💸','💵','💴','💶','💷',
    '💰','💳','💎','⚖️','🔧','🔨','⚒️','🛠️','⛏️','🔩',
    '⚙️','🗜️','⛓️','🔫','💣','🔪','🗡️','⚔️','🛡️','🚬',
  ],
  symbols: [
    '❤️','💔','💕','💞','💓','💗','💖','💘','💝','💟',
    '☮️','✝️','☪️','🕉️','☸️','✡️','🔯','🕎','☯️','☦️',
    '🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏',
    '♐','♑','♒','♓','🆔','⚛️','🉑','☢️','☣️','📴',
    '📳','🈶','🈚','🈸','🈺','🈷️','✴️','🆚','💮','🉐',
    '㊗️','㊙️','🈺','🈷️','🈹','🈵','🔤','🔡','🔠','🔣',
    '🔢','#️⃣','*️⃣','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣',
  ],
  flags: [
    '🏳️','🏴','🏁','🚩','🏳️‍🌈','🏳️‍⚧️','🇦🇫','🇦🇱','🇩🇿','🇦🇸',
    '🇦🇩','🇦🇴','🇦🇮','🇦🇶','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇺','🇦🇹',
    '🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲',
    '🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫',
    '🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳',
    '🇨🇴','🇰🇲','🇨🇬','🇨🇩','🇨🇷','🇨🇮','🇭🇷','🇨🇺','🇨🇾','🇨🇿',
  ],
};

// Constants
const EMOJIS_PER_PAGE = 20; // Adjusted to fit two rows
let currentCategoryIndex = 0;
const categories = [];

// Process rawEmojiData to split large categories
const emojiData = {};

// Split large categories into subcategories
Object.keys(rawEmojiData).forEach(category => {
  const emojis = rawEmojiData[category];
  if (emojis.length > EMOJIS_PER_PAGE) {
    const parts = Math.ceil(emojis.length / EMOJIS_PER_PAGE);
    for (let i = 0; i < parts; i++) {
      const partName = `${category} Part ${i + 1}`;
      emojiData[partName] = emojis.slice(i * EMOJIS_PER_PAGE, (i + 1) * EMOJIS_PER_PAGE);
      categories.push(partName);
    }
  } else {
    emojiData[category] = emojis;
    categories.push(category);
  }
});

// Load emojis into the grid
function loadEmojis() {
  const grid = document.getElementById('emoji-grid');
  const category = categories[currentCategoryIndex];
  document.getElementById('category-name').textContent = category;
  grid.innerHTML = '';
  const emojis = emojiData[category];
  emojis.forEach((emoji) => {
    const item = document.createElement('div');
    item.className = 'emoji-item';
    item.textContent = emoji;
    item.draggable = true;
    // Add event listeners for drag and touch events
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('touchstart', handleTouchStart, { passive: false });
    grid.appendChild(item);
  });
}

function navigateCategory(direction) {
  if (direction === 'next') {
    currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
  } else {
    currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
  }
  loadEmojis();
}

document.getElementById('next-page').addEventListener('click', () => navigateCategory('next'));
document.getElementById('prev-page').addEventListener('click', () => navigateCategory('prev'));

loadEmojis();

// Drag and Drop functionality
let draggedEmoji = null;

function handleDragStart(e) {
  draggedEmoji = this.textContent;
  e.dataTransfer.setData('text/plain', draggedEmoji);
  // Mobile vibration
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

function handleDragOver(e) {
  e.preventDefault();
  this.classList.add('highlight');
}

function handleDragLeave(e) {
  this.classList.remove('highlight');
}

function handleDrop(e) {
  e.preventDefault();
  this.classList.remove('highlight');
  this.textContent = draggedEmoji;
  // Magnet attach effect
  this.classList.add('magnet-effect');
  setTimeout(() => {
    this.classList.remove('magnet-effect');
  }, 300);
}

function handleTouchStart(e) {
  e.preventDefault();
  const touch = e.touches[0];
  draggedEmoji = this.textContent;

  const ghost = this.cloneNode(true);
  ghost.style.position = 'absolute';
  ghost.style.top = `${touch.pageY - 25}px`;
  ghost.style.left = `${touch.pageX - 25}px`;
  ghost.id = 'dragging-emoji';
  ghost.style.pointerEvents = 'none';
  ghost.style.zIndex = '1000';
  document.body.appendChild(ghost);

  function moveListener(e) {
    const touch = e.touches[0];
    ghost.style.top = `${touch.pageY - 25}px`;
    ghost.style.left = `${touch.pageX - 25}px`;
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.classList.contains('emoji-placeholder')) {
      element.classList.add('highlight');
    } else {
      document.querySelectorAll('.emoji-placeholder.highlight').forEach(el => el.classList.remove('highlight'));
    }
  }

  function endListener(e) {
    const touch = e.changedTouches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.classList.contains('emoji-placeholder')) {
      element.textContent = draggedEmoji;
      // Magnet attach effect
      element.classList.add('magnet-effect');
      setTimeout(() => {
        element.classList.remove('magnet-effect');
      }, 300);
    }
    ghost.remove();
    document.removeEventListener('touchmove', moveListener);
    document.removeEventListener('touchend', endListener);
    document.querySelectorAll('.emoji-placeholder.highlight').forEach(el => el.classList.remove('highlight'));
  }

  document.addEventListener('touchmove', moveListener, { passive: false });
  document.addEventListener('touchend', endListener, { passive: false });

  // Mobile vibration
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

const placeholders = document.querySelectorAll('.emoji-placeholder');
placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', handleDragOver);
  placeholder.addEventListener('dragleave', handleDragLeave);
  placeholder.addEventListener('drop', handleDrop);
});

// Reset button functionality
document.getElementById('reset-button').addEventListener('click', () => {
  placeholders.forEach(placeholder => {
    placeholder.textContent = '';
  });
});

// Huiswerk button functionality
const huiswerkButton = document.getElementById('huiswerk-button');
huiswerkButton.addEventListener('click', () => {
  huiswerkButton.classList.toggle('green');
});

// Live time update
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('live-time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

// Adjust the layout dynamically
function adjustLayout() {
  const header = document.querySelector('header');
  const huiswerkContainer = document.getElementById('huiswerk-container');
  const planner = document.getElementById('planner');
  const emojiDeck = document.getElementById('emoji-deck');

  const windowHeight = window.innerHeight;
  const headerHeight = header.offsetHeight;
  const huiswerkHeight = huiswerkContainer.offsetHeight;
  const emojiDeckHeight = emojiDeck.offsetHeight;

  const availableHeight = windowHeight - (headerHeight + huiswerkHeight + emojiDeckHeight);

  // Adjust planner height
  planner.style.height = `${availableHeight}px`;
}

window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);
