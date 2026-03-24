import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,15%,8%)] via-[hsl(210,12%,10%)] to-[hsl(220,15%,8%)]" />

      {/* Green glow - top right */}
      <motion.div
        className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(170 48% 33% / 0.12) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Green glow - bottom left */}
      <motion.div
        className="absolute -bottom-[15%] -left-[10%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(170 48% 33% / 0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle center glow */}
      <motion.div
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, hsl(170 48% 33% / 0.05) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.05, 0.97, 1],
          opacity: [0.6, 1, 0.7, 0.6],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating node particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + i * 1.5,
            height: 3 + i * 1.5,
            background: `hsl(170 48% 33% / ${0.15 + i * 0.05})`,
            top: `${15 + i * 16}%`,
            left: `${10 + i * 18}%`,
          }}
          animate={{
            y: [0, -30 - i * 10, 20, 0],
            x: [0, 15 + i * 5, -10, 0],
            opacity: [0.3, 0.7, 0.4, 0.3],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(170 48% 33% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(170 48% 33% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
