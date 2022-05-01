import { Component, Input, OnInit } from '@angular/core';
import { ColorInfo, DEFAULT_COLORS } from '../models/color-info';

@Component({
  selector: 'qtc-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  @Input() colorList: ColorInfo[] = DEFAULT_COLORS;

  constructor() {}

  ngOnInit(): void {}
}
