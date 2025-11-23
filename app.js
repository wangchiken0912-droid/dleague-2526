// ======== SCHEDULE PAGE RENDER ======== //

async function loadSchedule() {
    const container = document.getElementById("schedule-container");
    if (!container) return; // not on schedule.html

    const res = await fetch("data.json");
    const data = await res.json();

    // group by matchday
    const groups = {};
    data.forEach(match => {
        if (!groups[match.matchday]) groups[match.matchday] = [];
        groups[match.matchday].push(match);
    });

    Object.keys(groups).forEach(day => {
        const md = document.createElement("div");
        md.className = "matchday-block";

        md.innerHTML = `
            <h3 class="matchday-title">比賽日 ${day}｜${groups[day][0].date}</h3>
        `;

        groups[day].forEach(m => {
            const card = document.createElement("div");
            card.className = "match-card";

            const eventsHTML = m.events
                .map(ev => `
                    <div class="event-row ${ev.team}">
                        <span class="minute">${ev.minute}'</span>
                        <span class="player">${ev.player}</span>
                    </div>
                `)
                .join("");

            card.innerHTML = `
                <div class="teams">
                    <div class="team home">${m.home}</div>
                    <div class="score">${m.score}</div>
                    <div class="team away">${m.away}</div>
                </div>

                <div class="meta">
                    <span>${m.league}</span>
                    <span>${m.round}</span>
                </div>

                <div class="events">
                    ${eventsHTML}
                </div>
            `;

            md.appendChild(card);
        });

        container.appendChild(md);
    });
}

loadSchedule();
