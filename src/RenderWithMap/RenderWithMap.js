import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        {id:1, name:"Iphone 1", price:"100"},
        {id:2, name:"Iphone 2", price:"200"},
        {id:3, name:"Iphone 3", price:"300"},
    ]

    renderProductList = () => {
        
    }

    render() {
        return (
            <div>
                <table></table>
            </div>
        )
    }
}
