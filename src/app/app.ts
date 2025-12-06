import { Component, signal } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterOutlet } from '@angular/router';
=======
import { RouterOutlet, RouterLink } from '@angular/router';
>>>>>>> fafe7210fe9821e30e21d1325044275a240374f8

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('prelim-project-group-1');
}
