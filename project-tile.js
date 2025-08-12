class ProjectTile extends HTMLElement {
  connectedCallback() {
    const imgSrc = this.getAttribute('img-src') || '';
    const imgAlt = this.getAttribute('img-alt') || '';
    const title = this.getAttribute('title') || '';
    const desc = this.getAttribute('desc') || '';
    const linkUrl = this.getAttribute('link-url') || '#';
    const linkText = this.getAttribute('link-text') || 'View Case Study →';
		console.log('ProjectTile connected:', this.getAttribute('link-text'));

		this.innerHTML = `
		  <a href="${linkUrl}" class="block bg-white shadow rounded-lg overflow-hidden hover:shadow-2xl transition text-inherit flex flex-col h-full">
		    <img src="${imgSrc}" alt="${imgAlt}" class="w-full h-56 object-cover flex-shrink-0" />
		    <div class="p-6 flex flex-col flex-grow">
		      <h4 class="text-xl font-semibold mb-2">${title}</h4>
		      <p class="text-gray-600 mb-4 flex-grow overflow-auto">
		        ${desc}
		      </p>
		      <span class="text-blue-600 hover:underline mt-auto inline-block">
		        ${linkText}
		      </span>
		    </div>
		  </a>
		`;
  }
}

customElements.define('project-tile', ProjectTile);
