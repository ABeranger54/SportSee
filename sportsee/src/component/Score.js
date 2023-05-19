import '../style/Score.css';
import {RadialBarChart, RadialBar, Legend, Tooltip, PolarAngleAxis} from 'recharts'
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
        <RadialBarChart width={500} height={500} data={val} cx={100} cy={100} innerRadius={75} outerRadius={50} barSize={7} startAngle={90} endAngle={-270}>
          <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick={false} />
          <RadialBar dataKey="score" cornerRadius={100} />
          <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" className="progress-label">
            {val[0].score * 100 + "%"}
          </text>
        </RadialBarChart>
      );
  }
}

export default Score;
