import React, { Component } from 'react'
import Data from "./Data.json"
import Product from "./Product"
import ProductList from './ProductList'
import Card from "./Card"

export default class ExempleCard extends Component {

    //dk chứa state : 1 chứa giao diện, 2 chứa nút xử lý

    state = {
        proList: Data,
        proSelected: null,
        cardList: [],
    };


    handleBuy = (card) => {
        console.log(card)
        let cardUpdate = [...this.state.cardList];

        //tìm phần tử trong mảng
        let index = cardUpdate.findIndex((item) => item.maSP === card.maSP);
        if (index >= 0) {
            cardUpdate[index].soluong += 1;
        } else {
            card.soluong = 1
            cardUpdate = [...cardUpdate, card]
        }



        this.setState({
            cardList: cardUpdate
        })
    }

    handleSelecpro = (pro) => {
        this.setState({
            proSelected: pro
        });
    };

    renderProlist = () => {
        return this.state.proList.map((item, index) => {
            return (
                <div className="col-sm-4" key={index}>
                    <Product handleSelecpro={this.handleSelecpro} item={item} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container">

                        <Card cardList={this.state.cardList} />

                        <ProductList
                            //các Props cha để truyền
                            Quyen={this.handleSelecpro}
                            proList={this.state.proList}
                            QuyenMuaDo={this.handleBuy}
                        />

                        {this.state.proSelected ?
                            <div className="row">
                                <div className="col-sm-5">
                                    <img className="img-fluid" src={this.state.proSelected.hinhAnh} />
                                </div>
                                <div className="col-sm-7">
                                    <h3>Thông số kỹ thuật</h3>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Màn hình</td>
                                                <td>AMOLED, 6.2", Full HD+</td>
                                            </tr>
                                            <tr>
                                                <td>Hệ điều hành</td>
                                                <td>iOS 12</td>
                                            </tr>
                                            <tr>
                                                <td>Camera trước</td>
                                                <td>7 MP</td>
                                            </tr>
                                            <tr>
                                                <td>Camera sau</td>
                                                <td>Chính 12 MP &amp; Phụ 12 MP</td>
                                            </tr>
                                            <tr>
                                                <td>RAM</td>
                                                <td>4 GB</td>
                                            </tr>
                                            <tr>
                                                <td>ROM</td>
                                                <td>64 GB</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> : null}
                    </div>
                </div>
            </div>

        )
    }
}
