import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div className="card w-full h-60 bg-primary text-primary-content shadow-2xl mb-10">
      <div className="card-body flex-col justify-center items-center text-3xl">
        <div className="flex justify-center items-center gap-8">
          <CountUp start={0} end={50000}>
            {({ countUpRef, start }) => (
              <div>
                <span ref={countUpRef} className="mr-3" />
                <button className="btn btn-info" onClick={start}>
                  All User
                </button>
              </div>
            )}
          </CountUp>
          <CountUp start={0} end={35000}>
            {({ countUpRef, start }) => (
              <div>
                <span ref={countUpRef}  className="mr-3" />
                <button className="btn btn-warning" onClick={start}>
                  Normal User
                </button>
              </div>
            )}
          </CountUp>
          <CountUp start={0} end={15000}>
            {({ countUpRef, start }) => (
              <div>
                <span ref={countUpRef}  className="mr-3" />
                <button className="btn btn-error" onClick={start}>
                  Premium User
                </button>
              </div>
            )}
          </CountUp>
        </div>
        <div className="card-actions justify-end">
          
        </div>
      </div>
    </div>
  );
};

export default Statistics;
