import { WHITE_FONTS_COLORS, ALL_COLORS } from './../models/color-info';
import { Component, Input, OnInit } from '@angular/core';
import { ColorInfo, DEFAULT_COLORS } from '../models/color-info';

@Component({
  selector: 'qtc-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  @Input() colorList: string[] = ALL_COLORS;

  public isHovered: boolean[] = [];
  public colors: ColorInfo = DEFAULT_COLORS;

  constructor() {}

  ngOnInit(): void {
    this.colorList.forEach((_, index) => {
      this.isHovered[index] = false;
    });
  }

  getFontColor(colorName: string): string {
    if (WHITE_FONTS_COLORS.includes(colorName)) {
      return this.colors['white'];
    } else {
      return this.colors['black'];
    }
  }
}
