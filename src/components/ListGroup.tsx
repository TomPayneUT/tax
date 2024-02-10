import { useState } from "react";

interface Props {
    items: string[];
    rates: Number[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, rates, heading, onSelectItem}: Props) {

    
    
    //hook - tap into react component to change data/state
    //don't mess with DOM directly... change state and it will rerender
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return <>
        <h1>{heading}</h1>
        <ul className="list-group">
            
            {items.map(
                (item, index) => 
                <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                    key={item}
                    onClick={() => {
                        setSelectedIndex(index)
                        onSelectItem(item);
                    }}>{item} : {''+rates[index]}</li>
                )
            }
        </ul>
        </>
}

export default ListGroup;