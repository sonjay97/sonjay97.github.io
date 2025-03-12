//header
class THeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <img class="logo" src="img/profilePic.png" />
                <nav>
                    <a href="#">Posts</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                </nav>
            </header>
        `;
    }
}
customElements.define("t-header", THeader);