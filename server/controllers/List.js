const User = require('../models/user')
const List = require('../models/list')

const addTaskController = async (req , res) => {
   try {
    const {title , body , id} = req.body;
    const existingUser = await User.findById(id);
    if(existingUser){
        const list = new List({title, body  , user:existingUser});
        await list.save().then(() => res.status(200).json({list}));
        existingUser.list.push(list);
        existingUser.save();
    }
   } catch (error) {
        console.log(error);

   }
}

const updateTaskController = async (req , res) => {
    try {
        const {title , body , email } = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            const list = await List.findByIdAndUpdate(req.params.id , {title , body});
            list.save().then(() => res.status(200).json({message:"Task Updated"}));

        }
    } catch (error) {
        console.log(error);
        res.status(400).json('error');
    }
}

const deleteTaskController = async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await User.findOneAndUpdate({ email} , {$pull : {list :req.params.id}});
        
        if (existingUser) {
            const list = await List.findByIdAndDelete(req.params.id);
            
            if (list) {
                res.status(200).json({ message: "Task Deleted" });
            } else {
                res.status(404).json({ message: "List Not Found" });
            }
        } else {
            res.status(400).json({ message: "User Not Found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

    const getTaskController = async (req , res) => {
        try {
            const list = await  List.find({user: req.params.id});
            if(list.length !== 0){

                res.status(200).json({list: list});   
            }
            else{
                res.status(200).json({message : 'No tasks added'});  
            }
        } catch (error) {
            console.log(error)
        }


        

    }



module.exports = {addTaskController , updateTaskController , deleteTaskController , getTaskController}