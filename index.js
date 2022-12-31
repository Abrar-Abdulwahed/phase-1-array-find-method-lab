function superbowlWin(records) {
    let win =  records.find((element) => {
        return element.result === "W";
    });
    if(win !== undefined)
        return win.year;
    return undefined
}
