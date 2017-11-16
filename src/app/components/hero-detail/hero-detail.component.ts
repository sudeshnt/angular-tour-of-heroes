import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import {Hero} from '../../models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute, // holds information about the route to this instance of the HeroDetailComponent
    private heroService: HeroService,
    private location: Location // interacting with the browser. You'll use it later to navigate back
  ) { }

  getHeroById(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //route.snapshot is a static image of the route information.
                                                        //paramMap is a dictionary of route parameter values extracted from the URL.
                                                        //The JavaScript (+) operator converts the string to a number.
    this.heroService.getHeroById(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getHeroById();
  }

}
