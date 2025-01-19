import { ISheetData } from "@/models/dashboard";
import { useEffect, useState } from "react";
import { read, utils } from "xlsx";

const useSheetData = (): { sheetData: ISheetData; loading: boolean } => {
  const [loading, setLoading] = useState(true);
  const [sheetData, setSheetData] = useState<ISheetData>({});
  useEffect(() => {
    (async () => {
      setLoading(true);
      const f = await fetch("/data.xlsx");
      const ab = await f.arrayBuffer();

      const wb = read(ab);

      const sheet1 = wb.Sheets[wb.SheetNames[0]];
      const sheet2 = wb.Sheets[wb.SheetNames[1]];
      const sheet3 = wb.Sheets[wb.SheetNames[2]];
      const data1: any[] = utils.sheet_to_json<any>(sheet1);
      const data2: any[] = utils.sheet_to_json<any>(sheet2);
      const data3: any[] = utils.sheet_to_json<any>(sheet3);
      const finalData = { sheet1: data1, sheet2: data2, sheet3: data3 };

      setSheetData(finalData);
      setLoading(false);
    })();
  }, []);

  return { sheetData, loading };
};

export default useSheetData;
