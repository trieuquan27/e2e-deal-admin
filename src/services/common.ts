import fs from "fs";
class Common {
  static writeJson = ({ data, name }: { data: any; name: string }) => {
    try {
      fs.writeFileSync(`${name}.json`, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export default Common;
