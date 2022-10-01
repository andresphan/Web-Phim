import React, { Component } from 'react'
import data from '../Data/DataFilms.json'
export default class WebFilm extends Component {


    renderfilm = () => {
        return data.map((value, index) => {
            return <div className='col-3' key={index}>
                <div className="card text-white bg-dark ml-5" style={{ width: '250px' }}>
                    <img className="card-img-top" src={value.hinhAnh} alt={value.tenPhim} style={{ width: '250px', height: '300px' }} />
                    <div className="card-body">
                        <h4 className="card-title" style={{ fontSize: '14px', height: '50px' }}>{value.tenPhim}</h4>
                        <p className="card-text" style={{ fontSize: '10px', height: '50px' }}>{value.moTa.length > 70 ? <p>{value.moTa.substr(0, 80)}...</p> : <p>value.moTa</p>}</p>
                    </div>
                </div>



            </div>


        })




    }

    render() {
        return (
            <div style={{ backgroundImage: 'url(./Img/avanger.jpg)', minHeight: '2000px' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.6)', minHeight: '2000px' }}>
                    <nav className="navbar navbar-expand-sm navbar-dark " style={{ backgroundColor: 'rgba(85,82,149,0.7)' }}>
                        <a className="navbar-brand" href="#">Phim moi</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="#">Action 1</a>
                                        <a className="dropdown-item" href="#">Action 2</a>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </nav>
                    <div className='container-fluid mt-5' >
                        <div className='row'>
                            {this.renderfilm()}

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
