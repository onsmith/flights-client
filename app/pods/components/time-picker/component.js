import Component from '@ember/component';

const regex = /^\s*(\d\d?):(\d\d)\s*([ap]m)\s*$/i;

const MyComponent = Component.extend({
  classNames: ['form-inline'],

  hour:   '12',
  minute: '00',
  period: 'pm',

  didReceiveAttrs() {
    this._super(...arguments);
    if (this.time && regex.test(this.time)) {
      const matches = this.time.match(regex);
      this.set('hour',   matches[1]);
      this.set('minute', matches[2]);
      this.set('period', matches[3]);
    }
  },

  hours: Object.freeze([
    "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
  ]),

  minutes: Object.freeze([
    "00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
    "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
    "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
    "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
    "50", "51", "52", "53", "54", "55", "56", "57", "58", "59",
  ]),

  getTime() {
    return `${this.hour}:${this.minute} ${this.period}`;
  },

  actions: {
    hourWasUpdated(value) {
      this.set('hour', value);
      this.set('time', this.getTime());
    },
    minuteWasUpdated(value) {
      this.set('minute', value);
      this.set('time', this.getTime());
    },
    periodWasUpdated(value) {
      this.set('period', value);
      this.set('time', this.getTime());
    },
  },
});

MyComponent.reopenClass({
  positionalParams: ['time'],
});

export default MyComponent;