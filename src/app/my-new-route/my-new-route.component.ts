import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-new-route',
  templateUrl: './my-new-route.component.html',
  styleUrls: ['./my-new-route.component.css']
})
export class MyNewRouteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    console.debug(`Navigate`);
    this.router.navigate(['/']);
  }

}
