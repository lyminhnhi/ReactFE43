import React, { Component } from 'react'
import Form_validation from './Form_validation'
import { connect } from 'react-redux'

class QLSinhVien extends Component {

    renderTable = () => {
        return this.props.mangNguoiDung.map((nd,index) => {
            return <tr key={index}>
            <td>{nd.taiKhoan}</td>
            <td>{nd.matKhau}</td>
            <td>{nd.eMail}</td>
            <td>{nd.soDt}</td>
            <td>{nd.hoTen}</td>
            <td>{nd.maNhom}</td>
            <td>
                <button onClick={() => {
                    this.props.dispatch({
                        type : "chinh_sua",
                        nd,
                    })
                }} className="btn btn-primary">
                    Chỉnh Sửa
                </button>
            </td>
        </tr>
        })
    }

    render() {
        return (
            <div className="container">
                <Form_validation/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tài Khoản</th>
                            <th>Mật Khẩu </th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                            <th>SĐT</th>
                            <th>Mã Nhóm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        mangNguoiDung : state.QLSVReducer.mangNguoiDung,
    }
}

export default connect(mapStateToProps)(QLSinhVien)