import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.draggable = true;
    this.element.addEventListener('drag', this.resizeSidebar.bind(this))
    this.element.addEventListener('drop', this.resizeSidebar.bind(this))
  }

  disconnect() {
    this.element.removeEventListener('drag', this.resizeSidebar.bind(this))
    this.element.removeEventListener('drop', this.resizeSidebar.bind(this))
  }

  resizeSidebar(event) {
    const sidebar = this.element.previousElementSibling;
    const rightX = event.clientX;
    const leftX = sidebar.getBoundingClientRect().x;
    const sidebarWidth = rightX - leftX;

    event.preventDefault();
    event.dataTransfer.dropEffect = 'none';

    if (sidebarWidth > 50 && sidebarWidth < 700) {
      sidebar.style.width = sidebarWidth + 'px';
    }
  }
}
