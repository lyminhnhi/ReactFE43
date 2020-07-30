import React, { Component } from 'react'
import { connect } from "react-redux";


class DanhSachCuoc extends Component {

    renderDanhSachCuoc = (list) => {
        return list.map((element, index) => {
            return (
                <div className="card col-4">
                    <img className="card-img-top" src={element.hinhAnh} alt="Card cap" style={{ height: 200 }} key={index} />
                    <div className="card-body">
                        <h5 className="card-title" />
                        <div className="d-flex justify-content-around align-items-center">
                            <button className="btn btn-info" onClick={() => {
                                    this.props.tangGiamMucCuoc(element.ma, false);
                                }}>
                                -
                                </button>

                                <span>{element.giaCuoc}$</span>
                                
                                <button className="btn btn-info"
                                onClick={() => {
                                    this.props.tangGiamMucCuoc(element.ma, true);
                                }}>
                                +
                                </button>
                        </div>
                    </div>
                </div>

            );
        })
    }


    render() {
        return (
            <div className="col-md-12 col-lg-7">
                <div className="bau-cua__chon">
                    <div className="bau-cua__bang row">
                        {this.renderDanhSachCuoc(this.props.danhSachCuoc)}
                    </div>
                </div>

            </div>
        )
    }

}

//------------------------------------------

const mapStateToProps = (state) => {
    return {
        danhSachCuoc: state.GameReducer.danhSachCuoc,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        tangGiamMucCuoc : (ma, tangGiam) => {
            const action = {
                type: "tang_giam",
                ma: ma,
                tangGiam: tangGiam,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);
