// import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

; (async () => {
  await chat('pizzachat', 'Tokoyami', "Rivalry in dark!")
  await chat('pizzachat', 'Midoriya', "Small might")
  await chat('pizzachat', 'Todoroki', "Do you have some heart problems")
  await chat('pizzachat', 'Uraraka', "class 1A class 1A")
  process.exit(0)
})()
  .catch(err => { console.log(err) })

async function chat(room: string, name: string, text: string) {
  const messageRef = admin.database().ref('/rooms').child(room).child('messages')
  await messageRef.push({ name, text })
  console.log(`${name}: ${text}`)
  await sleep(2000)
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}