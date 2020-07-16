import React, { Component } from 'react';
import ClassProps from "./ClassProps";

export default class Props extends Component {

    render() {
        const dog = {
            con:"./img/sp_iphoneX.png",
            name: "Quyen",
            age: 2
        }

        return (
            <div>
                <ClassProps cho={dog}></ClassProps>
            </div>
        )
    }
}


