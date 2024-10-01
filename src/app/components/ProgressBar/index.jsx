import Border from "../Border";

const ProgressBar = ({ progress }) => {
  return (
    <div>
      <Border
        image={
          <div className="">
            <div
              className="absolute inset-0 rounded-custom "
              style={{
                width: `${progress}%`,
                background:
                  " linear-gradient(to right, #5F9FE7, #4AE1D2, #E07DFE, #FF1FCA)",
              }}
            ></div>
            <div className=" flex items-center justify-center absolute -inset-[2px] rounded-custom ">
              <p className="text-white rounded-custom">{progress}%</p>
            </div>
          </div>
        }
        padding="p-4"
        backgroundColor="#080717"
        className=""
      />

      {/* <style jsx>{`
        .rounded-custom {
          border-radius: 24px;
          clip-path: polygon(
            4% 0,
            96% 0,
            100% 26%,
            100% 74%,
            96% 100%,
            4% 100%,
            0 74%,
            0 26%
          );
          .border-gradient {
            background: linear-gradient(
              to right,
              #5f9fe7,
              #4ae1d2,
              #e07dfe,
              #ff1fca
            );
            z-index: 1;
            position: absolute;
          }
        }
      `}</style> */}
    </div>
  );
};

export default ProgressBar;
