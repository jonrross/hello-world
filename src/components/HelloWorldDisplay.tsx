import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const HelloWorldDisplay = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-center"
    >
      <Card className="p-12 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <motion.h1 
          className="text-6xl font-bold text-purple-600 tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello World
        </motion.h1>
      </Card>
    </motion.div>
  );
};

export default HelloWorldDisplay;