import React, {useState} from "react";

import Axios from "axios";
import "./Record.css";


function Records(){
    const [thirdhospitalcal, setThirdhospitalcal] = useState([]);

    const getData = () => {
        Axios.get("http://localhost:3000/thirdhospitalcal").then((response) => {
            setThirdhospitalcal(response.data);
            console.log(response.data)
        });
    };

    const deleteData = (id) => {
        Axios.delete(`http://localhost:3000/delete/${id}`).then(() => {
                setThirdhospitalcal(
                    thirdhospitalcal.filter((item) => {
                        return item.id !== id;
                    })
                ); 
            }).catch((error) => {
                console.error('error deleting data: ', error);
            });
    };

    return(
        <div>
         <button className="button1" onClick={getData}>点此展示数据</button>
                    <div className="tablearea">
                        <table>
                            <thead className="header">
                                <tr>
                                    <th>年份</th>
                                    <th>月份</th>
                                    <th>科室</th>
                                    <th>姓名</th>
                                    <th>结果</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody className="body"> 
                                {thirdhospitalcal.map(item => {
                                    return(
                                        <tr>
                                            <td>{item.Year} </td>
                                            <td>{item.Month}</td>
                                            <td>{item.Team}</td>
                                            <td>{item.Name}</td>
                                            <td>{item.Result}</td>
                                            <td><button className="button2" onClick={()=>{deleteData(item.id)}}>删除</button></td>
                                        </tr>)}
                                        )}
                                </tbody>
                        </table>
                    </div>
        </div>
    );
}

export default Records;