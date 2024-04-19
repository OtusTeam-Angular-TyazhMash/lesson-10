import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-example',
  templateUrl: './dynamic-example.component.html',
  styleUrls: ['./dynamic-example.component.css']
})
export class DynamicExampleComponent {


  public getSomeDate() {
    return 'Data'
  }
}
