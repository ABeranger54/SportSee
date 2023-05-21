import '../style/Score.css';
import {RadialBarChart, RadialBar, PolarAngleAxis} from 'recharts'
import {FetchData} from '../fetchUtils'
import {useEffect, useState} from 'react';

function Score(props) {
    const [data, setData] = useState();
    useEffect(() => {
    FetchData("/user/" + props.id).then(data => {
      setData(data.data);
    })
  },[])
  if(data){
    const val = [{ score: data.score, fill: 'red' }];
    
    return (
      <div id="score">
        <div id="scoreCircle"></div>
        <RadialBarChart width={260} height={260} data={val} cx={130} cy={130} innerRadius={90} outerRadius={90} barSize={10} startAngle={90} endAngle={-270} >
          <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false} />
          <RadialBar dataKey="score" cornerRadius={100} />
          <text x="25" y="35" textAnchor="left" dominantBaseline="left">Score</text>
          <text x="130" y="120" textAnchor="middle" dominantBaseline="middle" style={{fontSize: "25px"}} fill="#282D30">{val[0].score * 100 + "%"}</text>
          <text x="130" y="150" textAnchor="middle" dominantBaseline="middle" style={{fontSize: "18px"}} fill="#74798C">de votre</text>
          <text x="130" y="170" textAnchor="middle" dominantBaseline="middle" style={{fontSize: "18px"}} fill="#74798C">objectif</text>
        </RadialBarChart>
      </div>
    );
  }
}

export default Score;
