import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav',
  template: 
  `
  <header>
    <ul>
      <li>
        Home
      </li>

      <li>
        Compare
      </li>

      <li>
        Market
      </li>

      <li>
        Switch
      </li>
    </ul>
  </header>  
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
