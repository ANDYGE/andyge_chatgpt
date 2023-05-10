const TypingAnimation = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse" />
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse animation-delay-300 " />
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600  animate-pulse animation-delay-500 " />
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600  animate-pulse animation-delay-1000 " />
    </div>
  );
};

export default TypingAnimation;
