import letters from '../utils/MORSE-ASCII.json'

class TranslateService{
    execute(code) {
        let text = []
        
        code = code.split(' ')

        for (let i in code){       
            text[i] = letters[code[i]] ? letters[code[i]] : '?'
        }

        text = text.join('')

        return text
    }
}

export { TranslateService }