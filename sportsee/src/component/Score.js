import '../style/Score.css';
import {Cell, ResponsiveContainer, PieChart, Pie} from 'recharts'
import {FetchData} from '../fetchUtils'
import {useEffect, useState} from 'react';

function Score(props) {
  const [data, setData] = useState();
  useEffect(() => {
    FetchData("/user/" + props.id).then(res => {
      setData(res.data);
    })
  },[])
  
  if(data){
    var values = [{"value": data.score}, {"value": 1 - data.score}];
    const COLORS = ['#ff0000', '#fbfbfb'];
    
    return (
        <ResponsiveContainer id="score">
          <PieChart>
            <Pie data={[{"value": 1}]} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#ffffff" />
            <Pie data={values} dataKey="value" cx="50%" cy="50%" innerRadius={80} outerRadius={93}>
              {
                values.map((entry, index) => <Cell key={index} fill={COLORS[index]}/>)
              }
            </Pie>
            <text x="25" y="35" textAnchor="left" dominantBaseline="left">Score</text>
            <text x="50%" y="47%" textAnchor="middle" dominantBaseline="middle" style={{fontSize: "25px"}} fill="#282D30">{data.score * 100 + "%"}</text>
            <text x="50%" y="56%" textAnchor="middle" dominantBaseline="middle" style={{fontSize: "18px"}} fill="#74798C">de votre</text>
            <text x="50%" y="63%" textAnchor="middle" dominantBaseline="middle" style={{fontSize: "18px"}} fill="#74798C">objectif</text>
          </PieChart>
        </ResponsiveContainer>
    );
  }
}

export default Score;
