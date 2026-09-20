import { promises as fs } from 'fs';
import { parseStringPromise } from "xml2js";

export async function readXml(filepath:string) {

    const xmlData = await fs.readFile(filepath, "utf-8");
    const result = await parseStringPromise(xmlData);
    return result;
    
}