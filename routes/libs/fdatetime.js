const fdatetime = (data) => {
    if (data) {
        const datetime = new Date(data);
        const year = datetime.getFullYear();
        let month = datetime.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        const date =
            datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();

        const hours =
            datetime.getHours() < 10 ?
            "0" + datetime.getHours() :
            datetime.getHours();
        const minutes =
            datetime.getMinutes() < 10 ?
            "0" + datetime.getMinutes() :
            datetime.getMinutes();
        const seconds =
            datetime.getSeconds() < 10 ?
            "0" + datetime.getSeconds() :
            datetime.getSeconds();
        //!
        let newHours =
            datetime.getHours() < 10 ?
            "0" + datetime.getHours() :
            datetime.getHours();
        const reNewHours = Number(newHours) + 1;

        const getFDate = `${year}-${month}-${date}`;
        const getFDatetime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        const getFDatetimeMinutes = `${year}-${month}-${date} ${hours}:${minutes}`;
        const getFDatetimeHours = `${year}-${month}-${date} ${hours}:00:00`;
        //!
        const getFDatetimeHours_1Plus1 = `${year}-${month}-${date} ${hours}:00:01`;
        const getFDatetimeHours_2 = `${year}-${month}-${date} ${reNewHours}:00:00`;

        return {
            getFDate,
            getFDatetime,
            getFDatetimeHours,
            getFDatetimeMinutes,
            getFDatetimeHours_2,
            getFDatetimeHours_1Plus1,
        };
    }
    return { getFDate: null, getFDatetime: null };
};

module.exports = fdatetime;