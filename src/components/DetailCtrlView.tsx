import Switch from "react-switch";
import {FC} from "react";

interface Props {
    xAxis: boolean,
    yAxis: boolean,
    zAxis: boolean,
    onChangeXAxis: (flag: boolean) => void,
    onChangeYAxis: (flag: boolean) => void,
    onChangeZAxis: (flag: boolean) => void,
}

const DetailCtrlView: FC<Props> = ({xAxis, yAxis, zAxis, onChangeXAxis, onChangeYAxis, onChangeZAxis}) => {
    return (
        <div className="right-sidebar">
            {/*Data*/}
            <div className="div-sidebar-group">
                <label className="lbl-title-category">Data</label>
                <div className="div-category-item">
                    <label className="lbl-title-sm">Max value</label>
                    <label className="lbl-item-value ml_auto">2g</label>
                </div>
                <div className="div-category-item">
                    <label className="lbl-title-sm">Track ID</label>
                    <label className="lbl-item-value ml_auto">Track title XYZ</label>
                </div>
            </div>
            <div className="line-separator"/>

            {/*View*/}
            <div className="div-sidebar-group">
                <label className="lbl-title-category">View</label>
                <div className="div-category-item">
                    <label className="lbl-title-sm">X-Axis</label>
                    <Switch className={"ml_auto"} checked={xAxis} onChange={() => {
                        onChangeXAxis(!xAxis)
                    }} width={38} height={22} uncheckedIcon={false} checkedIcon={false} onColor="#fcbc3f"/>
                </div>
                <div className="div-category-item">
                    <label className="lbl-title-sm">Y-Axis</label>
                    <Switch className={"ml_auto"} checked={yAxis} onChange={() => {
                        onChangeYAxis(!yAxis)
                    }} width={38} height={22} uncheckedIcon={false} checkedIcon={false} onColor="#fcbc3f"/>
                </div>
                <div className="div-category-item">
                    <label className="lbl-title-sm">Z-Axis</label>
                    <Switch className={"ml_auto"} checked={zAxis} onChange={() => {
                        onChangeZAxis(!zAxis)
                    }} width={38} height={22} uncheckedIcon={false} checkedIcon={false} onColor="#fcbc3f"/>
                </div>
                <div className="mt_15">
                    <label className="lbl-title-sm">Mode</label>
                    <select className="bg_cmb_mode">
                        <option value="cms">CMS</option>
                        <option value="cms2">CMS2</option>
                        <option value="cms3">CMS3</option>
                        <option value="cms4">CMS4</option>
                    </select>
                </div>
            </div>
            <div className="line-separator" style={{marginTop: "28px"}}/>

            {/*Legaycy*/}
            <div className="div-sidebar-group">
                <label className="lbl-title-category">Legacy</label>
                <input onChange={(e) => {
                    console.log(e.currentTarget.value);
                }} className="ipt_track_title" placeholder="Track title"/>

                <div className="div_duration">
                    <input className="ipt_duration" placeholder="Duration" type="number" min={0}/>
                    <button className="btn_duration">
                        <img src={require('../ic_play.png')}/>
                    </button>
                </div>

                <button className="btn_clear" style={{marginTop: "22px"}}>Clear</button>
                <button className="btn_clear">Export PNG</button>
                <button className="btn_clear">Copy to Clipboard</button>
                <button className="btn_clear">Export CSV</button>
            </div>

            {/*Devices*/}
            <div className="line-separator" style={{marginTop: "25px"}}/>
            <div className="div-sidebar-group" style={{paddingBottom: "20px"}}>
                <label className="lbl-title-category">Devices</label>
                <div className="bg_item_devices" style={{marginTop: '20px'}}>
                    <div className="bg_item_devices_first_part">
                        <label className="lbl_item_devices_1">Connected to</label>
                        <label className="lbl_item_devices_2">SensorBoard</label>
                    </div>
                    <img src={require('../ic_device_1.png')}/>
                </div>
                <div className="bg_item_devices">
                    <div className="bg_item_devices_first_part">
                        <label className="lbl_item_devices_1">Connected to</label>
                        <label className="lbl_item_devices_2">Satellite Ulli</label>
                    </div>
                    <img src={require('../ic_device_1.png')}/>
                </div>
            </div>
        </div>
    )
}

export default DetailCtrlView;