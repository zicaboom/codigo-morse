import { TranslateService } from "../services/TranslateService.js";

class TranslateController{
    handle(req, res){
        const { code } = req.params

        const translateService = new TranslateService

        const text = translateService.execute(code)

        return res.json(text)
    }
}

export{TranslateController}