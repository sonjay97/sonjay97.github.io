async function loadHeader() {
    const response = await fetch('../components/header.html');
    const html = await response.text();
    document.body.insertAdjacentHTML('afterbegin', html);
}

async function loadFooter() {
    const response = await fetch('../components/footer.html');
    const html = await response.text();
    document.body.insertAdjacentHTML('beforeend', html);
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadHeader();
        await loadFooter();
    } catch (error) {
        console.error('Error loading components:', error);
    }
});