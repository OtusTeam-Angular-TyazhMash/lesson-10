import {Component, inject, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson-10';

  role: 'admin' | 'support' = "admin"
  isShown = true;
  images = [
    'https://i.pinimg.com/736x/e5/a0/69/e5a06942fa42823c88be5f3a834e063d--fantastic-art-bat-family.jpg',
    'https://vignette.wikia.nocookie.net/superman/images/b/bc/Superman-injusticegodsamongus.png/revision/latest/scale-to-width-down/185?cb=20130620230723',
    'https://imgc.allpostersimages.com/images/P-473-488-90/87/8788/ZXQT300Z/posters/justice-league-aquaman-swimming.jpg',

  ]
}
