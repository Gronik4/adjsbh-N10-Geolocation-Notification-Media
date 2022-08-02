export default class CreateDate {
  static getTime() {
    const nd = new Date();
    const year = nd.getFullYear().toString().slice(2);
    const manth = nd.getMonth() < 10 ? `0${(nd.getMonth() + 1)}` : nd.getMonth() + 1;
    const member = nd.getDate() < 10 ? `0${nd.getDate()}` : nd.getDate();
    const hours = nd.getHours() < 10 ? `0${nd.getDate()}` : nd.getHours();
    const minut = nd.getMinutes() < 10 ? `0${nd.getDate()}` : nd.getMinutes();
    const timeStamp = `${member}.${manth}.${year} ${hours}:${minut}`;
    return timeStamp;
  }
}
