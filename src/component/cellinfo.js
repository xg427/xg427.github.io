import { h } from './element';
import { cssPrefix } from '../config';
/**
 * add by xg427
 */
export default class CellInfo {
  constructor(sheet) {
    this.el = h('div', `${cssPrefix}-cellinfo`); // .html(`<strong>aaaaaaaa</strong>: bbbbbbbb`);

    this.cellname = h('div', `${cssPrefix}-cellinfo-cellname`);
    this.celltext = h('div', `${cssPrefix}-cellinfo-celltext`);
    this.el.children(this.cellname, this.buildDivider(), this.celltext);


    sheet.on('cell-selected', (cell, ri, ci) => {
      this.cellname.html(`${this.getCellName(ri, ci)}`);
      if (cell) {
        this.celltext.html(`${cell.text}`);
      } else {
        this.celltext.html('&nbsp;');
      }

      console.log('CellInfo cell:', cell, ', ri:', ri, ', ci:', ci);
      console.log('sheet:', sheet);
    });
  }

  // console.log(getCellName(1, 1)); // Output: A1
  getCellName(row, col) {
    // Add 1 to column and row numbers
    const colValue = col + 1;
    const rowValue = row + 1;
    // Convert column number to letter
    let letter = '';
    let colIndex = colValue;
    while (colIndex > 0) {
      const remainder = (colIndex - 1) % 26;
      letter = String.fromCharCode(65 + remainder) + letter;
      colIndex = Math.floor((colIndex - remainder) / 26);
    }
    // Combine letter and row number to form cell name
    return letter + rowValue.toString();
  }

  buildDivider() {
    return h('div', `${cssPrefix}-cellinfo-divider`);
  }
}
