import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) =>{
    return(
        <div>
            <Sparklines data={props.data} 
                        width={180} 
                        height={140} 
                       >
                        <SparklinesLine color={props.color}/>
                        <SparklinesReferenceLine type="avg"/>    
            </Sparklines>
            <div>Average: {average(props.data)} {props.unit}</div>
        </div>
    );
}