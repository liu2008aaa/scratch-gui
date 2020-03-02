import classNames from 'classnames';
import React from 'react';

import styles from './footer.css';

import qrcodeIcon from './qrcode.jpg';

const Footer = function () {
    return (
        <div className={classNames(styles["footer-view"])}>
            <div className={classNames(styles["footer"])}>
                <div className={classNames(styles["footer-title-view"])}>
                    <span className={classNames(styles['about_title'])} >关于我们</span>
                    <a  href="http://www.dashdot.cn/campus/" target="_blank">
                        <span className={classNames(styles['about_school'])} >校区分布</span>
                    </a>
                    <a   href="http://www.dashdot.cn/about/" target="_blank">
                        <span className={classNames(styles['about'])} >关于我们</span>
                    </a>
                </div>
                <div className={classNames(styles["footer-title-view"])}>
                    <span className={classNames(styles['contact_title'])} >联系我们</span>
                    <span className={classNames(styles['contact_address'])}>地址：成都市龙泉驿区桃都大道888号吾悦广场1号门麦当劳对面下沉广场</span>
                    <span className={classNames(styles['contact_phone'])} >电话：028-88450665</span>
                    <span  >
                        <img className={classNames(styles['qrcodeIcon'])} src={qrcodeIcon}/>
                     </span>
                </div>
            </div>
            <a className={classNames(styles['copyright'])}  href="#">蜀ICP备16003557号</a>
        </div>
    );
};
export default Footer;
