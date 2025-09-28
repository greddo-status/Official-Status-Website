// Loading Screen Timeout
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("intro-screen").classList.remove("hidden");
  }, 2000);
});

// Enter Button
document.getElementById("enter-btn").addEventListener("click", () => {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
});

// Tab Switching mit Animation
const buttons = document.querySelectorAll("nav button");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.tab);

    // zuerst alle deaktivieren
    tabs.forEach(tab => tab.classList.remove("active"));

    // neuen Tab aktivieren
    target.classList.add("active");
  });
});




// --- Status Data ---
const statusData = [
  { name: "GREDDO | Germany", tag: "Roblox Game", status: "online" },
  { name: "GREDDO | England", tag: "Roblox Game", status: "offline" },
  { name: "GREDDO | Service Center", tag: "Roblox Game", status: "offline" },
  { name: "GREDDO | Website", tag: "Website", status: "maintenance" }
];


const statusContainer = document.getElementById("status-container");
statusData.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="tag">${item.tag}</div>
    <h3>${item.name}</h3>
    <p class="status-${item.status}">
      ${item.status.charAt(0).toUpperCase() + item.status.slice(1)}
    </p>
  `;
  statusContainer.appendChild(card);
});

// --- Other Services Data ---
const otherServicesData = [
  { name: "Support", status: "online" },
  { name: "Discord Server", status: "online" },
  { name: "Restaurant POS", status: "online" },
  { name: "EasyLink", status: "online" }
];

const otherServicesContainer = document.createElement("div");
otherServicesContainer.className = "card";

const title = document.createElement("h3");
title.textContent = "Other Services";
otherServicesContainer.appendChild(title);

otherServicesData.forEach(item => {
  const service = document.createElement("p");
  service.innerHTML = `
    ${item.name} - <span class="status-${item.status}">
      ${item.status.charAt(0).toUpperCase() + item.status.slice(1)}
    </span>
  `;
  otherServicesContainer.appendChild(service);
});

statusContainer.appendChild(otherServicesContainer);


// --- Events Data ---
const eventsData = [
  { name: "Halloween Event + Lounge Release", date: "October 2, 2025 20:00:00" }
];

const eventContainer = document.getElementById("event-container");
eventsData.forEach(event => {
  const card = document.createElement("div");
  card.className = "card";
  const countdown = document.createElement("p");
  countdown.id = "countdown";
  card.innerHTML = `<h3>${event.name}</h3>`;
  card.appendChild(countdown);
  eventContainer.appendChild(card);

  // Countdown Timer
  const countDownDate = new Date(event.date).getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    if (distance < 0) {
      countdown.innerHTML = "Event started";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
});

// --- Maintenance Data ---
const maintenanceData = [
  { time: "2025-09-26 14:00", text: "GREDDO Games | Server Down" },
  { time: "2025-09-26 19:00", text: "GREDDO Games | Update Test" },
  { time: "2025-09-26 21:00", text: "GREDDO Games | Server Release" }
];

const maintenanceContainer = document.getElementById("maintenance-container");
maintenanceData.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<strong>${item.time}</strong> - ${item.text}`;
  maintenanceContainer.appendChild(card);
});

// --- Dev Log Data ---
const devlogData = [
  { update: "GREDDO Games | We've now added the cleaning system, unfortunately without animations yet. We've also added a new AFK system. Of course, we've also thought about autumn.", tag: "NEW" },
  { update: "GREDDO Website | New website? We're happy to help. We've optimized everything so it looks perfect on PCs and every animation appears clean. You can also now see all the statuses.", tag: "NEW" }
];

const devlogContainer = document.getElementById("devlog-container");
devlogData.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="tag">${item.tag}</div>
    <p>${item.update}</p>
  `;
  devlogContainer.appendChild(card);
});

// --- Support Button ---
const supportBtn = document.querySelector(".support-btn");
const supportMenu = document.querySelector(".support-menu");

supportBtn.addEventListener("click", () => {
  supportMenu.classList.toggle("show");
});

// Schließt Menü, wenn man woanders hinklickt
document.addEventListener("click", (e) => {
  if (!supportBtn.contains(e.target) && !supportMenu.contains(e.target)) {
    supportMenu.classList.remove("show");
  }
});

// --- Interaktiver Hintergrund ---
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 bis 10
  const y = (e.clientY / window.innerHeight - 0.5) * 20; // -10 bis 10

  document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

// Enter Button
document.getElementById("enter-btn").addEventListener("click", () => {
  document.getElementById("intro-screen").style.display = "none";

  // Datum prüfen -> Halloween Event ab 02.10.2025
  const today = new Date();
  const halloweenStart = new Date("2025-10-02T00:00:00");

  if (today >= halloweenStart) {
    document.getElementById("halloween-screen").classList.remove("hidden");
  } else {
    document.getElementById("main-content").classList.remove("hidden");
  }
});

// Halloween Close Button
document.getElementById("halloween-close").addEventListener("click", () => {
  const halloweenBox = document.querySelector(".halloween-box");
  halloweenBox.style.animation = "bumpOut 0.6s ease forwards";

  setTimeout(() => {
    document.getElementById("halloween-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  }, 600); // nach der Animation
});













