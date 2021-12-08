import { motion } from 'framer-motion';
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "tween", duration: 2.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };


const NextPageButton = () => {

    return ( 
            <div className='nav-button'
            >
                <motion.svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  initial="hidden"
                  animate="visible"
                >
                    <motion.path
                      d="M63.2439 1.75L32.5 55L1.7561 1.75L63.2439 1.75Z"
                      stroke="#00FF00"
                      strokeWidth="1"
                      fill="transparent"
                      className="nav-button__triangle--green"
                      // transform={buttonHover ? "translate(24,36)" : "translate(17.5,30)"}
                      variants={draw}
                      custom={3}
                    />
                    <motion.path
                      d="M63.2439 1.75L32.5 55L1.7561 1.75L63.2439 1.75Z"
                      stroke="#0000FF"
                      strokeWidth="1"
                      fill="transparent"
                      className="nav-button__triangle--blue"
                      // transform={buttonHover ? "translate(22,34)" : "translate(17.5,30)"}
                      variants={draw}
                      custom={3}
                    />
                    <motion.path
                      d="M63.2439 1.75L32.5 55L1.7561 1.75L63.2439 1.75Z"
                      stroke="#FF0000"
                      strokeWidth="1"
                      fill="transparent"
                      className="nav-button__triangle--red"
                      // transform={buttonHover ? "translate(20,32)" : "translate(17.5,30)"}
                      variants={draw}
                      custom={3}
                    />
                    <motion.circle
                      cx="50" 
                      cy="50"
                      r="48" 
                      stroke="white" 
                      strokeWidth="1" 
                      fill="transparent"
                      variants={draw}
                      custom={6}
                    />    
                </motion.svg>
            </div>
     );
}
 
export default NextPageButton;