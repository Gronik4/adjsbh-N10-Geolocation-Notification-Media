import CreateDate from './createDate';

export default class CreateText {
  constructor(text) {
    this.tx = text;
  }

  getBlock() {
    const div = document.createElement('div');
    div.className = 'text insert';
    const time = document.createElement('p');
    time.className = 'time';
    const newT = CreateDate.getTime();
    time.textContent = `${newT}`;
    div.append(time);
    const text = document.createElement('p');
    text.className = 'txt';
    text.textContent = this.tx;
    div.append(text);
    const userPoint = document.createElement('p');
    userPoint.className = 'coordText';
    userPoint.classList.add('coord');
    div.append(userPoint);
    return div;
  }
}
