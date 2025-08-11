function openModal(src, alt) {
	const modal = document.getElementById('imageModal');
	const modalImage = document.getElementById('modalImage');
	const modalDesc = document.getElementById('modalDesc');

	modalImage.src = src;
	modalImage.alt = alt;
	modalDesc.textContent = alt;

	modal.classList.remove('hidden');
	modal.focus();
}

function closeModal() {
	const modal = document.getElementById('imageModal');
	modal.classList.add('hidden');
}

// Optional: Close modal on Escape key
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		closeModal();
	}
});

// Optional: Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', (e) => {
	if (e.target.id === 'imageModal') {
		closeModal();
	}
});
