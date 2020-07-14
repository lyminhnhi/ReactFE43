import React, { Component } from 'react'
import BT3_Header from './BT3_Header'
import BT3_Productlist from './BT3_Productlist'
import BT3_Footer from './BT3_Footer'
import BT3_Sidebar from './BT3_Sidebar'

export default class BT3DanLayout extends Component {
    render() {
        return (
            <div>
                <BT3_Header></BT3_Header>
                    <div className="container">
                        <div className="row mt-5">
                            <BT3_Sidebar></BT3_Sidebar>
                            <BT3_Productlist></BT3_Productlist>
                        </div>
                    </div>
                <BT3_Footer></BT3_Footer>
            </div>
        )
    }
}
