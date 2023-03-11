const setLenght = (number) => (number < 10 ? "0" + number : number);

const formatdatetime = (dateTime) => {
    const dt = new Date(dateTime);
    const years = dt.getFullYear();
    const months = setLenght(dt.getMonth() + 1);
    //const months = dt.getMonth() + 1
    // months = months<10 ? '0'+months :months;
    const date = setLenght(dt.getDate());
    // date = date< 10?"0"+date: date;

    const hours = setLenght(dt.getHours());
    //hours = hours < 10? "0" +hours : hours;
    const minutes = setLenght(dt.getMinutes());
    const seconds = setLenght(dt.getSeconds());

    const getDate = `${years}-${months}-${date}`;
    const getTime = `${hours}:${minutes}:${seconds}`;
    const getDatetime = `${getDate} ${getTime}`;
    return { getDate, getTime, getDatetime };
};
module.exports = formatdatetime;