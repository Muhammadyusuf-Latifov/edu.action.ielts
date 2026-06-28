import user from "./assets/usermulti-color.svg";
import finger from "./assets/fingerprint.svg";
import building from "./assets/building-multicolor.svg";
import calendar from "./assets/multicolor-calender.svg";
import trf from "./assets/fileMulticolor.svg";
import down from "./assets/download-Icon.svg";
import go from "./assets/chevron-right-gray.svg";
import gov from "./assets/chevron-left.svg";
export default function App() {
  const data = {
    user,
    finger,
    building,
    calendar,
    trf,

    name: "MUXAMMADYUSUFXON LATIFOV",
    testTakerId: "706593",
    centreNumber: "UZ006",
    testDate: "21/06/2026",
    trfNumber: "25UZ706593LM006",

    overall: "6.5",
    listening: "7",
    reading: "6",
    writing: "6",
    speaking: "6",
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8 px-6">
      <div className="max-w-275 w-full mx-auto">
        {/* Back */}
        <button className="text-blue-500 flex items-center gap-2 text-[15px] mb-6">
          <img src={gov} alt="" /> Back
        </button>

        {/* Top card */}
        <div className="rounded-lg overflow-hidden bg-[#313343] shadow-sm">
          <div className="bg-[#313343] text-white px-5 py-3  ">
            <h2
              className="

text-[20px] font-bold
leading-7 text-white
m-0
"
            >
              IELTS on Computer Academic
            </h2>
          </div>

          <div className="grid grid-cols-6 gap-6 p-5 bg-white rounded-lg">
            <div className="col-span-2">
              <Info title="Test taker name" img={data.user} value={data.name} />
            </div>

            <Info
              title="Test taker ID"
              img={data.finger}
              value={data.testTakerId}
            />

            <Info
              title="Centre number"
              img={data.building}
              value={data.centreNumber}
            />

            <Info title="Test date" img={data.calendar} value={data.testDate} />

            <Info title="TRF number" img={data.trf} value={data.trfNumber} />
          </div>
        </div>

        {/* Results */}
        <div className="mt-10">
          <div className="flex items-center mb-5">
            <div className="w-2.25 h-8 bg-[#a61242] mr-3 "></div>

            <h1 className="text-[26px] font-bold">Your test result</h1>

            <div className="ml-auto flex items-center gap-3  cursor-pointer">
              <div className="mb-1.25">
                <img src={down} alt="" />
              </div>
              <div className="flex flex-col leading-3">
                <p className="font-medium">Download eTRF</p>
                <p className="text-gray-400 text-[10px]">
                  ......................................
                </p>
              </div>
            </div>
          </div>

          {/* Overall card */}
          <div className="bg-white flex items-center justify-between rounded-lg p-5 shadow-sm mb-4">
            <div>
              <p className="text-lg  font-medium">Overall</p>

              <h1 className="text-3xl font-bold text-[#d71d52] ">
                {data.overall}
              </h1>
            </div>
            <div>
              <img src={go} alt="" />
            </div>
          </div>

          {/* Score cards */}
          <div className="grid grid-cols-4 gap-4">
            <Score title="Listening" score={data.listening} />

            <Score title="Reading" score={data.reading} />

            <Score title="Writing" score={data.writing} />

            <Score title="Speaking" score={data.speaking} />
          </div>

          {/* Bottom title */}
          <div className="flex items-center mt-12">
            <div className="w-2.25 h-8 bg-[#a61242] mr-3 "></div>

            <h2 className="text-2xl font-bold">IELTS One Skill Retake</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({
  title,
  img,
  value,
}: {
  title: string;
  img: string;
  value: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <img src={img} alt={title} className="w-6 h-6" />
      </div>

      <div>
        <p className="font-bold text-[16px] wrap-break-word mb-1">{title}</p>
      </div>

      <div>
        {" "}
        <p className="font-normal  text-[17px] whitespace-nowrap">{value}</p>
      </div>
    </div>
  );
}

function Score({ title, score }: { title: string; score: string }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-lg ">{title}</p>
          <h2 className="text-3xl font-bold text-[#d71d52]">{score}</h2>
        </div>

        <div>
          <img src={go} alt="" />
        </div>
      </div>
    </div>
  );
}
