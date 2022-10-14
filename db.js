const mongoose = require('mongoose');

module.exports = () => {
    // const connectionParams = {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // };
    try {
        mongoose.connect(process.env.DB)
        console.log('Connected to Database...!');
    } catch (error) {
        console.log(error);
        console.log(`Couldn't connected to Database...!`);
    }
}