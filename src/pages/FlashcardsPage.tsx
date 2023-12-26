import FlashCard from "../components/Flashcard";
import { Close, Check, Undo, ArrowForward } from "@mui/icons-material";
export default function FlashcardsPage() {
  return (
    <div className="absolute top-0 w-full h-full bg-[#91A3B08C] p-5 ">
      <div className="flex items-center justify-center font-bold">
        THIS IS GENERIC
      </div>
      <div className="h-[90%] flex flex-col items-center justify-center">
        <FlashCard
          front={"this is the front"}
          back={"this is the back"}
        ></FlashCard>
        <div className="w-full flex justify-between items-center px-10 py-10">
          <div className="w-[60px] h-[60px] border-2 text-sm rounded-full grid place-items-center text-white  bg-[#E0363633] hover:border-[#E03636]">
            <Close style={{ fontSize: "40px" }} />
          </div>

          <div className="w-[60px] h-[60px] border-2  rounded-full grid place-items-center text-white  bg-[#1AEC1624] hover:border-[#1AEC16]">
            <Check style={{ fontSize: "40px" }} />
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-5">
          <Undo style={{ fontSize: "40px" }} />
          <ArrowForward style={{ fontSize: "40px" }} />
        </div>
      </div>
    </div>
  );
}
