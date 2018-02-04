import {
  Component, OnInit, AfterViewInit, ViewChild, Renderer2, AfterContentInit, ViewContainerRef,
  ComponentFactoryResolver, ContentChild
} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ProjectedChildComponent } from '../projected-child/projected-child.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit, AfterViewInit, AfterContentInit {
  heroes: Hero[];
  @ViewChild('heroLabel') viewChild1;
  @ViewChild('heroName') heroInput;

  // Allows us to create components
  @ContentChild(ProjectedChildComponent) contentChild;

  constructor(private heroService: HeroService,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();

    if (!name) { return; }

    this.heroService.addHero( {name} as Hero)
      .subscribe(hero => {this.heroes.push(hero);
      }
    );
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.viewChild1.nativeElement,
      'color',
      'red'
    );

    /* invokeElement has been removed in Renderer2.
    this.renderer.invokeElement(this.heroInput.nativeElement,
      'focus'
    );
    */
  }

  // Called after directive content has been fully initialized
  ngAfterContentInit() {

  }

}
