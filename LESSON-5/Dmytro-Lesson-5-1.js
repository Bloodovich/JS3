function dateDiff(startDateStr = '1 Jan 2022', endDateStr = '1 Jan 2023', unit = 'seconds') {
    const startDate = Date.parse(startDateStr);
    const endDate = Date.parse(endDateStr);
    let result = Math.abs(endDate - startDate);
    const unitTime = {
      'seconds' : 1000,
      'minutes' :  (1000 * 60),
      'hours' : (1000 * 60 * 60),
      'days' : (1000 * 60 * 60 * 24),
    }
    return result / unitTime[unit]
  }
  console.log(dateDiff('02 Aug 1985', '03 Aug 1985'))
  console.log(dateDiff('31 Jan 2022', '03 Feb 2021', 'days'))