import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



//-------------------------------- BOUTON REVENIR EN HAUT DE LA PAGE -------------------------------//
const myButton = document.getElementById("btn-back-to-top");

if (!myButton) {
  throw new Error("Le bouton btn-back-to-top est introuvable");
}

const button = myButton as HTMLElement;

// Scroll
window.addEventListener("scroll", (): void => {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// Click
button.addEventListener("click", (): void => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
//-------------------------------- FIN BOUTON REVENIR EN HAUT DE LA PAGE -------------------------------//  