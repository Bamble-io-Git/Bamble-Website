// import { useState } from "react";
// type TAccordion = {
//   title: string;
//   content: string;
//   icon: "transparent" | "profitability" | "engagement" | "limitless";
// };

// const Accordion = ({ title, content, icon }: TAccordion) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     // <div className={styles.wrapper}>
//     //   {isOpen && <p className={styles.content}>{content}</p>}
//     //   <button className={styles.button} onClick={handleToggle}>
//     //     <p>icon</p>

//     //     <p className={styles.title}>{title}</p>
//     //     <div className={styles.chevron}>
//     //       <span>{isOpen ? <p>up</p> : <p>down</p>}</span>
//     //     </div>
//     //   </button>
//     // </div>

//     <div className="relative w-full max-w-md mx-auto mb-4">
//       <div
//         className={`absolute w-full bg-gray-100 p-4 rounded-md transition-transform duration-300 ${
//           isOpen ? "transform translate-y-12" : "transform -translate-y-full"
//         }`}
//       >
//         {content}
//       </div>
//       <button
//         className="w-full bg-blue-500 text-white py-2 px-4 mb-2 rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none relative z-10"
//         onClick={toggleAccordion}
//       >
//         {title}
//       </button>
//     </div>
//   );
// };

// export default Accordion;

// Accordion.js

const Accordion = ({ question, onClick }) => {
  return (
    <div className="relative w-full max-w-md mx-auto mb-4">
      <button
        className="w-full bg-blue-500 text-white py-2 px-4 mb-2 rounded-md transition-transform duration-300 transform hover:scale-105 focus:outline-none relative z-10"
        onClick={onClick}
      >
        {question}
      </button>
    </div>
  );
};

// AccordionList.js
import { useState } from "react";

const AccordionList = () => {
  const [questions, setQuestions] = useState([
    "Question 1",
    "Question 2",
    "Question 3",
    // Add more questions as needed
  ]);

  const handleQuestionClick = (index) => {
    const updatedQuestions = [...questions];
    const selectedQuestion = updatedQuestions.splice(index, 1)[0];
    updatedQuestions.unshift(selectedQuestion);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      {questions.map((question, index) => (
        <Accordion
          key={index}
          question={question}
          onClick={() => handleQuestionClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordionList;
