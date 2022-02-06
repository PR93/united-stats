require('./db/mongoose');
const User = require('./db/models/user')

const app = require('express')();
const PORT = 8081;

app.listen(PORT, () => console.log('OK http://localhost:' + PORT));

const createUser = async (data) => {
    try {
        const user = new User(data);

        await user.save();

        console.log(user);
    }
    catch (error)
    {
        console.log(error);
    }
};



const findUser = async () => {
    try {
        const users = await User.find();
        console.log(users);

    } catch (error){
        console.log(error);
    }
}

// createUser({
//     name: 'Paul',
//     age: 29
// });


app.get('/users', async function (req, res)  {
    const users = await User.find();
    
    res.status(200).json(
        users
    )
})
