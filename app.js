// 切換頁面
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// 戰報生成
function generateReport() {
  const A = document.getElementById("teamA").value;
  const B = document.getElementById("teamB").value;
  const score = document.getElementById("score").value;
  const goals = document.getElementById("goals").value;

  const text =
`${A} vs ${B}
比數：${score}

進球紀錄：
${goals}

#DLEAGUE`;

  document.getElementById("report-output").value = text;
}

function copyReport() {
  const output = document.getElementById("report-output");
  output.select();
  document.execCommand("copy");
  alert("已複製");
}

// 載入賽程／積分（現在讀 data.json）
fetch("data.json")
  .then(r => r.json())
  .then(data => {
    renderSchedule(data.schedule);
    renderStandings(data.standings);
  });

// 顯示賽程
function renderSchedule(matches) {
  const box = document.getElementById("schedule-list");
  box.innerHTML = matches.map(m => `
    <div class="card">
      <strong>${m.teamA} vs ${m.teamB}</strong>
      <br>${m.date} @ ${m.field}
    </div>
  `).join("");
}

// 顯示積分榜
function renderStandings(list) {
  const box = document.getElementById("standings");
  box.innerHTML = list.map((t,i) => `
    <div>${i+1}. ${t.team} - ${t.points} 分</div>
  `).join("");
}
