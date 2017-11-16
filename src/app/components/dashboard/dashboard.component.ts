import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Hero} from "../../models/hero";

import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  heroes : Hero[] = [];

  getHeroes():void{
    this.heroService.getHeroes()
      .subscribe( heroes => this.heroes = heroes.slice(1,5) )
  }

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
