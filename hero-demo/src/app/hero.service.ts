import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(
    private messageService: MessageService,
  ) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('HeroService: Hero has fetched');
    return of(HEROES);
  }

  selectHeroes(hero: Hero) {
    this.messageService.addMessage(hero.name + 'has selected');
  }
}