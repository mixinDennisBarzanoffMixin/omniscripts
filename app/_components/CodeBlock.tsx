export default function CodeBlock() {
    return <div className="relative animate-slide-in-right">
    <div className="rounded-2xl  bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">
      {/* Window chrome + Tabs */}
      <div className="px-4 pt-3 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/70">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-md bg-red-400"></span>
            <span className="h-3 w-3 rounded-md bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-md bg-green-400"></span>
            <div className="ml-3 flex items-end gap-1">
              <div className="relative -mb-px px-3 py-1.5 bg-white text-xs font-medium rounded-t-sm shadow-sm outline-1 outline-slate-200 z-[1]">
                app.svelte
              </div>
              <div className="px-3 py-1.5 rounded-t-xl text-xs font-medium text-slate-500 bg-slate-100/80 shadow-sm -mb-[2px] translate-y-[2px] z-[0]">
                button.svelte
              </div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">Svelte</div>
        </div>
      </div>

      {/* Code area: white theme, line numbers, hover highlight */}
      <div className="bg-white rounded-b-2xl relative z-10">
        <div className="font-mono text-[13px] leading-7">
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 first:pt-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">1</span>
            <span><span className="text-blue-600">&lt;script&gt;</span></span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">2</span>
            <span><span className="text-fuchsia-600">  let</span> name <span className="text-fuchsia-600">=</span> <span className="text-emerald-600">'world'</span>;</span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">3</span>
            <span><span className="text-fuchsia-600">  export let</span> count <span className="text-fuchsia-600">=</span> <span className="text-amber-600">0</span>;</span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">4</span>
            <span><span className="text-fuchsia-600">  function</span> increment() {"{"}</span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">5</span>
            <span>&nbsp;&nbsp;count <span className="text-fuchsia-600">+=</span> <span className="text-amber-600">1</span>;</span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">6</span>
            <span>{"}"}</span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">7</span>
            <span><span className="text-blue-600">&lt;/script&gt;</span></span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">8</span>
            <span>&nbsp;</span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">9</span>
            <span><span className="text-rose-600">&lt;h2</span> <span className="text-cyan-700">class</span><span className="text-slate-500">=</span><span className="text-emerald-700">"title"</span><span className="text-rose-600">&gt;</span>Everything is a Component<span className="text-rose-600">&lt;/h2&gt;</span></span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">10</span>
            <span><span className="text-rose-600">&lt;p&gt;</span>We use modern technologies to build fast apps.<span className="text-rose-600">&lt;/p&gt;</span></span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">11</span>
            <span><span className="text-rose-600">&lt;button</span> <span className="text-cyan-700">on:click</span><span className="text-slate-500">=</span>{"{"}increment{"}"} <span className="text-cyan-700">class</span><span className="text-slate-500">=</span><span className="text-emerald-700">"btn"</span><span className="text-rose-600">&gt;</span>Clicks: {"{"}count{"}"}<span className="text-rose-600">&lt;/button&gt;</span></span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">12</span>
            <span>&nbsp;</span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">13</span>
            <span><span className="text-blue-600">&lt;style&gt;</span></span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">14</span>
            <span>  .title {"{"} color: <span className="text-sky-600">#0ea5e9</span>; font-weight: <span className="text-amber-600">700</span>; {"}"}</span>
          </div>
          <div className="group/line grid grid-cols-[2rem_1fr] gap-3 px-4 last:pb-4 hover:bg-sky-50/70 hover:border-l-4 border-l-transparent hover:border-sky-400 transition-all">
            <span className="select-none text-slate-400/80 tabular-nums">15</span>
            <span><span className="text-blue-600">&lt;/style&gt;</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>;
}