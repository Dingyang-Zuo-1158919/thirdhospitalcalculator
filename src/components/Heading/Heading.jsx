import React, {Component} from "react";
import './Heading.css'

export default class Heading extends Component{
        render(){
        let pic1 = <img className="img" src={require('./Logo.png')} alt="Hospital Logo"/>
        return(
        <div id='word'>
        {pic1}
        工资计算器
        </div>
        )
    }
}