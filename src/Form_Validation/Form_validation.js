import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ThemNguoiDung } from '../Redux/Reducer/ConstReducer';
//Lodash
import _ from 'lodash';

class Form_validation extends Component {

    state = {
        theValue: {
            taiKhoan: "",
            matKhau: "",
            eMail: "",
            hoTen: "",
            soDt: "",
            maNhom: "Phản Động",
        },
        theError: {
            taiKhoan: "",
            matKhau: "",
            eMail: "",
            hoTen: "",
            soDt: "",
            maNhom: "",
        }
    }

    //hàm tự tạo ra property là target với tham số object event
    //tạo ra object ảo tham số event để so sánh

    xuLyChange = (event) => {
        // let value = event.target.value;
        // let name = event.target.name;
        let { name, value } = event.target;

        let label = event.target.getAttribute("label");

        let type = event.target.getAttribute("type");

        console.log("taikhoan", value);

        let newValue = { ...this.state.theValue, [name]: value };
        // thay đổi giá trị value trong object

        //xử lý error
        let warNingError = "";
        if (value.trim() === "") {
            warNingError = label + "Không Được Để Trống";
        }

        //kiểm tra regex
        if (type === "phone") {
            let regexPhone = /^[0-9]+$/;
            if (!regexPhone.test(value)) {
                warNingError = `${label}Chỉ Được Nhập Số`;
            }
        };

        //kiểm tra email
        if (type === "email") {
            let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                warNingError = `${label} Email Không Hợp Lệ`;
            }
        };

        //-------------------------------------------------- 
        
        let newError = { ...this.state.theError, [name]: warNingError };

        this.setState({
            theValue: newValue,
            theError: newError,
        }, () => {
            console.log("Minh Nhi", this.state);
        })
        // setState chạy nhiều hàm, hàm sau đợi result từ hàm trước
    }

    XulySubmit = (event) => {
        
        event.preventDefault();
        let valid = true;
        let {theValue,theError} = this.state;

        //duyệt các trường value
        for(let key in theValue) {
            if(theValue[key].trim() === "") {
                alert("Dữ liệu không hợp lệ");
                return;
            }
        }

        //duyệt error
        for(let key in theError) {
            if(theError[key].trim()!== "") {
                alert("Dữ liệu không hợp lệ");
                return;
            }
        }

        this.props.dispatch({
            type: ThemNguoiDung,
            nd: this.state.theValue,
        });
        //dispatch nguyên cái object
    }

    // static getDriveStateFromProps(newProps,currentstate) {
    //     if (newProps.nguoiDungEdit.taiKhoan && newProps.nguoiDungEdit.edit !== currentstate.value.taiKhoan) {
    //     let newState = {...currentstate, value : newProps.nguoiDungEdit}
        
    //     return newState;
    //     }
    //     return null;
    // }

    componentWillReceiveProps(newProps) {
        this.setState({
            theValue: newProps.nguoiDungEdit
        })
    }

    render() {

        //bóc tách props nguoiDungEdit

        //*****LifeCycle */
        let {taiKhoan,eMail,hoTen,soDt,matKhau,maNhom} = this.state.theValue;

        return (
  
            <div className="card text-white bg-success">
                <div className="card-header">Form Đăng Ký</div>
                <div className="card-body">
                    <form onSubmit={this.XulySubmit} className="container">
                        <div className="row">
                            <div className="col-6">

                                <div className="form-group">
                                    <p>Tài Khoản</p>
                                    <input className="form-control" name="taiKhoan" label=""
                                        onChange={this.xuLyChange}  
                                        value={taiKhoan}
                                    ></input>
                                    <p className="text text-danger">{this.state.theError.taiKhoan}</p>
                                </div>

                                <div className="form-group">
                                    <p>Mật khẩu</p>
                                    <input className="form-control" name="matKhau" label=""
                                        onChange={this.xuLyChange}
                                        value={matKhau}
                                    ></input>
                                    <p className="text text-danger">{this.state.theError.maKhau}</p>
                                </div>

                                <div className="form-group">
                                    <p>Số Điện Thoại</p>
                                    <input type="phone" className="form-control" name="soDt" label=""
                                        onChange={this.xuLyChange}
                                        value={soDt}
                                    ></input>
                                    <p className="text text-danger">{this.state.theError.soDt}</p>
                                </div>
                            </div>

                            <div className="col-6">

                                <div className="form-group">
                                    <p>Họ Tên</p>
                                    <input className="form-control" name="hoTen" label=""
                                        onChange={this.xuLyChange}
                                        value={hoTen}
                                    ></input>
                                    <p className="text text-danger">{this.state.theError.hoTen}</p>
                                </div>

                                <div className="form-group">
                                    <p>Email</p>
                                    <input className="form-control" name="eMail" label="" type="email"
                                        onChange={this.xuLyChange}
                                        value={eMail}
                                    ></input>
                                    <p className="text text-danger">{this.state.theError.eMail}</p>
                                </div>

                                <div className="form-group">
                                    <p>Mã Nhóm</p>
                                    <input className="form-control" name="maNhom" label=""
                                        onChange={this.xuLyChange}
                                        value={maNhom}
                                    ></input>
                                    <p className="text text-danger">{this.state.theError.maNhom}</p>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-danger">Đăng Ký</button>
                                </div>

                                <div className="form-group">
                                    <button type="button" onClick={() => {
                                        this.props.dispatch( {
                                            type : "cap_nhat",
                                            nguoiDung : this.state.theValue
                                        })
                                    }} className="btn btn-danger">Cập Nhật</button>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

function mapStateToProps (state) {
    return {
        nguoiDungEdit : state.QLSVReducer.nguoiDungEdit,
    }
}

export default connect(mapStateToProps)(Form_validation);