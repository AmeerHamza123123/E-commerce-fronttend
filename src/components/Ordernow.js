import React from 'react'
import formalitemshoe from "../images/formalitemshoe.jpg";
import itemshoe from "../images/itemshoe.jpg";
import jogaritemshoe from "../images/jogarsitemshoe.jpg";

import shirt from "../images/shirt.jpg";
import shirt1 from "../images/shirt1.jpg";
import coat from "../images/coat.jpg";

import wintercoat from "../images/wintercoat.jpg";
import jacket from "../images/jacket.jpg";
import colorjacket from "../images/colorjacket.jpg";


export default function Ordernow() {
    return (
        <>
            <div className='ordernow'>
                <div className="shoes">
                    <h1>Shoes</h1>
                    <div className="items">
                        <div className="orderitem">
                            <img src={formalitemshoe} alt="" />
                            <div className="detail">
                                <p>Lorem ipsum dolor sit.</p>
                                <h4 className="price">US $2</h4>
                            </div>
                            <button className="orderbutton">Ordernow</button>
                        </div>
                        <div className="orderitem">
                            <img src={itemshoe} alt="" />
                            <div className="detail">
                                <p>Lorem ipsum dolor sit.</p>
                                <h4 className="price">US $2</h4>
                            </div>
                            <button className="orderbutton">Ordernow</button>
                        </div>

                        <div className="orderitem">
                            <img src={jogaritemshoe} alt="" />
                            <div className="detail">
                                <p>Lorem ipsum dolor sit.</p>
                                <h4 className="price">US $2</h4>
                            </div>
                            <button className="orderbutton">Ordernow</button>
                        </div>
                    </div>
                </div>
                <div className="shoes">
                    <h1>Shirt</h1>
                    <div className="items">
                        <div className="orderitem">
                            <img src={shirt} alt="" />
                            <div className="detail">
                                <p>Lorem ipsum dolor sit.</p>
                                <h4 className="price">US $2</h4>
                            </div>
                            <button className="orderbutton">Ordernow</button>
                        </div>

                        <div className="orderitem">
                            <img src={shirt1} alt="" />
                            <div className="detail">
                                <p>Lorem ipsum dolor sit.</p>
                                <h4 className="price">US $2</h4>
                            </div>
                            <button className="orderbutton">Ordernow</button>
                        </div>

                        <div className="orderitem">
                            <img src={coat} alt="" />
                            <div className="detail">
                                <p>Lorem ipsum dolor sit.</p>
                                <h4 className="price">US $2</h4>
                            </div>
                            <button className="orderbutton">Ordernow</button>
                        </div>

                    </div>
                </div>
                <div className="shoes">
                    <h1>yahoo! Winter</h1>
                    <div className="items">
                        <div className="orderitem">
                            <img src={colorjacket} alt="" />
                            <div className="detail">
                                <p>Lorem ipsum dolor sit.</p>
                                <h4 className="price">US $2</h4>
                            </div>
                            <button className="orderbutton">Ordernow</button>
                        </div>

                        <div className="orderitem">
                            <img src={jacket} alt="" />
                            <div className="detail">
                                <p>Lorem ipsum dolor sit.</p>
                                <h4 className="price">US $2</h4>
                            </div>
                            <button className="orderbutton">Ordernow</button>
                        </div>

                        <div className="orderitem">
                            <img src={wintercoat} alt="" />
                            <div className="detail">
                                <p>Lorem ipsum dolor sit.</p>
                                <h4 className="price">US $2</h4>
                            </div>
                            <button className="orderbutton">Ordernow</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
