import React, { Component } from 'react'

export default class Sanpham extends Component {

    render() {
        let { propsanpham } = this.props;
        let value = propsanpham;
        return (
            <div>
                <div className="card text-left text-center">
                    <img style={{ width: '100%', marginLeft: 50 }} className="card-img-top" src={value.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{value.tenSP}</h4>
                        <p className="card-text">{value.giaBan.toLocaleString()}</p>
                        <button onClick={() => {
                            this.props.thaydoi(value);

                        }} className='btn btn-success'>View Detail</button>
                    </div>
                </div>



            </div>
        )
    }
}
