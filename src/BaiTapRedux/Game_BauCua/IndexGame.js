import React, { Component } from 'react'
import './Style.css'
import DanhSachCuoc from "./DanhSachCuoc/DanhSachCuoc"
import Xucxac from './XucXac/Xucxac'
import { connect } from "react-redux";

class IndexGame extends Component {


    render() {
        return (
            <div>
                <div className="bau-cua">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="bau-cua__tien font-weight-bold">
                                Tổng Tiền: {this.props.tongTien} $
                            </div>
                            <h2 className="text-center text-danger">Bầu Cua</h2>
                            <div><btn className="btn btn-info" 
                            onClick={() => {
                                    this.props.choiGame();
                                }}>Chơi Game</btn></div>
                        </div>
                        <div className="row">
                                <DanhSachCuoc/>
                                <Xucxac/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tongTien : state.GameReducer.tongTien,
        DanhSachCuoc : state.GameReducer.DanhSachCuoc,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        choiGame : () => {
            const action = {
                type : "choi_game",
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexGame);