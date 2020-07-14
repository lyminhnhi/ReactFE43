import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    // cach 1
    state = {
        srcImg: "./img/black-car.jpg"
    }

    // cach 2
    changeColor = (color) => {
        let imgColor = `./img/${color}-car.jpg`;
        
        this.setState({
            srcImg: imgColor
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-6">
                        <h3 className="text-center">Mẫu Xe</h3>
                        <img className="w-100" src={this.state.srcImg} alt="123"></img>
                    </div>

                    <div className="col-6">
                        <h3 className="text-center">Mời Bạn Chọn Màu</h3>
                        <div className="row">
                            
                            <div className="col-3">
                                {/* cach 1 */}
                                <button onClick={() => {
                                    this.setState({
                                        srcImg: "./img/black-car.jpg"
                                    })
                                }}>
                                    <img className="w-50" src="./img/icon-black.jpg" alt="aaa"></img>
                                </button>
                            </div>

                            <div className="col-3">
                                {/* cach 2 */}
                                <button onClick={() => {
                                    // this.setState({
                                    //     srcImg: "./img/red-car.jpg"
                                    // })

                                    this.changeColor("red")
                                }}>
                                    <img className="w-50" src="./img/icon-red.jpg" alt="aaa"></img>
                                </button>
                            </div>
                            <div className="col-3">
                                <button onClick={() => {this.changeColor("silver")}}>
                                    <img className="w-50" src="./img/icon-silver.jpg" alt="aaa"></img>
                                </button>
                            </div>
                            <div className="col-3">
                                <button onClick={() => {this.changeColor("steel")}}>
                                    <img className="w-50" src="./img/icon-steel.jpg" alt="aaa"></img>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
