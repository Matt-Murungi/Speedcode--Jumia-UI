import React from 'react'

import "./JumiaMenu.css";

import JumiaMenuItem from './JumiaMenuItem'

export default function JumiaMenu() {
    return (
        <div className="jumiaMenu">
       <JumiaMenuItem icon="access_alarm" name="Supermarket"/>
       <JumiaMenuItem icon="phone_android" name="Phones & Tables"/>
       <JumiaMenuItem icon="home" name="Home & Office"/>
       <JumiaMenuItem icon="access_alarm" name="Electronics"/>
       <JumiaMenuItem icon="colorize" name="Health & Beauty"/>
       <JumiaMenuItem icon="leak_add" name="Fashion"/>
       <JumiaMenuItem icon="computer" name="Computing"/>
       <JumiaMenuItem icon="directions_bike" name="Sporting Goods"/>
       <JumiaMenuItem icon="face" name="Baby Products"/>
       <JumiaMenuItem icon="developer_board" name="Gaming"/>
       <JumiaMenuItem icon="line_style" name="Garden & Outdoors"/>
       <JumiaMenuItem icon="more_horiz" name="Other categories"/>
        
      </div>
    
    )
}
