import { Component, OnInit } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { NgLocalization } from '@angular/common';


@Component({
  selector: 'home',
  template: `

  <header>
    <img src="./../assets/chart.gif" id="logo" />
    <h1><a href= "index.html"> Skillsoft Weight Tracker</a></h1>
</header>
<nav>
    <ul>
        <li><a routerLink="/home"> home</a></li>
        <li><a routerLink="/register"> register</a></li>
        <li><a routerLink="/login"> login</a></li>
        <li><a routerLink="/directives"> directives</a></li>
    </ul>
</nav>


  <table>
  <thead>
      <th>Name</th>
      <th>Index </th>
  </thead>
  <tbody>
      <tr *ngFor="let team of Teams">
          <td>{{team.name}}</td>
          <td>{{team.id}}</td>
      </tr>
  </tbody>
</table>
<div id="container">
    <main>
        <h2> How to participate in the program</h2>
        <p>lorem ipsum and such</p>
    </main>
    <aside>
        <section>
            <h4>Health News</h4>
            <button type = "button"
  [appConfirm]="visitMe">
  Health News
  </button>
        </section>
        <section>
            <h4>Healthy Recipes</h4>
            <a href=" ">grilled chicken</a><br>
            <a href=" ">minced beef patties</a><br>
            <a href=" ">potato pancakes</a>
        </section>
    </aside>
  </div>

<footer>
    <hr />
    Copyright &copy; 2021. All rights reserveds
</footer>`
,
  styleUrls: ['./home.component.css']
}
)


export class HomeComponent implements OnInit {
  Teams = [
      {id: 1, name: 'Cubs'},
      {id: 2, name: 'Sox'}
    ]

  visitMe(){
    location.href= "https://hub.uhg.com";
  }
  constructor() { }

  ngOnInit(): void{   
  }

}
