// Dynamic greeting
const hour = new Date().getHours();
const greeting = document.getElementById('greeting');

if (hour < 12) {
  greeting.textContent = 'Good Morning - Habari za Asubuhi';
} else if (hour < 18) {
  greeting.textContent = 'Good Afternoon - Habari za Mchana';
} else {
  greeting.textContent = 'Good Evening - Habari za Jioni';
}

// Banner slider kila sekunde 3
const banners = [
  'https://via.placeholder.com/800x300/1E40AF/FFFFFF?text=KMR+Banner+1',
  'https://via.placeholder.com/800x300/FACC15/1E40AF?text=KMR+Banner+2',
  'https://via.placeholder.com/800x300/DC2626/FFFFFF?text=KMR+Banner+3'
];

let currentBanner = 0;
setInterval(() => {
  currentBanner = (currentBanner + 1) % banners.length;
  document.getElementById('slider').src = banners[currentBanner];
}, 3000);
