import { ConvertService } from "../services/ConvertService.js";

class ConvertController{
    handle(req, res){
        const { text } = req.params

        const convertService = new ConvertService

        const code = convertService.execute(text)

        return res.json(code)
    }
}

export{ConvertController}