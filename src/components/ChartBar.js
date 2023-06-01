import './ChartBar.css'

const ChartBar=(props)=>{
    let actualValue;
    if(props.maxValue===0){
        actualValue='0%'
    }
    else{const newValue=(props.value/props.maxValue)*100
    actualValue=newValue+'%'}
    
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height:actualValue}}></div>
            </div>
            <div className='chart-bar__label'>
                {props.label}
            </div>
        </div>
    )
}

export default ChartBar