import React from 'react';
import { Spin } from 'antd';
import RandomColor from 'randomcolor';


class StyledSpin extends React.Component{
    render(){
const color = RandomColor();

const style = {
    background: color,
    width: '4%',
};
        return(
            <Spin size="large" style={style}/>
        )
    }
}
export default StyledSpin;
