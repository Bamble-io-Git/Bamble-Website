import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const RadialProgress = ({
  percentage,
  text,
}: {
  percentage: number;
  text: string;
}) => {
  return (
    <div className="relative" style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}`}
        strokeWidth={4}
        styles={{
          root: {},
          path: { stroke: "orange" },
          trail: { stroke: "#eee" },
          text: {
            fill: "black",
            fontSize: "30px",
            fontWeight: "bold",
            wordBreak: "break-all",
            maxWidth: "100px",
          },
          background: { fill: "orange" },
        }}
      />
      <p className="absolute bottom-[40px] text-sm font-bold tracking-widest left-1/2 transform -translate-x-1/2 uppercase text-gray-text">
        {text}
      </p>
    </div>
  );
};
