import React from 'react'

export default function Product(props) {

    let { hinhAnh, tenSP } = props.item
    let { item, NhanQuyen } = props

    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt="asdsad" />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <button className="btn btn-success" onClick={() => NhanQuyen(item)
                    }>Chi tiết</button>
                    <button type="button" className="btn btn-danger" onClick={() => {props.handleBuy(item)}}>Mua</button>
                </div>
            </div>
        </div>
    )
}
