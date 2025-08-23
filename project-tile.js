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
		  <a href="${linkUrl}" class="p-8 block bg-[url('images/card-background.png')] bg-cover shadow rounded-xl overflow-hidden hover:shadow-2xl transition text-inherit flex flex-col h-full border border-blue-500 text-center">
		    <img src="${imgSrc}" alt="${imgAlt}" class="w-full h-56 object-cover flex-shrink-0 rounded-lg border border-blue-500" />
		    <div class="flex flex-col flex-grow">
		      <h4 class="text-2xl font-semibold my-8 text-center text-blue-900">${title}</h4>
		      <p class="text-gray-600 mb-8 flex-grow overflow-auto">
		        ${desc}
		      </p>
		      <span class="text-blue-900 text-center hover:underline mt-auto inline-block">
		        ${linkText}
		      </span>
		    </div>
		  </a>
		`;
  }
}

customElements.define('project-tile', ProjectTile);
