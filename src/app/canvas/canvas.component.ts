import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CanvasComponent implements OnInit {
  public simpleList = [
    [
      { 'name': 'Obj11' },
      { 'name': 'Obj12' },
      { 'name': 'Obj13' },
    ],
    [
      { 'name': 'Obj21' },
      { 'name': 'Obj22' },
      { 'name': 'Obj23' },
    ],
    [
      { 'name': 'Obj31' },
      { 'name': 'Obj32' },
      { 'name': 'Obj33' },
    ],
    [
      { 'name': 'Obj41' },
      { 'name': 'Obj42' },
      { 'name': 'Obj43' },
    ],
    [
      { 'name': 'Obj51' },
      { 'name': 'Obj52' },
      { 'name': 'Obj53' },
    ],
    [
      { 'name': 'Obj61' },
      { 'name': 'Obj62' },
      { 'name': 'Obj63' },
    ],
    [
      { 'name': 'Obj71' },
      { 'name': 'Obj72' },
      { 'name': 'Obj73' },
    ]
  ];



  constructor() { }

  ngOnInit() {
  }

  public removeItem(item: any, list: any[]): void {
    list.splice(list.indexOf(item), 1);
    console.log(this.simpleList);
  }

}
