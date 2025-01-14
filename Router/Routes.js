import{ Router } from 'express';

const router = new Router();

router.get('/',(req,res)=>{
    res.send("working")
})


export default router