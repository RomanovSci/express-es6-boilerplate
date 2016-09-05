/**
 * Date helper module
 */
class DateHelper {

  constructor() {
    this.DAY_IN_MILISECONDS = 1000 * 60 * 60 * 24;
  }

  /**
   * Get dates range
   * @param  {Object} startDate 
   * @param  {Object} endDate   
   * @return {Array}  Array with date range
   */
  getDatesRange(startDate, endDate) { 
    let dateArray = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dateArray.push(currentDate);
      currentDate = this.addDaysToDate(1, currentDate);
    }
    
    return dateArray;
  }

  /**
   * Add days to date
   * @param  {Number}  daysCount  Days count
   * @param  {Object}  fromDate   Date object
   * @return {Object}  Date object
   */
  addDaysToDate(daysCount, fromDate) {
    let _fromDate = !fromDate 
      ? new Date() 
      : new Date(fromDate.getTime());

    return new Date(_fromDate.setTime(_fromDate.getTime() + daysCount * this.DAY_IN_MILISECONDS));
  }

  /**
   * Parse date from straing
   * @param  {String} dateStr   Date string (Example: 01.06.1994)
   * @param  {String} splitter  Date sp;itter ('.', '-', '/')
   * @return {Object}           Date object from string          
   */
  toDate(dateStr, splitter) {
    let parts = dateStr.split(splitter);
    
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  /**
   * Get day difference by dates
   * @return {[type]} [description]
   */
  getDayDiff(firstDate, secondDate) {
    let diff = Math.round((firstDate.getTime() - secondDate.getTime()) / this.DAY_IN_MILISECONDS);
  
    return (diff < 0 ? 0 : diff);
  }

  /**
   * Format date
   * @param  {Object} date  
   * @return {String}
   */
  formateDate(date) { 
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if(dd < 10) {
      dd = '0' + dd;
    } 
    
    if(mm < 10) {
      mm = '0' + mm;
    }

    return dd + '.' + mm + '.' + yyyy;
  }
}

export default new DateHelper();