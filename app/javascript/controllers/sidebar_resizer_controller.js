import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.lastElementChild.draggable = true;
    window.addEventListener('dragover', this.resizeSidebar.bind(this))
    this.element.lastElementChild.addEventListener('drop', this.resizeSidebar.bind(this))
  }

  disconnect() {
    window.removeEventListener('dragover', this.resizeSidebar.bind(this))
    this.element.lastElementChild.removeEventListener('drop', this.resizeSidebar.bind(this))
  }

  resizeSidebar(event) {
    const rightX = event.clientX;
    const leftX = this.element.getBoundingClientRect().x;
    const sidebarWidth = rightX - leftX;

    event.preventDefault();
    event.dataTransfer.dropEffect = 'none';

    if (sidebarWidth > 52 && sidebarWidth < 600) {
      this.element.style.width = sidebarWidth + 'px';
    }
  }
}
