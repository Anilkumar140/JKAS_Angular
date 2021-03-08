import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
export const rowsAnimation =   trigger('rowsAnimation', [
  transition('void => *', [
    style({ 'height': '*', 'opacity': '0', 'transform': 'translateX(-550px)', 'box-shadow': 'none' }),
    sequence([
      animate('.35s ease', style({
        'height': '*',
        'opacity': '.2',
        'transform': 'translateX(0)',
        'box-shadow': 'none',
      })),
      animate('.35s ease', style({
        height: '*',
        opacity: 1,
        transform: 'translateX(0)',
      })),
    ]),
  ])
]);
@Component({
  selector: 'ngx-publicpage',
  templateUrl: './publicpage.component.html',
  styleUrls: ['./publicpage.component.scss'],
  animations: [rowsAnimation],
})

export class PublicpageComponent implements OnInit {
  posts: any;

  constructor() { }

  ngOnInit(): void {
  }
  addRow() {
    this.posts.push({id: 1});
    this.posts.push({thumb:"https://wanderingwheatleys.com/wp-content/uploads/2020/01/best-tours-kuala-lumpur-day-trips-malaysia-kuala-lumpur-city-tour-800x534.jpg"})
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}
}
