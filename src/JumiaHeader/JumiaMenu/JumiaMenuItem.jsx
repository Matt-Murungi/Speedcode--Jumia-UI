import React from 'react'
import "./JumiaMenuItem.css";
export default function JumiaMenuItem({icon, name}) {
    return (
        <div className="jumiaMenuItem">
        <i class="material-icons">{icon}</i>
        <span className="jumiaMenuItemName">{name}</span>
        </div>
    )
}
