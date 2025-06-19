async function loadHeader() {
    try {
        const baseURL = window.location.origin;
        const response = await fetch(`${baseURL}/components/header.html`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        document.body.insertAdjacentHTML('afterbegin', html);
    } catch (error) {
        console.error('Failed to load header:', error);
    }
}

async function loadFooter() {
    try {
        const baseURL = window.location.origin;
        const response = await fetch(`${baseURL}/components/footer.html`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        document.body.insertAdjacentHTML('beforeend', html);
    } catch (error) {
        console.error('Failed to load footer:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await Promise.all([loadHeader(), loadFooter()]);
        document.body.classList.add('loaded');
    } catch (error) {
        console.error('Error loading components:', error);
    }
});