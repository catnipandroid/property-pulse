import connectDB from '../../../config/database';
import Property from '../../../models/Property';

export const GET = async(req) => {
    try {
      await connectDB();
    
      const properties = await Property.find(); 
      
      return new Response(JSON.stringify(properties), {
        status: 200,
      });
    } catch (error) {
       console.error(error);
       return new Response('Something went wrong', {status: 500});
    }
}
