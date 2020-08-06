
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
import BaiTapGioHang from "./BaiTapRedux/BaiTapGioHang/BaiTapGioHang";
import IndexGame from './BaiTapRedux/Game_BauCua/IndexGame';
import Form_validation from './Form_Validation/Form_validation';
import QLSinhVien from './Form_Validation/QLSinhVien';
import Lifecycle from './React_Lifecycle/Lifecycle';



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
      {/* <ExempleCard/> */}
      {/* <BaiTapGioHang/> */}
      {/* <IndexGame/> */}
      {/* <Form_validation/> */}
      <QLSinhVien/>
      {/* <Lifecycle/> */}
    </div>
  );
}

export default App;
