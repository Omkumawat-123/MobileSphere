import React, { Component } from 'react'
import { Mobileitem } from '../Component/MobileItem';
import PropTypes from 'prop-types'
import Footer from '../Component/Footer';


export class Mobile extends Component {
    
    render() {
        return (
            <>
                <h2 className='container my-3'>Best of Weekend</h2>
                <div className='container my-3'>

                    <div className='row '>
                        <div className="col-md-3">
                            <Mobileitem  img={"https://phonedb.net/img/realme_11_5g_cn.jpg"} name={"Realme 11 5G"} price={"Up to 40% off"}/>
                        </div>
                        <div className="col-md-3">
                            <Mobileitem img={"https://png.monster/wp-content/uploads/2023/09/PNG.monsterapple-iphone-15-pro-photo%20png-370x370.png"} name={"iphone 15 pro"} price={"Buy now |  limited Stock"}/>
                        </div>

                        <div className="col-md-3">
                            <Mobileitem img={"https://phonedb.net/img/realme_v50_5g.jpg"} name={"Realme V50 5G"} price={"Buy now"}/>
                        </div>

                        <div className="col-md-3 ">
                            <Mobileitem img={"https://phonedb.net/img/samsung_w24_flip.jpg"} name={"SM-W7024 W24 Flip 5G"} price={"Up to 19% off"}/>
                        </div>

                        <div className="col-md-3 my-3">
                            <Mobileitem img={"https://phonedb.net/img/huawei_nova_11i_4g.jpg"} name={"Nova 11i 4G "} price={"Up to 40% off"}/>
                        </div>

                        <div className="col-md-3 my-3">
                            <Mobileitem img={"https://phonedb.net/img/xiaomi_redmi_note_12r_5g_2.jpg"} name={"Redmi 12 5G"} price={"Buy Now"}/>
                        </div>
                     
                        <div className="col-md-3 my-3">
                            <Mobileitem img={"https://phonedb.net/img/bbk_vivo_x90s_2.jpg"} name={"	Vivo X90s 5G  "} price={"Up to 70% off"}/>
                        </div>

                        <div className="col-md-3 my-3">
                            <Mobileitem img={"https://phonedb.net/img/xiaomi_pad6_max_14.jpg"} name={"Mi Pad 6 Max 14 "} price={"Up to 20% off"}/>
                        </div>

                        <div className="col-md-3">
                            <Mobileitem  img={"https://phonedb.net/img/realme_11_5g_cn.jpg"} name={"Realme 13 5G"} price={"Up to 60% off"}/>
                        </div>

                        <div className="col-md-3">
                            <Mobileitem img={"https://png.monster/wp-content/uploads/2023/09/PNG.monsterapple-iphone-15-pro-photo%20png-370x370.png"} name={"iphone 15 "} price={"Buy Now"}/>
                        </div>
                        
                        <div className="col-md-3">
                            <Mobileitem img={"https://phonedb.net/img/realme_v50_5g.jpg"} name={"Realme V24 5G"} price={"Buy Now"}/>
                        </div>

                        <div className="col-md-3 ">
                            <Mobileitem img={"https://phonedb.net/img/samsung_w24_flip.jpg"} name={"SM-W7024 W45 Flip 5G"} price={"Up to 40% off"}/>
                        </div>
                    </div>

                </div>
                <div>
                <Footer/>
                </div>
            </>
        );
    }
}