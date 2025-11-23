export type Division = "L1" | "L2";

export interface Team {
  id: string;
  name: string;
  division: Division;
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
  logoUrl: string;
}

export const teams: Team[] = [
  {
    id: "chiayi-zhuoluoshan-fc",
    name: "嘉義諸羅山FC",
    division: "L1",
    primaryColor: "#90d1d2",
    secondaryColor: "#0e3679",
    logoUrl: "https://cdn.store-assets.com/s/783745/f/16146068.png"
  },
  {
    id: "jiuhao-correctional",
    name: "酒號矯正署",
    division: "L1",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    logoUrl: "https://cdn.store-assets.com/s/783745/f/16146063.png"
  },
  {
    id: "tongque-fc",
    name: "銅雀足球俱樂部",
    division: "L1",
    primaryColor: "#2a2b30",
    secondaryColor: "#ffffff",
    logoUrl: "https://cdn.store-assets.com/s/783745/f/16146064.png"
  },
  {
    id: "cheng-gong-guan",
    name: "陳公舘",
    division: "L1",
    primaryColor: "#000000",
    secondaryColor: "#8ac4e1",
    logoUrl: "https://cdn.store-assets.com/s/783745/f/16146061.png"
  },
  {
    id: "lu-zhu-club",
    name: "鹿逐俱樂部",
    division: "L2",
    primaryColor: "#385984",
    secondaryColor: "#ffffff",
    logoUrl: "https://cdn.store-assets.com/s/783745/f/16146059.png"
  },
  {
    id: "pingtung-wild-apes",
    name: "屏東野猿足球俱樂部",
    division: "L2",
    primaryColor: "#563e92",
    secondaryColor: "#ffffff",
    logoUrl: "https://cdn.store-assets.com/s/783745/f/16146062.png"
  },
  {
    id: "feng-dog",
    name: "瘋Dog",
    division: "L2",
    primaryColor: "#ed8992",
    secondaryColor: "#000000",
    logoUrl: "https://cdn.store-assets.com/s/783745/f/16146067.png"
  },
  {
    id: "niaoshi-fc",
    name: "鳥仕足球俱樂部",
    division: "L2",
    primaryColor: "#2f4d4f",
    secondaryColor: "#ffffff",
    logoUrl: "https://cdn.store-assets.com/s/783745/f/16146060.png"
  },
  {
    id: "ppi-tainan-fc",
    name: "PPI TAINAN FC",
    division: "L2",
    primaryColor: "#004026",
    secondaryColor: "#ffffff",
    accentColor: "#000000",
    logoUrl: "https://cdn.store-assets.com/s/783745/f/16146066.png"
  },
  {
    id: "canglong-fc",
    name: "蒼龍FC",
    division: "L2",
    primaryColor: "#0c2450",
    secondaryColor: "#000000",
    accentColor: "#ffffff",
    logoUrl: "https://cdn.store-assets.com/s/783745/f/16146065.png"
  }
];

export function findTeamById(id: string): Team | undefined {
  return teams.find((t) => t.id === id);
}
