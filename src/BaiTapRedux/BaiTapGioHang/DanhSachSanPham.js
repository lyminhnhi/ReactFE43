import React, { Component } from 'react'
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {

    renderSanPham = () => {
        return this.props.mangSanPham.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPham sanPham={sanPham} />
            </div>
        });

    }

    render() {
        return (
            <div>
                <h3>Danh Sách Sản Phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <h3 className="mt-5">Chi Tiết Sản Phẩm</h3>

                <hr></hr>

                <div className="row">

                    <div className="col-4">
                        <h3 className="text-center">Các Loại Iphone</h3>
                        <img height={350} src={"./img/vsphone.jpg"}></img>
                    </div>

                    <div className="col-8">
                        <table className="table">
                            <tr>
                                <td>Tên Sản Phẩm</td>
                                <td>Iphone</td>
                            </tr>

                            <tr>
                                <td>Màn Hình</td>
                                <td>Rất Xịn Và Này Nọ</td>
                            </tr>

                            <tr>
                                <td>Thông Tin</td>
                                <td>Nội Dung</td>
                            </tr>

                            <tr>
                                <td>Thông Tin</td>
                                <td>Nội Dung</td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
