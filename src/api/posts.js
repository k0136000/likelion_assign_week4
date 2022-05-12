import { Router } from "express";
const router = Router();

router.get("/",(req,res)=>{
  res.send("get");
});


let nextId = 2; 
let texts = [ 
  { 
    id: 1,
    title: 'Avengers',
  },
  {
    id: 2,
    title: 'Harry poter'
  }
];

router.get("/text", (req, res) => {
    res.json(texts);
  });  
  
router.get('/text', (req, res) => {  
    const index = texts.findIndex(text => text.id === req.body.id);
    if (index === -1) { 
      return res.json({
        error: "Writing does not exist",
      });
    }
    res.json(texts.filter(text => text.id === req.body.id)[0]);
  });
  
router.post('/', (req, res) => { 
    texts.push({
      id: nextId++, 
      title: req.body.title,
    });
    res.json(texts);
  });
  
router.put('/texts', (req, res) => {
    const index = texts.findIndex(text => text.id === req.body.id);
    if (index === -1) { 
      return res.json({
        error: "Writing does not exist",
      });
    }
  
    texts[index] = {
      id: req.body.id,
      title: req.body.title,
    };
    res.json(texts);
  });
  
router.delete('/texts', (req, res) => {
    texts = texts.filter(text => text.id !== req.body.id);
    res.json(texts);
  });

export default router;
