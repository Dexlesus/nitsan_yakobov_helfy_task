import express from "express";
import tasks from "../data/tasks.js";

const router=express.Router();
let idNext=tasks.length+1
// didnt use async function cause we are implementing data from our file and not API or DB

router.get("/",(req,res)=>{
   try {
    return res.status(200).json(tasks);
   } catch (error) {
    res.status(500).json({
        message:error.message
    })
   }
})


// לבדוק אם זה ב try ו catch the validations
router.post("/",(req,res)=>{
    //validation
    const {title,description,priority}=req.body;
    if( !title || !description || !priority ) return res.status(400).json({
        message:"All fields required"
    })
    if(priority!=="low" ||priority!=="medium"||priority!=="high" ) return res.status(400).json({message:"invalid priority"});
    try {
        const newTask=
        {
            id:idNext++,
            title:title,
            description:description,
            completed:false,
            createdAt:new Date(),
            priority:priority
        }
        tasks.push(newTask);
        return res.status(201).json(newTask)
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})
router.put("/:id",(req,res)=>{
    //validations
    const id=Number(req.params.id);
    if(isNaN(id)) return res.status(400).json({message:"invalid id"});

    const {title,description,priority}=req.body;
    //validation
    if( !title || !description || !priority ) return res.status(400).json({
        message:"All fields required"
    })
    //validation
    if(priority!=="low" && priority!=="medium" && priority!=="high" ) return res.status(400).json({message:"invalid priority"});
    try {
        const taskIndex=tasks.findIndex(task=>task.id===id);

        //validation
        if(taskIndex===-1) return res.status(404).json({message:"taks not found"})

        tasks[taskIndex].title=title;
        tasks[taskIndex].description=description;
        tasks[taskIndex].priority=priority;
        return res.status(200).json(tasks[taskIndex]);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})
router.delete("/:id",(req,res)=>{
    //validations
    const id=Number(req.params.id);
    if(isNaN(id)) return res.status(400).json({message:"invalid id"});
    try {
        const taskIndex=tasks.findIndex(task=>id===task.id);
        //validation
        if(taskIndex===-1) return res.status(404).json({message:"Cant remove that task cause it doesnt exist"})
        tasks.splice(taskIndex,1);
    return res.status(200).json({message:"task DELETED"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.patch("/:id/toggle",(req,res)=>{
    //validation
    const id=Number(req.params.id);
    if(isNaN(id)) return res.status(400).json({message:"invalid id"});
    try {
        const task=tasks.find(task=>id===task.id);
        //validation
        if(!task) return res.status(404).json({message:"Cant remove that task cause it doesnt exist"})
        task.completed=!task.completed;
        return res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
export default router;