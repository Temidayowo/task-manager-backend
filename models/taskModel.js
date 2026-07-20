import mongoose from "mongoose";    

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [200, "Title must be at most 200 characters long"]
    },
    done: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model('Task', taskSchema);
export default Task;