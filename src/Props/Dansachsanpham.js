import React, { Component } from 'react'
import Sanpham from './Sanpham'

export default class Dansachsanpham extends Component {
    mangsanpham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]
    state = {
        sanphamchitiet: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }
    }

    rendersanpham = () => {
        return this.mangsanpham.map((value, index) => {
            return <div className='col-4' key={index}>
                <Sanpham thaydoi={this.thaydoi} propsanpham={value} />




            </div>


        })



    }

    thaydoi = (a) => {
        let newstate = {
            sanphamchitiet: a

        }
        this.setState(newstate);



    }

    render() {
        return (
            <div className='container-fluid'>
                <h3 className='display-4 text-center'>Product List</h3>
                <div className='row'>
                    {this.rendersanpham()}
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <h3 style={{ textAlign: 'center' }}>{this.state.sanphamchitiet.tenSP}</h3>
                        <img style={{ width: '100%' }} src={this.state.sanphamchitiet.hinhAnh}></img>
                    </div>
                    <div className='col-8'>
                        <h3>Thông số kỹ thuật</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <td>{this.state.sanphamchitiet.manHinh}</td>

                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{this.state.sanphamchitiet.heDieuHanh}</td>

                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{this.state.sanphamchitiet.cameraTruoc}</td>

                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{this.state.sanphamchitiet.cameraSau}</td>

                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{this.state.sanphamchitiet.ram}</td>

                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{this.state.sanphamchitiet.rom}</td>

                                </tr>

                            </thead>

                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

