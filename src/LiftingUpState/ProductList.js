import React, { Component } from 'react'
import Product from "./Product"

export default class ProductList extends Component {

    renderProlist = () => {
        return this.props.proList.map((item, index) => {
            return (
                <div className="col-sm-4" key={index}>
                    <Product NhanQuyen={this.props.Quyen} item={item}
                    handleBuy={this.props.handleBuy}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderProlist()}
                </div>
            </div>
        )
    }
}
