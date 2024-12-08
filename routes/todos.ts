import { Router } from "express";
const router=Router();
let todos:Todo[]=[];
import {Todo} from '../models/todo';


router.get('/',(req,res,next)=>
{
res.status(200).json({todos:todos});
});

router.post('/todo',(req,res,next)=>
{
    const newTodo:Todo={
        id: new Date().toISOString(),
        text:  req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({message:'added todo', todo: newTodo, todos:todos});
});

router.put('/todo/:todoid',(req,res,next)=>
{
    const tid=req.params.todoid;
    const todoindex=todos.findIndex((todoItem)=>todoItem.id==tid);
    if(todoindex>=0)
    {
        todos[todoindex]={id:todos[todoindex].id, text: req.body.text};
        return res.status(200).json({message:'updated todo', todos:todos});
    }
    res.status(404).json({message:'could not find todo for this id'});
    
}); 

router.delete('/todo/:todoid',(req,res,next)=>
{
    todos=todos.filter((todoItem)=>todoItem.id!==req.params.todoid);
    res.status(200).json({message:'deleted todo',todos:todos});

} );
export default router;

