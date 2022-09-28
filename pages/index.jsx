import { useCallback } from "react";
import { BaseProgress, Step, Modal } from "../components";

const Home = () => {
  const DemoContent = useCallback(
    () => (
      <>
        <div className="flex items-center text-s text-gray-600 mb-1">
          <div className="w-20">交易序號</div>
          <div className="mr-4">:</div>
          <div>8711265983</div>
        </div>
        <div className="flex items-center text-s text-gray-600 mb-1">
          <div className="w-20">點數交易</div>
          <div className="mr-4">:</div>
          <div>2020/02/15 17:00</div>
        </div>
        <div className="flex items-center text-s text-gray-600 mb-1">
          <div className="w-20">活動品牌</div>
          <div className="mr-4">:</div>
          <div>GK Bar</div>
        </div>
        <div className="flex items-center text-s text-gray-600 mb-1">
          <div className="w-20">活動名稱</div>
          <div className="mr-4">:</div>
          <div>週五啤酒買一送一兌換券</div>
        </div>
      </>
    ),
    []
  );

  const TopContent = useCallback(
    () => (
      <div className="flex justify-between bg-blue-400 p-4 rounded-t-lg text-white border-b border-solid border-gray-300">
        <div>兌換票券活動</div>
        <div>-50 點</div>
      </div>
    ),
    []
  );

  const fakeStep = [
    { status: true },
    { status: true },
    { status: false },
    { status: false },
  ];

  return (
    <div>
      <main>main</main>

      <Step className="p-8" stepList={fakeStep} />
      <BaseProgress type="step" value="28" max="100" size="small" />
      <Modal
        isOpen
        topContent={<TopContent />}
        content={
          <div className="p-6 bg-gray-300 rounded-b-lg">
            <DemoContent />
          </div>
        }
      />

      <footer>footer</footer>
    </div>
  );
};

export default Home;
