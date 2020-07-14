
import React from 'react';

import './App.css';
import BT3DanLayout from './Components/BaiTap_3/BT3DanLayout';
import EventBinding from './Event_Binding/EventBinding';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      {/* <BT3DanLayout/> */}
      {/* <EventBinding/> */}
      {/* <RenderWithState/> */}
      {/* <BaiTapChonXe></BaiTapChonXe> */}
      <RenderWithMap></RenderWithMap>
    </div>
  );
}

export default App;
