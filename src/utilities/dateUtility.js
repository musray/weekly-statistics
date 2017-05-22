const msOfADay = 24 * 60 * 60 * 1000;

// getThisWeek, 根据当前日期，计算出当前一周七天的各自日期
// 返回值是含有7个Date类型数据的Array
export const getThisWeek = (dateObj = new Date()) => {
    let daysOfWeek = ['', '', '', '', '', '', ''];

    // 为了后续代码的易读性和简洁性，将周一的index定义为0，将周日的index定义为6。
    // 对JS而言，如果`now`是周一，now.getDate()反回1，所以再减1变为0；
    // 如果`now`是周日，getDate的返回值是0，所以加6变为6。
    const now = new Date(dateObj.getTime() + 60*60*1000*8); // 生成北京时间。
    const dateOfToday = now.getDay() === 0 ? now.getDay() + 6 : now.getDay() - 1;

    return daysOfWeek.map(( day, index ) => {

        if ( index !== dateOfToday ) {
            // index就是从0-6，代表周一到周日
            // 如果index不等于dateOfToday，那么计算一下当前index应该是哪一天

            // offset是今天和index代表的那一天的天数间隔
            let offset = index - dateOfToday;
            return new Date(now.getTime() + msOfADay * offset);
        } else {
            // 如果index等于dateOfToday,
            // 那么index就是今天
            return now;
        }

    });
};

export const getLastWeek = () => {
    const daysOfCurrentWeek = getThisWeek();
    return daysOfCurrentWeek.map(( day ) => new Date( day.getTime() - msOfADay * 7 ));
};