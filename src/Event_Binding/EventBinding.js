import React, { Component } from 'react'

export default class EventBinding extends Component {

    handleClick = () => alert("Hello Nhi");

    show = (content) => alert("Nội Dung " + content);

    render() {
        return (
            <div>
                {/* Cách 1: truyền callback */}
                <h3>Cách 1</h3>
                <button onClick={this.handleClick}>Hãy Bấm Em Đi</button>

                {/* Cách 2: dùng Arrow Function */}
                <h3>Cách 2</h3>
                <button onClick={() => {
                    this.handleClick();
                }} >Hãy Bấm Em Đi</button>

                <h3>Cách 3</h3>
                <button onClick={() => {
                    this.show("Nhi Đẹp Trai");
                }} >Cái Này Mới</button>


            </div>


        )
    }
}
