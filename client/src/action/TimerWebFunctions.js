

// export const onChange = (e, setItem, Item) => {
//     setItem({ ...Item, [e.target.name]: e.target.value });
// }
export const onChange = (event, setItem, Item, wysiwyg, eventInput, evenCategoryInput, eventLabelInput) => {
    const { name, value, type, checked } = event.target
    debugger
    type === "checkbox" ?
        !Item.withGoogleAnalytics ?
            setItem({
                ...Item,
                wysiwyg: `<a onclick="gtag('event', ${eventInput}, {'event_category' : ${evenCategoryInput},'event_label' : ${eventLabelInput} });"> ${typeof Item.wysiwygEditor === 'undefined' ? Item.wysiwyg : Item.wysiwygEditor} </a>`,
                [name]: checked
            }) :
            setItem({
                ...Item,
                wysiwyg: `${typeof Item.wysiwygEditor === 'undefined' ? Item.wysiwyg : Item.wysiwygEditor}`,
                [name]: checked
            })
        :
        setItem({
            ...Item,
            [name]: value
        })
}

export const handleChangeOpemHour = (el, setItem, Item) => {
    let inputName = el.target.name;
    let inputValue = el.target.value;
    let statusCopy = Object.assign({}, Item);
    statusCopy.timeSchedule[inputName].openHour = inputValue;
    setItem(statusCopy);
}


export const handleChangeCloseHour = (el, setItem, Item) => {
    let inputName = el.target.name;
    let inputValue = el.target.value;
    let statusCopy = Object.assign({}, Item);
    statusCopy.timeSchedule[inputName].closeHour = inputValue;
    setItem(statusCopy);
}


export const onSubmit = (e, item, current, addItem, updateItem, setCurrent, setItem) => {
    e.preventDefault();
    if (item.divId !== "" && item.url !== "" && item.name !== "") {// check if DIVID is defined
        current._id ? updateItem(item, current) : addItem(item);
        // function from ItemContext
        setCurrent(current);
        saved(item, setItem);
    }
    else saved(item, setItem);
};


export const saved = (item, setItem) => {//UI notificiation function
    setItem({ ...item, saveAlert: true })
    setTimeout(() => {
        setItem({ ...item, saveAlert: false })
    }, 2000)
}