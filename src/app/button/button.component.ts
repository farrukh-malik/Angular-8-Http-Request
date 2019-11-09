import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clickForButtonCall(event) {
    this.onClick.emit(event);
  }

}
