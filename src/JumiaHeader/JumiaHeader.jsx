import React from 'react';
import "./JumiaHeader.css";
import JumiaMenu from './JumiaMenu/JumiaMenu';

export default function JumiaHeader() {
    return (
        <div className="jumiaHeader">
       <JumiaMenu />

        <img
          src="https://ug.jumia.is/cms/2021/w17/UG_w16_UG_W17_New_customer_Vouchers_7.png"
          alt="jumia image"
          className="jumiaHeader__image"
          srcset=""
        />
      </div>
    )
}
