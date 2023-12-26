import {
  motion,
  useTransform,
  useMotionValue,
  useAnimation,
} from "framer-motion";
import { useState } from "react";

interface FlashCardProps {
  front: String;
  back: String;
}

export default function FlashCard(props: FlashCardProps) {
  const [swipeState, setSwipeState] = useState<0 | 1 | 2>(0);
  const [swipedState, setSwipedState] = useState<0 | 1 | 2>(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-5, 5]);
  const opacityValue = useTransform(
    motionValue,
    [-200, -150, 0, 150, 200],
    [0.5, 1, 1, 1, 0.5]
  );

  const animate = useAnimation();

  return (
    <motion.div
      drag="x"
      //   dragConstraints={{ left: -1000, right: 1000 }}
      className={`bg-[#F3F3F4] rounded-xl w-full h-[45%] grid place-items-center text-black overflow-hidden  font-semibold shadow-lg ${
        swipeState == 1
          ? "border-2 border-[#1aec16]"
          : swipeState == 2
          ? "border-2  border-[#E03636]"
          : ""
      }`}
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      initial={{ rotateY: 0 }}
      animate={{
        rotateY: isFlipped ? 180 : 0,
        x: swipedState == 0 ? 0 : swipedState == 1 ? 1000 : -1000,
      }}
      transition={{ rotateY: { duration: 0.3 }, x: { duration: 0.5 } }}
      style={{ x: motionValue, opacity: opacityValue, rotate: rotateValue }}
      onDragEnd={() => {
        const position = motionValue.get();
        if (position <= 180 && position >= -180) {
          motionValue.set(0);
          setSwipedState(0);
        } else if (position < -180) {
          setSwipedState(2);
        } else if (position > 180) {
          setSwipedState(1);
        }
        console.log(swipedState);
      }}
      onDrag={() => {
        const position = motionValue.get();
        console.log(position);
        if (position < 0) {
          //swipe left
          setSwipeState(2);
        } else if (position > 0) {
          //swipe right
          setSwipeState(1);
        } else {
          //center swipe
          setSwipeState(0);
        }
      }}
    >
      {isFlipped ? (
        <motion.p style={{ rotateY: 180 }}>{props.back}</motion.p>
      ) : (
        <p>{props.front}</p>
      )}
    </motion.div>
  );
}
