import StateTile from "../statTile";

const Stats = async () => {
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Authorization", "Basic dHJpYWw6YXNzaWdubWVudDEyMw==");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const data = await fetch("http://3.111.196.92:8020/api/v1/sample_assignment_api_1/", requestOptions);
  const stats: { [key: string]: string } = await data.json();

  return (
    <div className="flex gap-2 flex-wrap">
      {stats &&
        Object.keys(stats).map((key, idx) => {
          return <StateTile key={idx} title={key} value={stats[key]} changed={idx === 1 ? "decreased" : "increased"} changedBy="10%" />;
        })}
    </div>
  );
};

export default Stats;
