import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.lastElementChild.draggable = true;
    this.element.lastElementChild.addEventListener('drag', this.resizeSidebar.bind(this))
    this.element.lastElementChild.addEventListener('drop', this.resizeSidebar.bind(this))
  }

  disconnect() {
    this.element.lastElementChild.removeEventListener('drag', this.resizeSidebar.bind(this))
    this.element.lastElementChild.removeEventListener('drop', this.resizeSidebar.bind(this))
  }

  resizeSidebar(event) {
    const rightX = event.clientX;
    const leftX = this.element.getBoundingClientRect().x;
    const sidebarWidth = rightX - leftX;

    event.preventDefault();
    event.dataTransfer.dropEffect = 'none';

    if (sidebarWidth > 50 && sidebarWidth < 700) {
      this.element.style.width = sidebarWidth + 'px';
    }
  }
}
