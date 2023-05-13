import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroList: string[] = ["SpiderMan","Hulk","She Hulk",
                              "Thor","Cap America",
                              "Super Man","Flash","Batman"];
  public oldHero?: string = "";
  
  deleteHeroListItem(): void{
    
    if(this.heroList.length > 0) this.oldHero = this.heroList.pop();
  }
}

