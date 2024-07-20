import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  // Inputs
  @Input() color: string = '';
  @Input() text: string = '';

  // Outputs
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
