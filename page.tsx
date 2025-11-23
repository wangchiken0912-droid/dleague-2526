import { leagueConfig } from "../data/league.config";
import { getNextMatch } from "../data/fixtures";

export default function Home() {
  const nextMatch = getNextMatch();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-10 space-y-10">
        {/* 聯賽標題區 */}
        <header className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-slate-900">
            <img
              src={leagueConfig.logoUrl}
              alt={leagueConfig.nameZh}
              className="max-h-14 max-w-14 object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {leagueConfig.nameZh}
            </h1>
            <p className="text-xs text-slate-300 sm:text-sm">
              {leagueConfig.nameEn} · {leagueConfig.season}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              比賽場地：{leagueConfig.venueName}（{leagueConfig.city}）
            </p>
          </div>
        </header>

        {/* 下一場比賽區塊 */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Next Fixture
          </p>

          {nextMatch ? (
            <div className="mt-3 space-y-4">
              <div className="text-sm text-slate-300">
                <div>
                  {nextMatch.date} · {nextMatch.time}
                </div>
                <div className="text-xs text-slate-400">
                  組別：{nextMatch.division} · 第 {nextMatch.round} 輪 · 場地：
                  {nextMatch.venue}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 text-right">
                  <div className="text-xs text-slate-400">主隊</div>
                  <div className="text-sm font-semibold">
                    {nextMatch.homeTeamName}
                  </div>
                </div>
                <div className="px-3 text-center text-xs text-slate-300">vs</div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400">客隊</div>
                  <div className="text-sm font-semibold">
                    {nextMatch.awayTeamName}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-3 text-sm text-slate-300">
              目前沒有即將開打的比賽。
            </p>
          )}
        </section>

        {/* 後續擴充區塊 */}
        <section className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-400">
          這裡之後會放：
          <ul className="mt-1 list-disc pl-5">
            <li>完整賽程列表頁（/fixtures）</li>
            <li>L1 / L2 積分榜頁（/table）</li>
            <li>球隊列表頁（/clubs）</li>
            <li>YouTube 精選影片模組</li>
          </ul>
          目前先讓首頁與下一場比賽正常顯示，之後再逐步升級。
        </section>
      </div>
    </main>
  );
}
