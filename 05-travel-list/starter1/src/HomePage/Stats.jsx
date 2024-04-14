function Stats({items}) {
    if(!items.length){
        return <footer className="stats">
            <em>Start adding some items to your packing list!</em>
        </footer>
    }
    const  numItems = items.length;
    const numberOfPacked = items.filter((item) => item.packed).length
    const percentage = Math.round((numberOfPacked/numItems)*100);
    return <footer className="stats">
        {percentage === 100 ? 'You completed the entire list!' : `You have ${numItems} items on your list, and you already packed ${percentage}%`}
    </footer>
}
export default Stats;