function CommonDate() {

    this.plusDate       = plusDate;
    this.currentDate    = currentDate;
    this.thisWeek       = thisWeek;
    this.lastWeek       = lastWeek;
    this.thisMonth      = thisMonth;

    //日期+运算，加负数即前几天，加正数即后几天
    function plusDate(days, format) {
        format = format || 'YYYY-M-D';
        if(!days){
            return currentDate(format);
        }

        var date = new Date();
        if(days > 0){
            return moment(date).add(days, 'days').format(format);
        }else{
            days = Math.abs(days);
            return moment(date).subtract(days, 'days').format(format);
        }
    }

    // 获取当前日期
    function currentDate(format) {
        format = format || 'YYYY-M-D';
        var date = new Date();
        return moment(date).format(format);
    }

    function thisMonth() {
        var date = new Date();
        var defaultDate = {};
        defaultDate.startDate = moment(date).subtract(1, 'M').format('YYYY-M-D');
        defaultDate.endDate = moment(date).format('YYYY-M-D');

        return defaultDate;
    }

    function thisWeek() {
        var date = new Date();
        var days = date.getDay();
        var thisWeek = {};
        thisWeek.endDate = moment(date).format('YYYY-M-D');
        thisWeek.startDate = moment(date).subtract(days - 1, 'days').format('YYYY-M-D');
        
        return thisWeek;
    }

    function lastWeek() {
        var date = new Date();
        var days = date.getDay();
        var lastWeek = {};
        lastWeek.endDate = moment(date).subtract(days, 'days').format('YYYY-M-D');
        lastWeek.startDate = moment(date).subtract(6 + days, 'days').format('YYYY-M-D');
        
        return lastWeek;
    }
}
