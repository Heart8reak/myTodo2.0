import React from 'react'
import './ListItems.css'
import FlipMove from 'react-flip-move'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItems(props) {
    const items = props.items
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                {/* {item.text} */}
                <input
                    type='text'
                    id={item.key}
                    value={item.text}
                    onChange={(e) => { props.setUpdate(e.target.value, item.key) }}
                />
                <span>
                    <FontAwesomeIcon
                        className="faicons"
                        onClick={() => {
                            props.deleteItem(item.key)
                        }}
                        icon="trash"
                    />
                </span>
            </p>
        </div>
    })
    return <div>
        <FlipMove duration={500} easing="ease-in-out">
            {listItems}
        </FlipMove>
    </div>

}

export default ListItems;