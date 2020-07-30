import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {

        let { sanPham } = this.props;
        // let sanPham = this.props.sanPham

        return (
            <div className="card text-left">
                <img style={{height:350}} className="card-img-top" src={sanPham.hinhAnh} alt=""></img>

                <div className="card-body">
                    <h4 className="card-tittle">{sanPham.tenSP}</h4>
                    <p className="card=text">{sanPham.gia}</p>
                    <button className="btn btn-success">Xem Chi Tiết</button>
                </div>

            </div>
        )
    }
}
