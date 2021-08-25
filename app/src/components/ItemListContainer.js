import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
        <>
        <p>{props.text}</p>
        <ItemCount stock={5} onAdd={()=>{}} initial={1} />
        </>
    );
}
 
export default ItemListContainer;