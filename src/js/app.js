import CreateText from './createText';
import { startRecorder, stopRecorder } from './recorder';
import getCoords from './getCoords';
import CreatMedia from './createMedia';
import Popup from './popuver';

export default class App {
  constructor() {
    this.note = document.getElementById('note');
    this.record = document.getElementById('record');
    this.textarr = document.getElementById('ta');
    this.butfon = document.getElementById('btf');
    this.butvid = document.getElementById('btv');
    this.blokText = document.getElementById('tt');
    this.blokAudio = document.getElementById('ma');
    this.blokVideo = document.getElementById('vo');
    this.outT = document.getElementById('outT');
    this.deleteMedia = document.getElementById('btcr');
    this.writeMedia = document.getElementById('bttk');
    this.writeN = document.getElementById('writN');

    this.textarr.addEventListener('keydown', this.hendlerTextarr.bind(this));
    this.textarr.addEventListener('click', this.hiddNote.bind(this));
    this.textarr.addEventListener('blur', this.showNote.bind(this));
    this.butfon.addEventListener('click', this.hendlerAudio.bind(this));
    this.butvid.addEventListener('click', this.hedlerVideo.bind(this));
    this.writeN.addEventListener('click', this.hendlerWriteN.bind(this));
  }

  showNote() {
    this.note.style.width = '151px';
  }

  hiddNote() {
    this.note.style.width = '0px';
    this.writeN.hidden = false;
  }

  showRecord() {
    this.record.style.width = '151px';
    this.outT.removeAttribute('hidden');
  }

  hiddRecord() {
    this.record.style.width = '0px';
    this.outT.setAttribute('hidden', 'hidden');
  }

  hendlerWriteN() {
    if (this.textarr.value === '') {
      alert('Нельзя отправить пустое место. Наберите пожалуйста Ваше сообщение.');
      this.textarr.value = '';
      this.textarr.blur();
      this.writeN.hidden = true;
      return;
    }
    const note = new CreateText(this.textarr.value).getBlock();
    this.blokText.prepend(note);
    getCoords('coordText');
    this.textarr.value = '';
    this.textarr.blur();
    this.writeN.hidden = true;
  }

  hendlerTextarr(e) {
    if (e.code === 'NumpadEnter') {
      this.hendlerWriteN(e);
    }
  }

  hendlerAudio() {
    this.hiddNote();
    this.writeN.hidden = true;
    this.showRecord();
    const warning = new Popup('media').showP();
    document.querySelector('.container').append(warning);
    const audio = new CreatMedia('Audio').getBlock();
    this.blokAudio.prepend(audio);
    getCoords('coordAudio');

    this.writeMedia.addEventListener('click', () => {
      warning.remove();
      document.getElementById('Audio').removeAttribute('hidden');
      stopRecorder();
      this.hiddRecord();
      this.showNote();
    });

    this.deleteMedia.addEventListener('click', async () => {
      await stopRecorder();
      if (document.querySelector('.popup')) { document.querySelector('.popup').remove(); }
      document.querySelector('.Audio').remove();
      this.hiddRecord();
      this.showNote();
    });
  }

  hedlerVideo() {
    this.hiddNote();
    this.writeN.hidden = true;
    this.showRecord();
    const warning = new Popup('media').showP();
    document.querySelector('.container').append(warning);
    const video = new CreatMedia('Video').getBlock();
    this.blokVideo.prepend(video);
    getCoords('coordVideo');

    this.writeMedia.addEventListener('click', () => {
      warning.remove();
      document.getElementById('Video').removeAttribute('hidden');
      stopRecorder();
      this.hiddRecord();
      this.showNote();
    });

    this.deleteMedia.addEventListener('click', async () => {
      await stopRecorder();
      if (document.querySelector('.popup')) { document.querySelector('.popup').remove(); }
      document.querySelector('.Video').remove();
      this.hiddRecord();
      this.showNote();
    });
  }
}
