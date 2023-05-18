import '../style/Activity.css';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
import {FetchData} from '../fetchUtils'

function Activity(props) {
    const data = FetchData("/user/" + props.id + "/activity");
    //console.log(data);
    return (
        <div>{JSON.stringify(data)}</div>
        // <BarChart width={730} height={250} data={data}>
        //     <CartesianGrid strokeDasharray="3 3" />
        //     <XAxis dataKey="day" />
        //     <YAxis />
        //     <Tooltip />
        //     <Legend />
        //     <Bar dataKey="kilogram" fill="#8884d8" />
        //     <Bar dataKey="calories" fill="#82ca9d" />
        // </BarChart>
    );
}

export default Activity;
