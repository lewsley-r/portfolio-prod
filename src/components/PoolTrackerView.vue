<template>
  <section id="pool-tracker" class="py-16 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div class="flex items-center space-x-2 text-xs text-[#00f0ff] font-mono mb-2">
            <span>// SCOREBOARD UTILITY</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pool Match <span class="neon-cyan-text">Tracker</span>
          </h2>
        </div>

        <div class="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400">
          <span>Mode: 8-Ball Competitive • Break & Run</span>
        </div>
      </div>

      <!-- Main Score Dashboard Container -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left Column: Player Match Counter & Input -->
        <div class="cyber-terminal p-6 rounded-xl border-[#00f0ff]/30 space-y-6">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 class="font-bold text-white text-base font-heading">Record Match Result</h3>
            <span class="cyber-badge-cyan text-[10px]">Live Session</span>
          </div>

          <div class="space-y-4 font-mono text-xs">
            <div class="space-y-2">
              <label class="text-slate-300 font-semibold block">Player 1 (Ronan)</label>
              <div class="flex items-center space-x-2">
                <button @click="p1Score = Math.max(0, p1Score - 1)" class="w-8 h-8 rounded bg-slate-900 border border-slate-700 text-white font-bold text-sm hover:bg-slate-800">-</button>
                <input v-model.number="p1Score" type="number" class="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-center text-lg font-bold text-[#00ff66]" />
                <button @click="p1Score++" class="w-8 h-8 rounded bg-slate-900 border border-slate-700 text-white font-bold text-sm hover:bg-slate-800">+</button>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-slate-300 font-semibold block">Player 2 (Opponent)</label>
              <div class="flex items-center space-x-2">
                <button @click="p2Score = Math.max(0, p2Score - 1)" class="w-8 h-8 rounded bg-slate-900 border border-slate-700 text-white font-bold text-sm hover:bg-slate-800">-</button>
                <input v-model.number="p2Score" type="number" class="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-center text-lg font-bold text-[#00f0ff]" />
                <button @click="p2Score++" class="w-8 h-8 rounded bg-slate-900 border border-slate-700 text-white font-bold text-sm hover:bg-slate-800">+</button>
              </div>
            </div>

            <div class="pt-2">
              <label class="text-slate-300 font-semibold block mb-1">Match Type</label>
              <select v-model="matchType" class="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs text-slate-200">
                <option value="8-Ball">8-Ball Main</option>
                <option value="9-Ball">9-Ball Quick</option>
                <option value="Straight Pool">Straight Pool</option>
              </select>
            </div>

            <button
              @click="recordMatch"
              class="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#00f0ff] to-purple-600 hover:from-[#00f0ff]/90 hover:to-purple-500 text-slate-950 font-bold text-xs shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
            >
              LOG MATCH RESULT
            </button>
          </div>
        </div>

        <!-- Center & Right Column: Analytics & Match History Stream -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Key Stats Cards -->
          <div class="grid grid-cols-3 gap-4 font-mono">
            <div class="cyber-terminal p-4 text-center border-[#00ff66]/30">
              <div class="text-xs text-slate-400">Total Matches</div>
              <div class="text-2xl font-bold text-white mt-1">{{ totalMatches }}</div>
            </div>
            <div class="cyber-terminal p-4 text-center border-[#00f0ff]/30">
              <div class="text-xs text-slate-400">Win Rate</div>
              <div class="text-2xl font-bold text-[#00ff66] mt-1">{{ winRate }}%</div>
            </div>
            <div class="cyber-terminal p-4 text-center border-purple-500/30">
              <div class="text-xs text-slate-400">Break & Runs</div>
              <div class="text-2xl font-bold text-purple-400 mt-1">7</div>
            </div>
          </div>

          <!-- Match Log Stream Table -->
          <div class="cyber-terminal rounded-xl overflow-hidden p-5 space-y-4 border-slate-800">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 class="font-bold text-white text-xs font-mono uppercase tracking-wider">Recent Logged Sessions</h3>
              <span class="text-[11px] text-slate-500 font-mono">Sync: Firebase DB</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left font-mono text-xs text-slate-300">
                <thead>
                  <tr class="border-b border-slate-800 text-[11px] text-slate-500">
                    <th class="py-2">Date</th>
                    <th class="py-2">Format</th>
                    <th class="py-2">Score (Ronan vs Opponent)</th>
                    <th class="py-2">Result</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/60">
                  <tr v-for="(m, idx) in history" :key="idx" class="hover:bg-slate-900/40">
                    <td class="py-2.5 text-slate-400">{{ m.date }}</td>
                    <td class="py-2.5 text-slate-300">{{ m.format }}</td>
                    <td class="py-2.5 font-bold text-white">{{ m.p1 }} - {{ m.p2 }}</td>
                    <td class="py-2.5">
                      <span :class="m.p1 > m.p2 ? 'text-[#00ff66] font-bold' : 'text-red-400 font-bold'">
                        {{ m.p1 > m.p2 ? 'VICTORY [W]' : 'DEFECT [L]' }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const p1Score = ref(5)
const p2Score = ref(2)
const matchType = ref('8-Ball')

const history = ref([
  { date: '2026-07-20', format: '8-Ball', p1: 7, p2: 3 },
  { date: '2026-07-15', format: '8-Ball', p1: 5, p2: 2 },
  { date: '2026-07-08', format: '9-Ball', p1: 6, p2: 4 },
  { date: '2026-06-28', format: '8-Ball', p1: 5, p2: 1 }
])

const totalMatches = computed(() => history.value.length)
const winRate = computed(() => {
  const wins = history.value.filter(m => m.p1 > m.p2).length
  return Math.round((wins / history.value.length) * 100)
})

const recordMatch = () => {
  history.value.unshift({
    date: new Date().toISOString().split('T')[0],
    format: matchType.value,
    p1: p1Score.value,
    p2: p2Score.value
  })
}
</script>
