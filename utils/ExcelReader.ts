import * as XLSX from "xlsx";

export function getExcelData(sheetName:string){
    const workBook = XLSX.readFile("testData/UserData.xlsx");
    // console.log(workBook.SheetNames);
    const workSheet = workBook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(workSheet);

}
