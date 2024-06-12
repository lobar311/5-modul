import { categories } from "./data";

const categoriesContainer = document.querySelector("#categories");

const renderCatigories = () => {
  if (!categoriesContainer) {
    console.error("categoriesContainer topilmadi");
    return;
  }

  categoriesContainer.innerHTML = "";

  categories.map((item) => {
    const col = document.createElement("div");
    col.className = "col-4 mb-2";
    col.innerHTML = `
        <img src="${item.image}" alt="" class="w-100 rounded">
        <div class=" d-flex justify-content-between p-2">
        <p class= "fw-bold">${item.name}</p>
        </div>
        `;

    categoriesContainer.appendChild(col);
  });
};

window.onload = () => {
  renderCatigories();
};
