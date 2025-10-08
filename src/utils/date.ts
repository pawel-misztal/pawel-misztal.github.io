import { convertOffsetToTimes } from "motion";

export function dateDiff(dateA:Date, dateB:Date) {
  
  let biggerDate = dateA.getTime();
    let smallerDate = dateB.getTime();
    if(biggerDate < smallerDate)
      [smallerDate, biggerDate] = [biggerDate, smallerDate]
    const yearsCoding = biggerDate - smallerDate
    const diff = new Date(yearsCoding);
    return [diff.getUTCDate(), diff.getUTCMonth(), diff.getUTCFullYear() - 1970 ]
    // console.log("codingyears",yearsCoding, biggerDate, smallerDate, diff.getFullYear() - 1970);
}