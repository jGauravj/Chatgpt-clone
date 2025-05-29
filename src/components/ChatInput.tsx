const ChatInput = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center max-w-3xl mx-auto py-3">
      <form className="w-full bg-[#303030]  flex items-center px-4 py-2.5 rounded-full border border-white/10 transition duration-300 ease foucs:outline-none focus:border-white/22 hover:border-white/15  shadow-sm focus:shadow outline-none text-base font-light">
        <input
          type="text"
          placeholder="Ask anything"
          className="w-full bg-transparent text-white placeholder:text-white/50 outline-none "
        />
      </form>
    </div>
  );
};

export default ChatInput;
