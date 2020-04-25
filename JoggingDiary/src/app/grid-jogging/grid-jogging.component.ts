import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-jogging',
  templateUrl: './grid-jogging.component.html',
  styleUrls: ['./grid-jogging.component.css']
})
export class GridJoggingComponent implements OnInit {

  @Input() joggingData: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
