import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  ngOnInit() {
    this.setupScrollButtons();
  }

  setupScrollButtons() {
    document.querySelectorAll('.more-btn[data-target]').forEach((btn) => {
      if (!btn.hasAttribute('tabindex')) {
        btn.setAttribute('tabindex', '0');
      }

      btn.addEventListener('click', (e) => {
        const target = (btn as HTMLElement).getAttribute('data-target');
        this.scrollToSectionById(target);
      });

      btn.addEventListener('keyup', (e: Event) => {
        const keyEvent = e as KeyboardEvent;
        if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
          keyEvent.preventDefault();
          const target = (btn as HTMLElement).getAttribute('data-target');
          this.scrollToSectionById(target);
        }
      });
    });
  }

  scrollToSectionById(id: string | null) {
    if (!id) return;
    const el = document.getElementById(id);
    console.log('scrollToSectionById called for:', id, 'found:', !!el);
    if (!el) return;

    const header = document.querySelector('.header');
    const headerOffset = header ? (header as HTMLElement).offsetHeight + 20 : 20;

    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(0, elementPosition - headerOffset);

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}
