import { FaNodeJs, FaPhp, FaJava, FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine, RiJavascriptLine } from "react-icons/ri";
import { SiDotnet, SiMongodb, SiExpress, SiJquery, SiBootstrap, SiMaterialformkdocs, SiFirebase} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2
             whileInView={{ opacity: 1, y:0 }}
             initial={{opacity: 0, y: -100}}
             transition={{duration: 1.5}}
             className="my-20 text-center text-4xl font-bold">Technologies</motion.h2>
            <motion.div
             whileInView={{ opacity: 1, x:0 }}
             initial={{opacity: 0, x: -100}}
             transition={{duration: 1.5}}
             className="flex flex-wrap items-center justify-center gap-10">
                
                {/* Languages */}
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(3)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <RiJavascriptLine className="text-7xl text-yellow-400" />
                    <strong className="text-yellow-400">JavaScript</strong>
                </motion.div>
                <motion.div 
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(4)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <FaPhp className="text-7xl text-indigo-600" />
                    <strong className="text-indigo-600">PHP</strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(5)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <FaJava className="text-7xl text-red-600" />
                    <strong className="text-red-600">Java</strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(4)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <TbBrandCSharp className="text-7xl text-purple-700" />
                    <strong className="text-purple-700">C#</strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(3)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <FaPython className="text-7xl text-blue-500" />
                    <strong className="text-blue-500">Python</strong>
                </motion.div>

                {/* Frameworks & Libraries */}
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(5)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                    <strong className="text-cyan-400">React.js</strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(3)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <FaNodeJs className="text-7xl text-green-500" />
                    <strong className="text-green-500">Node.js</strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(4)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <SiExpress className="text-7xl text-gray-500" />
                    <strong className="text-gray-500">Express.js</strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(5)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <SiJquery className="text-7xl text-blue-500" />
                    <strong className="text-blue-500">jQuery</strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(4)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <SiDotnet className="text-7xl text-gray-300" />
                    <strong className="text-gray-300">.NET</strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(3)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <SiBootstrap className="text-7xl text-purple-500" />
                    <strong className="text-purple-500">Bootstrap</strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(5)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <SiMaterialformkdocs className="text-7xl text-blue-400" />
                    <strong className="text-blue-400">Material-UI</strong>
                </motion.div>

                {/* Database Technologies */}
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(3)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <GrMysql className="text-7xl text-cyan-400" />
                    <strong className="text-cyan-400">My<span className="text-amber-300">SQL</span></strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(4)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <SiMongodb className="text-7xl text-green-600" />
                    <strong className="text-green-600">MongoDB</strong>
                </motion.div>
                <motion.div
                 initial="initial"
                 animate="animate"
                 variants={iconVariants(5)}
                 className="text-center transition-transform duration-50 hover:scale-110">
                    <SiFirebase className="text-7xl text-orange-500" />
                    <strong className="text-orange-500">Firebase</strong>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Technologies;
