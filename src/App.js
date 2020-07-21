
import React from 'react';

import './App.css';
import BT3DanLayout from './Components/BaiTap_3/BT3DanLayout';
import EventBinding from './Event_Binding/EventBinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BTChonKieng from './BaiTapChonKieng/BTChonKieng';
import Props from './Props/Props';
import ExempleCard from './LiftingUpState/ExempleCard';


function App() {
  return (
    <div className="App">
      {/* <BT3DanLayout/> */}
      {/* <EventBinding/> */}
      {/* <RenderWithState/> */}
      {/* <BaiTapChonXe></BaiTapChonXe> */}
      {/* <RenderWithMap></RenderWithMap> */}
      {/* <BTChonKieng></BTChonKieng> */}
      {/* <Props></Props> */}
      <ExempleCard/>
    </div>
  );
}

export default App;
