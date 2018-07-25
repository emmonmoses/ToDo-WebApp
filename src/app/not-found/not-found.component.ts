import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private _router: Router) { }
  goHome(): void {
    this._router.navigate(['/mainpage']);
  }
  ngOnInit() {
  }

}
