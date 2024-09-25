import exp, { Router, Request, Response } from 'express'

const router: Router = exp.Router()


router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {

        res.json({
            err: false,
            message: 'all good',
            data: undefined
        })
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'error',
            data: null
        })
    }
})

// ?type=MINE|ELSE
router.post('/follow', async (req: Request, res: Response): Promise<void> => {
    try {

        res.json({
            err: false,
            message: 'all good',
            data: undefined
        })
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'error',
            data: null
        })
    }
})

router.get('/search', async (req: Request, res: Response): Promise<void> => {
    try {

        res.json({
            err: false,
            message: 'all good',
            data: undefined
        })
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'error',
            data: null
        })
    }
})

// ?type=MINE|ELSE
router.get('/profile', async (req: Request, res: Response): Promise<void> => {
    try {

        res.json({
            err: false,
            message: 'all good',
            data: undefined
        })
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'error',
            data: null
        })
    }
})

// ?type=MINE|ELSE
router.get('/followers', async (req: Request, res: Response): Promise<void> => {
    try {

        res.json({
            err: false,
            message: 'all good',
            data: undefined
        })
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'error',
            data: null
        })
    }
})

// ?type=MINE|ELSE
router.get('/following', async (req: Request, res: Response): Promise<void> => {
    try {

        res.json({
            err: false,
            message: 'all good',
            data: undefined
        })
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'error',
            data: null
        })
    }
})


export default router