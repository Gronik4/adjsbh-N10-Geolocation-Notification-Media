import CreateDate from './createDate';

export default class CreatMedia {
  constructor(flag) {
    this.fg = flag;
  }

  getBlock() {
    const div = document.createElement('div');
    div.className = `${this.fg} insert`;
    const time = document.createElement('p');
    time.className = 'time';
    const newT = CreateDate.getTime();
    time.textContent = `${newT}`;
    div.append(time);
    const media = document.createElement(`${this.fg}`);
    media.id = `${this.fg}`;
    media.controls = true;
    media.hidden = true;
    div.append(media);
    const userPoint = document.createElement('p');
    userPoint.className = `coord${this.fg}`;
    userPoint.classList.add('coord');
    div.append(userPoint);
    return div;
  }
}
