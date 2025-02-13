const loveNotes = [
    'Everyday with you is my favourite kind of adventure Happy Valentines, my love',
    'Loving you is the easiest and most beautiful thing i have ever done',
    'You are my hearts favourite place to be. Happy Valentines day, my love',
    'Every moment with you is a gift i will never take for granted',
    'You make my world brighter, my heart fuller, and my life better.',
    'If i had to choose between the sun, the moon, or the stars, i would choose your eyes as they shine brighter than them all',
    'Every love story is beautiful, but ours is my favourite.',
    'if i had to choose between breathing and loving you. i would use my last breath to tell you i love you.',
    'You stole my heart, and i never want it back',
    'You are my favourite notification, my best distraction, and my sweetest addiction.',
    'Roses are red, violets are blue, my life is amazing, because i have you',
    'You are the finest, loveliest, tenderest and most beautiful person i have ever known and even that is an understatement',
    'To the world, you may be one person, but to me, you are the world.'

]

const showNoteBtn = document.querySelector('#messages')

let getNote = document.getElementById('messages')

getNote.onclick = generateMessage

let noteSpace = document.getElementById('note-space')

function generateMessage(){
    const randomIndex = Math.floor(Math.random()*
    loveNotes.length
);
 noteSpace.innerHTML = loveNotes[randomIndex];
 showNoteBtn.textContent = 'Keep clicking'
}
