// dom select 
const button = document.querySelector('button')
const textarea = document.querySelector('textarea')
const select = document.querySelector('select')

// create voice 
let speech = new SpeechSynthesisUtterance()


// different voices 
let voices = [];

window.speechSynthesis.onvoiceschanged = () => { 
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0]

    voices.forEach((voice, i) => {
        select.options[i] = new Option(
            voice.name, i
        )
    })
}

// change voice  
select.addEventListener('change', () => {
    speech.voice = voices[select.value]
})

// speech by the button 
button.addEventListener('click', () => {
    const value = textarea.value;
    speech.text = value;

    window.speechSynthesis.speak(speech)
})




