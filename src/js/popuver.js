export default class Popup {
  constructor(flag) {
    this.fg = flag;
  }

  showP() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    const header = document.createElement('h4');
    header.className = 'popup_h4';
    popup.append(header);
    const p = document.createElement('p');
    let txtAr;
    let button;
    switch (this.fg) {
      case 'text':
        header.textContent = `Поскольку Вы отказались предоставить данные геолокации, пожалуйста, введите в поле ниже.
        Широта и долгота через запятую. При попытке отправить пустое поле, будут введены следующие данные:
        широта: 52.5213256511, долгота: 41,26515421316`;
        popup.append(header);
        txtAr = document.createElement('textarea');
        txtAr.className = 'txtAr';
        popup.append(txtAr);
        button = document.createElement('button');
        button.className = 'butP';
        button.textContent = 'Отправить';
        p.append(button);
        break;
      case 'media':
        header.textContent = 'ВНИМАНИЕ!!!';
        popup.append(header);
        p.textContent = 'Идет запись!!!';
        break;
      default: break;
    }
    popup.append(p);
    return popup;
  }
}
