import React, { Component } from 'react'

export default class RenderWithState extends Component {

    //this.state : thuộc tính chứa giá trị thay đổi khi người dùng thao tác,
    // thuộc tính state có sẵn
    state = { isLogin:false }

    // isLogin = false;
    userName = "Minh Nhi";

    renderContent = () => {
        if(this.state.isLogin) {
            return <p>Hello {this.userName}</p>
        }
        return <button onClick={() => {
            this.login();
        }}>Đăng Nhập</button>
    };


    login = () => {
        // this.isLogin = true;
        // console.log(this.state.isLogin);
        // this.render();
        let newState = {
            isLogin : true
        }

        // method setState có sẵn, làm 2 việc, 1 là đổi giá trị State, 2 là gọi this.render lại giao diện
        this.setState(newState,()=> {
            console.log(this.state);
        });
    }


    render() {
        return (
            <div>
                {this.isLogin ? <p>hello {this.userName}</p> : <button>Sai Rồi</button>}
            </div>
        )
    }
}
