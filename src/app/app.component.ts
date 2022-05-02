import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PetFriends';

  ResponsiveSwitch(): void {
    var x = document.getElementById("header_");
    if (x !== null) {
      if (x.className === "header") {
        x.className = "responsive";
      } else {
        x.className = "header";
      }
    }
  }

  RemoveMenu(): void {
    var x = document.getElementById("header_");
    if (x !== null) {
      x.classList.remove("responsive");
      x.classList.add("header");
    }
  }
  
}
