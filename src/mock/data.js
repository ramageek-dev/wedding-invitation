import firebase from '../mock/firebase'

const wishes = []
firebase.database.ref('wish').once('value')
.then((data) => {
  const obj = data.val()

  for (let key in obj) {
    wishes.push(obj[key].value)
  }
})

export default {
  code:
`
// Hi, what's up?
// I will write code ` + 'for ' + `you
// Starting now!
const { 😆, 🤗 } = 🌎;
😆.say('Marry me! ❤️');
🤗.response("Ok，let's starting journey together!");
Utils.marry(😆,🤗);
Utils.generateInvitation(😆,🤗);
// It's done.
// Let's running.`,
  executions: [{
    name:'Initialize',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'Decompression',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'In assembly',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'Packed',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'Smile 🙂',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'Big smile 😄',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'Compiling...',
    time: '',
    visible: false
  }],
  barrages: wishes,
}