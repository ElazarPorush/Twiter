import exp, { Router, Request, Response } from 'express'

const router: Router = exp.Router()

router.post('/login', async (req: Request, res: Response): Promise<void> => {
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

router.post('/logout', async (req: Request, res: Response): Promise<void> => {
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