import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
     mongoose.set('strictQuery', true);

     if(connected) {
        console.log('Mongodb already connected');
        return;
     }

     try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log('MongoDB Connected...');
     } catch (error) {
        console.error(error);
     }

}

export default connectDB;

