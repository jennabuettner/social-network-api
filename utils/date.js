function formatDate(time){
    var date = new Date(time)

    var d = date.getDate();
    var m = date.getMonth()+ 1;
    var y = date.getFullYear();

    return `${d}/${m}/${y}`

}

module.exports = formatDate;