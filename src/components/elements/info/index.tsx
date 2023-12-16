const InfoComponent = ({ text }: { text: string }) => {
  return (
    <div className="bg-yellow-primary px-1 sm:px-3 py-1 rounded-md">
      <p className="text-base font-semibold text-black">{text}</p>
    </div>
  );
};

export default InfoComponent;
