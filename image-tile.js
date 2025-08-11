class LightboxTile extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute("src");
    const alt = this.getAttribute("alt") || "";
    const title = this.getAttribute("title") || "";
    const desc = this.getAttribute("desc") || "";
    const linkText = this.getAttribute("link-text") || "";

    this.innerHTML = `
      <div class="bg-gray-100 border border-gray-200 p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition transform cursor-pointer h-full flex flex-col">
        ${title ? `<h4 class="text-xl font-semibold mb-8">${title}</h4>` : ""}
        <img src="${src}" alt="${alt}" class="w-full object-cover max-h-48 overflow-y-hidden rounded-lg mb-2 border-2 border-slate-200">
        ${desc ? `<p class="text-gray-700 text-base mb-4">${desc}</p>` : ""}
        ${linkText ? `
          <span class="mt-auto text-blue-600 flex items-center gap-1 select-none">
            ${linkText} <span>→</span>
          </span>
        ` : ""}
      </div>
    `;

    this.addEventListener("click", () => openModal(src, alt));
  }
}

customElements.define("lightbox-tile", LightboxTile);
