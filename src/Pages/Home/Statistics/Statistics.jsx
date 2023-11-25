import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div>
      <CountUp start={0} end={50000}>
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <button className="btn btn-info" onClick={start}>All User</button>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={35000}>
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <button className="btn btn-warning" onClick={start}>Normal User</button>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={15000}>
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <button className="btn btn-error" onClick={start}>Premium User</button>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Statistics;
