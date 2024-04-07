import React, {useState} from "react";
import Axios from 'axios';
import './Forms.css';


function Forms(){
    const [patientNum, setPatientNum] = useState("");
    const [certificateNum, setCertificateNum] = useState("");
    const [treatNum, setTreatNum] = useState("");
    const [netIncomeNum, setNetIncomeNum] = useState("");
    const [medicineRatio, setMedicineRatio] = useState("");
    const [shiftNum, setShiftNum] = useState("");
    const [level, setLevel] = useState("");

    const [yearNum, setYearNum] = useState(2024);
    const [monthNum, setMonthNum] = useState(1);
    const [doctorTeam, setDoctorTeam] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [resu, setResu] = useState("");

    const [thirdhospitalcal, setThirdhospitalcal] = useState([]);

    const addData = () => {
        Axios.post("http://localhost:80/create",{
            Year: yearNum,
            Month: monthNum,
            Team: doctorTeam,
            Name: doctorName,
            Result: resu,
        }).then(() => {
            alert("已成功添加！")
            setThirdhospitalcal([...thirdhospitalcal,
            {
                Year: yearNum,
                Month: monthNum,
                Team: doctorTeam,
                Name: doctorName,
                Result: resu, 
            },
            ]);
        });
    };
    

    const calculating = () => {
        let totalValue = ((((patientNum * 400) + (certificateNum * 300) + (treatNum * 100) + (netIncomeNum / 1000 * 2.5) + ((1-medicineRatio)*1000) + (shiftNum * 100) )* 0.7) + (level * 0.3));
        setResu(totalValue)
    };

    return(
        <div className="form0">

            <div className="form1">
                <div className="small">
                    <div>收病人数<br/><input className="inline" type="number" placeholder="整数" name="patientNum" onChange = {(event) => {setPatientNum(event.target.value);}}/></div>
                    <br/>
                    <div>入院证数<br/><input className="inline" type="number" placeholder="整数" name="certificateNum" onChange = {(event) => {setCertificateNum(event.target.value);}}/></div>
                    <br/>
                    <div>处理病人数<br/><input className="inline" type="number" placeholder="整数" name="treatNum" onChange = {(event) => {setTreatNum(event.target.value);}}/></div>
                    <br/>
                    <div>纯收入<br/><input className="inline" type="number" placeholder="数字" name="netIncomeNum" onChange = {(event) => {setNetIncomeNum(event.target.value);}}/></div>
                    <br/>
                    <div>药比<br/><input className="inline" type="number" placeholder="小数" name="medicineRatio" onChange = {(event) => {setMedicineRatio(event.target.value);}}/></div>
                    <br/>
                    <div>值班次数<br/><input className="inline" type="number" placeholder="整数" name="shiftNum" onChange = {(event) => {setShiftNum(event.target.value);}}/></div>
                    <br/>
                    <div>职称<select className="inline" name="level" onChange = {(event) => {setLevel(event.target.value)}}>
                        <option value="1.1">初级职称</option>
                        <option value="1.2">中级职称</option>
                        <option value="1.3">高级职称I</option>
                        <option value="1.4">高级职称II</option>
                        <option value="1.5">组长</option>
                    </select></div>
                    <br/>
                    <div>计算结果:{resu}<br/><button className="cal" type="button" onClick = {calculating}>点此获取</button></div>
                </div>
            </div> 

            <div className="form2">
                <div className="small1">
                    <div>年份<select className="inline2" name="yearNum" onChange = {(event) => {setYearNum(event.target.value)}}>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                    </select></div>
                    <br/>
                    <div>月份<select className="inline2" name="monthNum" onChange = {(event) => {setMonthNum(event.target.value)}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select></div>
                    <br/>
                    <div>科室<input className="inline" type="text" placeholder="所属科室" name="doctorTeam" onChange = {(event) => {setDoctorTeam(event.target.value);}}/></div>
                    <br/>
                    <div>姓名<input className="inline" type="text" placeholder="员工姓名" name="doctorName" onChange = {(event) => {setDoctorName(event.target.value);}}/></div>
                    <br/>
                    <button className="confirm" onClick = {addData}>确认保存</button>
                    <br/>
                </div>
            </div>
        </div>
    );
}


export default Forms;