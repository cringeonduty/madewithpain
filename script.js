// === Масив робіт ===
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

// === Кольори для тегів ===
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

// === Галерея ===
const gallery = document.getElementById("gallery");

function renderGallery(filterTag = null){
  gallery.innerHTML = "";
  works.filter(w => !filterTag || w.tags.includes(filterTag)).forEach(work=>{
    const item = document.createElement("div");
    item.className = "item";
    const altText = work.tags.join(", "); // SEO: alt тег з тегами
    item.innerHTML = `
      <div class="content">
        <img src="${work.src}" alt="${altText}">
        <div class="tags">
          ${work.tags.map(tag=>`<span style="background:${getTagColor(tag)}" onclick="filterFromModal(event,'${tag}')">#${tag}</span>`).join("")}
        </div>
      </div>
    `;
    item.querySelector('img').addEventListener('load',()=>resizeMasonryItem(item));
    item.addEventListener("click",()=>openModal(work));
    gallery.appendChild(item);
  });
}

// === Модалка ===
function openModal(work){
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTags = document.getElementById("modal-tags");
  modal.style.display = "flex";
  modalImg.src = work.src;
  modalImg.alt = work.tags.join(", "); // SEO: alt тег у модалці
  modalTags.innerHTML = work.tags.map(tag=>`<span style="background:${getTagColor(tag)}" onclick="filterFromModal(event,'${tag}')">#${tag}</span>`).join("");
}

function closeModal(){ document.getElementById("modal").style.display = "none"; }

// === Фільтрація ===
function filterFromModal(event, tag){
  event.stopPropagation();
  closeModal();
  renderGallery(tag);
}

// === Masonry логіка ===
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

// === Запуск ===
window.addEventListener('load',()=>{ renderGallery(); });
window.addEventListener('resize',resizeAllMasonryItems);
