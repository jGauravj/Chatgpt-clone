import Chathelp from "@/components/Chathelp";
import ChatInput from "@/components/ChatInput";

const Home = () => {
  return (
    <main className="min-h-screen flex justify-center items-center flex-col px-2">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center gap-3">
        <h2 className="text-xl md:text-3xl text-[#fff] px-3xl">
          What can I help with?
        </h2>
        <ChatInput />
        <Chathelp />
      </div>
    </main>
  );
};

export default Home;
