import TypeIt from "typeit-react";

const TypingAnimation = ({ text }) => {
  return (
    <span className="type-it">
      {text && (
        <TypeIt
          options={{
            speed: 200,
            loop: true,
            strings: [text],
            breakLines: false,
          }}
        />
      )}
    </span>
  );
};
export default TypingAnimation;
