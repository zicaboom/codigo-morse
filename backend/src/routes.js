import { Router, json } from "express";
import { ConvertController } from './controllers/ConvertController.js'
import { TranslateController } from './controllers/TranslateController.js'

const router = Router()

router.use(json())

const convertController = new ConvertController
const translateController = new TranslateController

router.get('/translate/:code', translateController.handle)
router.get('/convert/:text', convertController.handle)

export { router }

