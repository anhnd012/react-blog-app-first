const User = require('../models/user')
const bcrypt = require('bcryptjs')
exports.register = async (req, res) => {
    const { password } = req.body;
    const encryptPassword = await bcrypt.hash(password, 10);
    const user = await User.create({...req.body, password: encryptPassword});
    if(!user){
        res.status(404).json({
            success: false,
        });
    }
    res.status(200).json({
        success: true,
        user
    });
}

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if(!user){
        res.status(404).json({
            success: false,
            message: " Cannot find user by username"
        })
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword){
        res.status(404).json({
            success: false,
            message: " Password is not correct"
        })
    }
    res.status(200).json({
        success: true,
        user
    });
}

// exports.deleteUser = async(req, res) => {
//     const { username } = req.body;
//     const user = await User.findOne({ username: username });
//     if(!user){
//         res.status(404).json({
//             success: false,
//             message: " Cannot find user"
//         })
//     }
//     await user.remove()
//     res.status(200).json({
//         success: true,
//     });
// }

// Update a user
exports.updateUser = async(req, res) => {
        const user = await User.findById(req.params.id);
        if(!user){
            res.status(404).json({
                success: false,
                message: "Cannot find any user to update"
            })
        }
        const { password } = req.body;
        const encryptPassword = await bcrypt.hash(password, 10);
        const updateUser = await User.findByIdAndUpdate(req.params.id, {...req.body, password: encryptPassword}, {
            new: true
        })

        if(!updateUser){
            res.status(404).json({
                success: false,
                message: "Cannot update user"
            })
        }

        res.status(200).json({ success: true, updateUser })
}

// Delete a user
exports.deleteUser = async (req, res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(404).json({
            success: false,
            message: "Cannot find any user to delete"
        })
    }

    await user.remove();
    res.status(200).json({ success: true })
}

// Get user by id
exports.getUserById = async(req, res)=> {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404).json({success: false, message: "Cannot find user" })
    }
    res.status(200).json({ success: true, user})
}