import { motion } from 'framer-motion';

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}       
      animate={{ opacity: 1 }}       
      exit={{ opacity: 0 }}          
      transition={{ duration: 0.5 }}  
      className="bg-blue-500 text-white p-4 rounded"
    >
      Hello, I am animated!
    </motion.div>
  );
};

export default AnimatedComponent;