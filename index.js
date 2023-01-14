function superbowlWin(records) {
    let win =  records.find(elem => elem.result === "W");
    // if(win !== undefined)
    //     return win.year;
    // return win
    return win ? win.year: undefined;
}
