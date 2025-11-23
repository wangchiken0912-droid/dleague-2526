import type { Division } from "./teams";
import { leagueConfig } from "./league.config";

export type MatchStatus = "SCHEDULED" | "LIVE" | "FINISHED";

export interface Fixture {
  id: string;
  division: Division;
  round: number;
  date: string;
  time: string;
  kickOffISO: string;
  venue: string;
  homeTeamName: string;
  awayTeamName: string;
  homeTeamId: string;
  awayTeamId: string;
  status: MatchStatus;
  homeScore?: number | null;
  awayScore?: number | null;
}

const VENUE = leagueConfig.venueName;

function toISO(date: string, time: string): string {
  return `${date}T${time}:00+08:00`;
}

export const fixtures: Fixture[] = [
  {
    id: "2025-10-19-L2-R1-1",
    division: "L2",
    round: 1,
    date: "2025-10-19",
    time: "10:00",
    kickOffISO: toISO("2025-10-19", "10:00"),
    venue: VENUE,
    homeTeamName: "鹿逐俱樂部",
    awayTeamName: "屏東野猿足球俱樂部",
    homeTeamId: "lu-zhu-club",
    awayTeamId: "pingtung-wild-apes",
    status: "SCHEDULED"
  },
  {
    id: "2025-10-19-L2-R1-2",
    division: "L2",
    round: 1,
    date: "2025-10-19",
    time: "11:00",
    kickOffISO: toISO("2025-10-19", "11:00"),
    venue: VENUE,
    homeTeamName: "瘋Dog",
    awayTeamName: "蒼龍FC",
    homeTeamId: "feng-dog",
    awayTeamId: "canglong-fc",
    status: "SCHEDULED"
  },
  {
    id: "2025-10-19-L1-R1-1",
    division: "L1",
    round: 1,
    date: "2025-10-19",
    time: "13:00",
    kickOffISO: toISO("2025-10-19", "13:00"),
    venue: VENUE,
    homeTeamName: "嘉義諸羅山FC",
    awayTeamName: "酒號矯正署",
    homeTeamId: "chiayi-zhuoluoshan-fc",
    awayTeamId: "jiuhao-correctional",
    status: "SCHEDULED"
  },
  {
    id: "2025-10-19-L1-R1-2",
    division: "L1",
    round: 1,
    date: "2025-10-19",
    time: "14:00",
    kickOffISO: toISO("2025-10-19", "14:00"),
    venue: VENUE,
    homeTeamName: "銅雀足球俱樂部",
    awayTeamName: "陳公舘",
    homeTeamId: "tongque-fc",
    awayTeamId: "cheng-gong-guan",
    status: "SCHEDULED"
  },
  {
    id: "2025-10-19-L2-R1-3",
    division: "L2",
    round: 1,
    date: "2025-10-19",
    time: "15:00",
    kickOffISO: toISO("2025-10-19", "15:00"),
    venue: VENUE,
    homeTeamName: "PPI TAINAN FC",
    awayTeamName: "鳥仕足球俱樂部",
    homeTeamId: "ppi-tainan-fc",
    awayTeamId: "niaoshi-fc",
    status: "SCHEDULED"
  }
];

export function getNextMatch(reference: Date = new Date()): Fixture | undefined {
  const upcoming = fixtures
    .filter((f) => new Date(f.kickOffISO).getTime() >= reference.getTime())
    .sort(
      (a, b) =>
        new Date(a.kickOffISO).getTime() - new Date(b.kickOffISO).getTime()
    );

  return upcoming[0];
}
