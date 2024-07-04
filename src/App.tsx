import React, {useState} from 'react';
import './App.css';

import GraphView from './components/GraphView'
import DetailCtrlView from "./components/DetailCtrlView";
function App() {
    const [xAxis, setXAxisItem] = useState<boolean>(true);
    const [yAxis, setYAxisItem] = useState<boolean>(true);
    const [zAXis, setZAxisItem] = useState<boolean>(true);
  return (
    <div className="container">
        <div className="home">
            <GraphView/>
            <DetailCtrlView
                xAxis={xAxis}
                yAxis={yAxis}
                zAxis={zAXis}
                onChangeXAxis={(flag) => {
                    setXAxisItem(flag)
                }}
                onChangeYAxis={(flag) => {
                    setYAxisItem(flag)
                }}
                onChangeZAxis={(flag) => {
                    setZAxisItem(flag)
                }}
            />
        </div>
    </div>
  );
}

export default App;
