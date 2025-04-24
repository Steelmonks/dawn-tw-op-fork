class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content =
      this.mainDetailsToggle.querySelector('summary').nextElementSibling;

    this.mainDetailsToggle.addEventListener(
      'focusout',
      this.onFocusOut.bind(this),
    );
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));

    // Add overlay click handler
    const overlay = this.content.querySelector('.mega-menu__overlay');
    if (overlay) {
      overlay.addEventListener('click', () => {
        this.close();
      });
    }
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle
      .querySelector('summary')
      .setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('.header-wrapper');

    // Handle nested dropdowns
    this.nestedDetails = this.querySelectorAll('details-disclosure');
    this.nestedDetails.forEach((nestedDetail) => {
      const details = nestedDetail.querySelector('details');
      const summary = details.querySelector('summary');

      // Add click event to prevent navigation when clicking on summary
      summary.addEventListener('click', (event) => {
        if (summary.tagName === 'SUMMARY') {
          event.preventDefault();
          details.hasAttribute('open')
            ? details.removeAttribute('open')
            : details.setAttribute('open', '');
        }
      });

      // Add overlay click handler for nested dropdowns
      const overlay = nestedDetail.querySelector('.mega-menu__overlay');
      if (overlay) {
        overlay.addEventListener('click', () => {
          nestedDetail.close();
        });
      }
    });
  }

  onToggle() {
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;

    if (
      document.documentElement.style.getPropertyValue(
        '--header-bottom-position-desktop',
      ) !== ''
    )
      return;
    document.documentElement.style.setProperty(
      '--header-bottom-position-desktop',
      `${Math.floor(this.header.getBoundingClientRect().bottom)}px`,
    );
  }
}

customElements.define('header-menu', HeaderMenu);
