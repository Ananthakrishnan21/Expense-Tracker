import './Chart.css'
import ChartBar from './ChartBar'

const Chart=(props)=>{
    const valueArray=props.data.map((exp)=>{return exp.value})
     const max=Math.max(...valueArray)
     return(
       <div className='chart'>
         {props.data.map((exp)=>{
            return <ChartBar key={exp.month} value={exp.value} label={exp.month} maxValue={max}/>
        })}
       </div>
     )
    
}

export default Chart