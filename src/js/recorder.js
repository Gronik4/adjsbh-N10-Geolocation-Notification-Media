let stream;
let recorder;

const startRecorder = async (flag) => {
  if (!navigator.mediaDevices) {
    alert('mediaDevices - NOT!!');
    return;
  }
  let place;
  if (flag === 'Audio') {
    place = document.getElementById('Audio');
    stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
  } else {
    place = document.getElementById('Video');
    stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
  }
  recorder = new MediaRecorder(stream);
  const chanks = [];
  recorder.addEventListener('start', () => {
    console.log('Старт записи!');
  });
  recorder.addEventListener('dataavailable', (e) => {
    console.log('data available');
    chanks.push(e.data);
  });
  recorder.addEventListener('stop', () => {
    console.log('Конец записи');
    const blob = new Blob(chanks);
    place.src = URL.createObjectURL(blob);
  });
  recorder.start();
};

const stopRecorder = async (e) => {
  if (recorder) { recorder.stop(); }
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
  }
};

export { startRecorder, stopRecorder };
