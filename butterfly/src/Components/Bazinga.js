import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import Style from '../Styles/Bazinga.module.css';
// Images
import bazingaIndex from '../Images/bazingaIndex.JPG';

const Bazinga = () => {
    const [bazingaTitle, setBazingaTitle] = useState("پیتزا سفارش بده.");
    const [bazingaDes, setBazingaDes] = useState("بهترین پایان برای هر چیز خوبی، زمانیه که می‌تونی پیتزا بخوری و استراحت کنی و چه استراحتی بهتر از سیت‌کام دیدن؟");
    return (
        <div className={Style.container}>
            <img className={Style.bazingaIndex} src={bazingaIndex} />
            <div className={Style.bazingaContainer}>
                <h1 className={Style.bazingaTitle}>{bazingaTitle}</h1>
                <p className={Style.bazingaDes}>{bazingaDes}</p>
                <Link to="/bazinga" className={Style.bazingaBtn}>بفشار!</Link>
            </div>
        </div>
    );
};

export default Bazinga;