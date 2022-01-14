import Progress from "./progres";

const Bills = () => {
  return (
    <div className="col span-4-of-5">
      <h2>room 419: </h2>
      <h3>bills</h3>
      <div>
        Sanitation: <Progress paid={1000} total={1700}  />
      </div>
      <div>
        Electricity: <Progress paid={400} total={1000} />
      </div>
    </div>
  );
};

export default Bills;
