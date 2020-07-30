import React, { Component } from 'react';
import { connect } from "react-redux";

class Xucxac extends Component {

    renderXucXac = (list) => {
        return list.map((element, index) => {
            return <div className={`bau-cua__xoay bau-cua__xoay--${index + 1}`}
            key={index}>
                    <img src={element.hinhAnh} alt="hinhanh" />
                </div>
        })
    };

    render() {
        return (
            <div className="col-md-12 col-lg-5">
                <div className="bau-cua__do w-100 h-100">
                <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
                    {this.renderXucXac(this.props.xucXac_2)}
                </div>
            </div>

        )
    }
}

//---------------------------------------------
const mapStateToProps = (state) => {
    return {
        xucXac_2: state.GameReducer.xucXac,
    };
};

export default connect(mapStateToProps, null)(Xucxac);
