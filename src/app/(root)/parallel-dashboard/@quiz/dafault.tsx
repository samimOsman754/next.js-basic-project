import wait from "../../lib/wait";

export default async function DefaultQuiz() {
  await wait(3000)
  return (
    <div className="text-xl p-4 text-black border border-gray-400 rounded h-[360px] flex items-center justify-center">
     Default Quiz
    </div>
  );
}