import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar?.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbar);
      bsCollapse?.hide();
    }
  }

  closeNavbarOnClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.closest('.navbar-collapse')?.classList.contains('show')) {
      const navbar = document.querySelector('.navbar-collapse');
      const bsCollapse = bootstrap.Collapse.getInstance(navbar);
      bsCollapse?.hide();
    }
  }

}
