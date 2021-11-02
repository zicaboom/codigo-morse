import morse from '../utils/ASCII-MORSE.json'

class ConvertService{
    execute(text) {
        let code = []

        text = text.toLowerCase()
        
        for (let i in text){
            code[i] = morse[text[i]] ? morse[text[i]] : '?'
        }
        
        code = code.join(' ')
        
        return code
    }
}

export { ConvertService }