const TypingAnimation = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse"></div>
      <div
        className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse "
        style={{ animationDelay: "200ms" }}
      ></div>
      <div
        className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600  animate-pulse "
        style={{ animationDelay: "500ms" }}
      ></div>
      <div
        className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600  animate-pulse delay-500 "
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};

export default TypingAnimation;
