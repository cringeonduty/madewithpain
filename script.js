// === works ===
const works = [
  { src: "images/birdshealed2017.webp", tags: ["neotraditional", "2017", "healed"] },
  { src: "images/gendalf2023.webp", tags: ["contemporary", "2019", "fresh"] },
  { src: "images/cosmos2019.webp", tags: ["realistic", "2019", "fresh"] },
  { src: "images/forest2017.webp", tags: ["graphic", "2017", "healed"] },
  { src: "images/birds2020.webp", tags: ["graphic", "2020", "fresh"] },
  { src: "images/flovers2019.webp", tags: ["neotraditional", "2019", "healed"] },
  { src: "images/tip2024.webp", tags: ["graphic", "2024", "healed"] },
  { src: "images/redbull2024.webp", tags: ["contemporary", "2024", "fresh"] },
  { src: "images/realistic2017.webp", tags: ["realistic", "2017", "fresh"] },
  { src: "images/animegirl2020.webp", tags: ["anime", "2020", "fresh"] },
  { src: "images/neckflowers2021.webp", tags: ["neotraditional", "2021", "healed", "fresh"] },
  { src: "images/abstract2020.webp", tags: ["abstract", "2020", "fresh"] },
  { src: "images/david2018.webp", tags: ["realistic", "2018", "fresh"] },
  { src: "images/statue2019.webp", tags: ["realistic", "2019", "fresh"] },
  { src: "images/buddaball2020.webp", tags: ["realistic", "2020", "fresh"] },
  { src: "images/fox2018.webp", tags: ["illustration", "2018", "fresh"] },
  { src: "images/sketch2018.webp", tags: ["sketch", "2018", "fresh"] },
  { src: "images/snakes2018.webp", tags: ["neotraditional", "2018", "fresh"] },
  { src: "images/forestcloseum2021.webp", tags: ["graphic", "2021", "fresh"] },
  { src: "images/flowersbng2020.webp", tags: ["neotraditional", "2020", "fresh"] },
  { src: "images/ornamentfront2019.webp", tags: ["ornament", "2019", "healed", "fresh"] },
  { src: "images/face2018.webp", tags: ["sketch", "2018", "fresh"] },
  { src: "images/dove2023.webp", tags: ["contemporary", "2023", "fresh"] },
  { src: "images/ornamentback2019.webp", tags: ["ornament", "2019", "healed", "fresh"] },
  { src: "images/knight2019.webp", tags: ["neotraditional", "2019", "healed"] },
  { src: "images/bird2019.webp", tags: ["neotraditional", "2019", "fresh"] },
  { src: "images/wolf2018.webp", tags: ["graphic", "2018", "fresh"] },
  { src: "images/raven2020.webp", tags: ["realistic", "2020", "fresh"] },
  { src: "images/boat2019.webp", tags: ["graphic", "2019", "healed"] },
  { src: "images/cards2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/column2018.webp", tags: ["realistic", "2018", "fresh"] },
  { src: "images/dove2018.webp", tags: ["realistic", "2018", "fresh"] },
  { src: "images/ankor2016.webp", tags: ["neotraditional", "2016", "fresh"] },
  { src: "images/watches2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/pizzapepe2022.webp", tags: ["contemporary", "2022", "fresh"] },
  { src: "images/fox2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/hipepe22024.webp", tags: ["contemporary", "2024", "fresh"] },
  { src: "images/anime22020.webp", tags: ["anime", "2020", "fresh"] },
  { src: "images/bafomet2023.webp", tags: ["contemporary", "2023", "fresh"] },
  { src: "images/bobo2022.webp", tags: ["contemporary", "2022", "fresh"] },
  { src: "images/clownpepe2024.webp", tags: ["contemporary", "2024", "fresh"] },
  { src: "images/hipepe2024.webp", tags: ["contemporary", "2024", "fresh"] },
  { src: "images/monopoly2020.webp", tags: ["graphic", "2020", "fresh"] },
  { src: "images/panter2021.webp", tags: ["graphic", "2021", "fresh"] },
  { src: "images/peony2019.webp", tags: ["neotraditional", "2019", "fresh"] },
  { src: "images/pepe2024.webp", tags: ["contemporary", "2024", "fresh"] },
  { src: "images/raven22020.webp", tags: ["realistic", "2020", "fresh"] },
  { src: "images/scorpion2024.webp", tags: ["contemporary", "2024", "fresh"] },
  { src: "images/snakes2024.webp", tags: ["neotraditional", "2024", "fresh"] },
  { src: "images/spyder2018.webp", tags: ["realistic", "2018", "fresh"] },
  { src: "images/knee2020.webp", tags: ["ornament", "2020", "fresh"] },
  { src: "images/sleevebng2017.webp", tags: ["realistic", "2017", "healed", "fresh"] },
  { src: "images/spider2017.webp", tags: ["neotraditional", "2017", "fresh"] },
  { src: "images/card2020.webp", tags: ["graphic", "2020", "fresh"] },
  { src: "images/neotrad2018.webp", tags: ["neotraditional", "2018", "fresh"] },
  { src: "images/budda2020.webp", tags: ["realistic", "2020", "fresh"] },
  { src: "images/flower2018.webp", tags: ["neotraditional", "2018", "fresh"] },
  { src: "images/eye2017.webp", tags: ["contemporary", "2017", "fresh"] },
  { src: "images/fisher2019.webp", tags: ["realistic", "2019", "fresh"] },
  { src: "images/head2017.webp", tags: ["realistic", "2017", "fresh"] },
  { src: "images/coloseum2019.webp", tags: ["realistic", "2019", "fresh"] },
  { src: "images/medieval2021.webp", tags: ["illustration", "2021", "fresh"] },
  { src: "images/birdsdot2020.webp", tags: ["graphic", "2020", "fresh"] },
  { src: "images/lamp2016.webp", tags: ["neotraditional", "2016", "fresh"] },
  { src: "images/bng2017.webp", tags: ["realistic", "2017", "fresh"] },
  { src: "images/lamp2017.webp", tags: ["neotraditional", "2017", "fresh"] },
  { src: "images/owl2016.webp", tags: ["graphic", "2016", "fresh"] },
  { src: "images/bobo2024.webp", tags: ["contemporary", "2024", "fresh"] },
  { src: "images/turtle2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/graphyc2018.webp", tags: ["graphic", "2018", "fresh"] },
  { src: "images/medieval22019.webp", tags: ["illustration", "2019", "fresh"] },
  { src: "images/skull2019.webp", tags: ["neotraditional", "2019", "fresh"] },
  { src: "images/india2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/sketch1019.webp", tags: ["sketch", "2019", "fresh"] },
  { src: "images/boatandvawes2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/elephant2020.webp", tags: ["realistic", "2020", "fresh"] },
  { src: "images/flowerscolor2019.webp", tags: ["neotraditional", "2019", "fresh"] },
  { src: "images/hends2018.webp", tags: ["graphic", "2018", "fresh"] },
  { src: "images/tree2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/elephant2019.webp", tags: ["realistic", "2019", "fresh"] },
  { src: "images/gendalf2019.webp", tags: ["realistic", "2023", "healed"] },
  { src: "images/bilka2020.webp", tags: ["graphic", "2020", "fresh"] },
  { src: "images/anime2023.webp", tags: ["contemporary", "2023", "healed"] },
  { src: "images/dotflower2020.webp", tags: ["graphic", "2020", "fresh"] },
  { src: "images/freshbirds2017.webp", tags: ["neotraditional", "2017", "fresh"] },
  { src: "images/back2020.webp", tags: ["realistic", "2020", "healed"] },
  { src: "images/oriental2020.webp", tags: ["oriental", "2020", "fresh"] },
  { src: "images/medieval2019.webp", tags: ["illustration", "2019", "fresh"] },
  { src: "images/neotrad2016.webp", tags: ["neotraditional", "2016", "fresh"] },
  { src: "images/sunflower2020.webp", tags: ["graphic", "2020", "healed"] },
  { src: "images/bulldog2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/neotrad2017.webp", tags: ["neotraditional", "2017", "fresh"] },
  { src: "images/birds2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/ship2018.webp", tags: ["realistic", "2018", "fresh"] },
  { src: "images/forest2021.webp", tags: ["graphic", "2021", "fresh"] },
  { src: "images/skull2017.webp", tags: ["neotraditional", "2017", "fresh"] },
  { src: "images/ornament2021.webp", tags: ["ornamental", "2021", "fresh"] },
  { src: "images/mini2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/turtle22019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/leo2023.webp", tags: ["neotraditional", "2023", "healed"] },
  { src: "images/colorsnake2019.webp", tags: ["neotraditional", "2019", "fresh"] },
  { src: "images/castle2016.webp", tags: ["neotraditional", "2016", "fresh"] },
  { src: "images/flybike2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/parrot2019.webp", tags: ["neotraditional", "2019", "fresh"] },
  { src: "images/viking2018.webp", tags: ["graphic", "2018", "fresh"] },
  { src: "images/hands2020.webp", tags: ["realistic", "2020", "fresh"] },
  { src: "images/lighthouse2019.webp", tags: ["realistik", "2019", "fresh"] },
  { src: "images/torch2019.webp", tags: ["neotraditional", "2019", "fresh"] },
  { src: "images/snake2018.webp", tags: ["neotraditional", "2018", "fresh"] },
  { src: "images/raven2019.webp", tags: ["realistic", "2019", "fresh"] },
  { src: "images/kidtaxi2023.webp", tags: ["realistic", "2023", "healed"] },
  { src: "images/abstrakthand2020.webp", tags: ["abstract", "2020", "fresh"] },
  { src: "images/boat2021.webp", tags: ["realistic", "2021", "fresh"] },
  { src: "images/falcon2019.webp", tags: ["neotraditional", "2019", "fresh"] },
  { src: "images/head2018.webp", tags: ["graphic", "2018", "fresh"] },
  { src: "images/wolf2020.webp", tags: ["graphic", "2020", "fresh"] },
  { src: "images/lighthousehealed2019.webp", tags: ["realistic", "2019", "healed"] },
  { src: "images/parrothealed2018.webp", tags: ["neotraditional", "2018", "healed"] },
  { src: "images/tigerback2017.webp", tags: ["realistic", "2017", "fresh"] },
  { src: "images/fox2017.webp", tags: ["illustration", "2017", "fresh"] },
  { src: "images/beatle2019.webp", tags: ["graphic", "2019", "fresh"] },
  { src: "images/lotus2021.webp", tags: ["oriental", "2021", "fresh"] },
  { src: "images/gothic2018.webp", tags: ["realistic", "2018", "fresh"] },
  { src: "images/sketch2017.webp", tags: ["sketch", "2017", "fresh"] },
  { src: "images/abstrakt2020.webp", tags: ["abstract", "2020", "fresh"] },
  { src: "images/kraken2017.webp", tags: ["graphic", "2017", "fresh"] },
  { src: "images/leaves2019.webp", tags: ["neotraditional", "2019", "fresh"] },
];

// tag colors ===
const tagColors = {
  blackwork: "#222222",
  dotwork: "#3b82f6",
  realism: "#16a34a",
  minimal: "#9333ea",
  healed: "#10b981",
  fresh: "#f43f5e",
  2012: "#000000ff",
  2013: "#000000ff",
  2014: "#000000ff",
  2015: "#000000ff",
  2016: "#000000ff",
  2017: "#000000ff",
  2018: "#000000ff",
  2019: "#000000ff",
  2020: "#000000ff",
  2021: "#000000ff",
  2022: "#000000ff",
  2023: "#000000ff",
  2024: "#000000ff",
};

function getTagColor(tag){ return tagColors[tag] || "#555"; }

// === gallery ===
const gallery = document.getElementById("gallery");
let currentFilter = null;
let itemsToShow = 9;
let allWorks = works;
let isLoading = false;

// button Show More
const showMoreContainer = document.createElement("div");
showMoreContainer.className = "show-more-container";
showMoreContainer.style.textAlign = "center";
showMoreContainer.style.margin = "30px 0";

const showMoreBtn = document.createElement("button");
showMoreBtn.className = "show-more-btn";
showMoreBtn.textContent = "Show More";
showMoreBtn.onclick = loadMore;

showMoreContainer.appendChild(showMoreBtn);

function buildAltText(work) {
  const styles = [
    "Schwarz-Grau Tattoo",
    "Blackwork Tattoo",
    "Fineline Tattoo",
    "Porträt Tattoo",
    "Realistic Tattoo",
    "Japanese Tattoo",
    "Blackout Tattoo",
    "Cyber Sigilism Tattoo",
    "Anime Tattoo",
    "Chicano Tattoo"
  ];

  const locations = [
    "Straubing", "Nürnberg", "Regensburg", "Deggendorf",
    "Landshut", "Ingolstadt", "Bayern"
  ];

  const tagToStyle = {
    "realistic": "Realistic Tattoo",
    "neotraditional": "Schwarz-Grau Tattoo",
    "graphic": "Blackwork Tattoo",
    "fineline": "Fineline Tattoo",
    "anime": "Anime Tattoo",
    "chicano": "Chicano Tattoo",
    "sketch": "Blackwork Tattoo",
    "oriental": "Japanese Tattoo",
    "abstract": "Cyber Sigilism Tattoo"
  };
  
  let styleFromTag = null;
  for (const tag of work.tags) {
    if (tagToStyle[tag]) {
      styleFromTag = tagToStyle[tag];
      break;
    }
  }
  
  const styleLabel = styleFromTag || styles[Math.floor(Math.random() * styles.length)];
  const locationLabel = locations[Math.floor(Math.random() * locations.length)];

  return `${styleLabel} – Andre Tattoo Artist ${locationLabel}, Bayern`;
}

function renderGallery(filterTag = null){
  currentFilter = filterTag;
  itemsToShow = 9; 
  
  let filteredWorks = filterTag ? works.filter(w => w.tags.includes(filterTag)) : works;
  allWorks = filteredWorks;
  
  gallery.innerHTML = "";
  
  const worksToShow = filteredWorks.slice(0, itemsToShow);
  
  worksToShow.forEach(work => {
    appendWorkToGallery(work);
  });
  
  updateShowMoreButton();
}

function appendWorkToGallery(work) {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `
    <div class="content">
      <img src="${work.src}" alt="${buildAltText(work)}" loading="lazy">
      <div class="tags">
        ${work.tags.map(tag => `<span style="background:${getTagColor(tag)}" onclick="filterFromModal(event,'${tag}')">#${tag}</span>`).join("")}
      </div>
    </div>
  `;
  
  const img = item.querySelector('img');
  img.addEventListener('load', () => {
    resizeMasonryItem(item);
  });
  
  if (img.complete) {
    resizeMasonryItem(item);
  }
  
  item.addEventListener("click", () => openModal(work));
  gallery.appendChild(item);
}

function loadMore() {
  if (isLoading) return;
  isLoading = true;
  
  const scrollPosition = window.scrollY;
  const galleryHeight = gallery.offsetHeight;
  
  const currentCount = document.querySelectorAll('#gallery .item').length;
  const nextWorks = allWorks.slice(currentCount, currentCount + 9);
  
  nextWorks.forEach(work => {
    appendWorkToGallery(work);
  });
  
  itemsToShow = currentCount + nextWorks.length;
  
  setTimeout(() => {
    resizeAllMasonryItems();
    
    window.scrollTo({
      top: scrollPosition,
      behavior: 'auto' 
    });
    
    isLoading = false;
  }, 100);
  
  updateShowMoreButton();
}

function updateShowMoreButton() {
  const currentCount = document.querySelectorAll('#gallery .item').length;
  
  if (allWorks.length > currentCount) {
    if (!showMoreContainer.parentNode) {
      gallery.after(showMoreContainer);
    }
  } else {
    if (showMoreContainer.parentNode) {
      showMoreContainer.parentNode.removeChild(showMoreContainer);
    }
  }
}

function openModal(work){
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTags = document.getElementById("modal-tags");
  modal.style.display = "flex";
  modalImg.src = work.src;
  modalImg.alt = buildAltText(work);
  modalTags.innerHTML = work.tags.map(tag=>`<span style="background:${getTagColor(tag)}" onclick="filterFromModal(event,'${tag}')">#${tag}</span>`).join("");
}

function closeModal(){ 
  document.getElementById("modal").style.display = "none"; 
}

function filterFromModal(event, tag){
  event.stopPropagation();
  closeModal();
  renderGallery(tag);
}

function resizeMasonryItem(item){
  const grid = document.getElementById('gallery');
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));
  const content = item.querySelector('.content');
  const contentHeight = content.getBoundingClientRect().height;
  const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllMasonryItems(){
  document.querySelectorAll('#gallery .item').forEach(item=>resizeMasonryItem(item));
}

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resizeAllMasonryItems, 100);
});

window.addEventListener('load', () => { 
  renderGallery(); 
});
