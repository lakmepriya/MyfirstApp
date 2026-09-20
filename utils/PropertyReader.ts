import * as path from "path";
import PropertiesReader from "properties-reader";

const configPath = path.resolve(
    __dirname,
    "../property/config.properties"
);

const properties = PropertiesReader({
    sourceFile: configPath
});

export function getConfig(){
    return {
       url     : properties.get("url") as string,
       username : properties.get("username") as string,
       password : properties.get("password") as string
    }
}
