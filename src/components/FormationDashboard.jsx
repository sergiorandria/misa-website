import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search, GraduationCap, GitBranch, BookOpen, BarChart3,
  ChevronRight, MapPin, User, Target, ArrowRight, Sparkles,
  Layers, Filter, X,
} from "lucide-react";
import {
  licenceParcours,
  masterParcours,
  roadmapLevels,
  categoryTags,
  careerOutcomes,
} from "../data/content";

/* ═══════════════════════════════════════════════════════
   Helper — flatten all UEs across all data
   ═══════════════════════════════════════════════════════ */
function getAllUEs() {
  const results = [];

  licenceParcours.forEach((p) => {
    Object.entries(p.ues).forEach(([levelKey, groups]) => {
      groups.forEach((group) => {
        group.forEach((item) => {
          results.push({
            name: item.name,
            tags: item.tags,
            level: levelKey,
            track: p.title,
            degree: "Licence",
          });
        });
      });
    });
  });

  Object.entries(masterParcours).forEach(([_key, data]) => {
    [
      ["m1", "M1 (S7-S8)"],
      ["m2", "M2 (S9-S10)"],
    ].forEach(([k, label]) => {
      data[k].forEach((group) => {
        group.forEach((item) => {
          results.push({
            name: item.name,
            tags: item.tags,
            level: label,
            track: data.title,
            degree: "Master",
          });
        });
      });
    });
  });

  return results;
}

/* ═══════════════════════════════════════════════════════
   Main Dashboard Component
   ═══════════════════════════════════════════════════════ */
export default function FormationDashboard({ initialView = "roadmap" }) {
  const [view, setView] = useState(initialView);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [activeNode, setActiveNode] = useState(null);
  const [compareLevel, setCompareLevel] = useState("m1");
  const searchRef = useRef(null);

  const allUEs = useMemo(() => getAllUEs(), []);

  const filteredUEs = useMemo(() => {
    let list = allUEs;
    if (activeTag !== "all") {
      list = list.filter((ue) => ue.tags.includes(activeTag));
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(
        (ue) =>
          ue.name.toLowerCase().includes(q) ||
          ue.track.toLowerCase().includes(q) ||
          ue.level.toLowerCase().includes(q)
      );
    }
    return list;
  }, [allUEs, activeTag, search]);

  const getTagColor = useCallback(
    (id) => categoryTags.find((t) => t.id === id)?.color || "#464444",
    []
  );

  const views = [
    { id: "roadmap", label: "PARCOURS LMD", icon: GitBranch },
    { id: "licence", label: "LICENCE", icon: BookOpen },
    { id: "master", label: "MASTER", icon: GraduationCap },
    { id: "explore", label: "EXPLORER", icon: Search },
    { id: "compare", label: "COMPARER", icon: BarChart3 },
  ];

  return (
    <div className="bg-white">
      {/* ── Dashboard Header ── */}
      <div className="bg-gradient-to-br from-[var(--color-misa-paper)] to-white border-b border-[var(--color-misa-line)]">
        <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-6">
          <div className="flex items-center gap-2 text-xs tracking-widest text-[var(--color-misa-red)] font-semibold dash-animate-in">
            <Sparkles size={14} />
            FORMATION — TABLEAU DE BORD
          </div>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight dash-animate-in stagger-1">
            Programme Académique
          </h1>
          <p className="mt-2 text-sm text-neutral-500 max-w-[600px] leading-relaxed dash-animate-in stagger-2">
            Explorez le cursus LMD — de la Licence au Master — avec une vue
            interactive du parcours, des matières et des spécialisations.
          </p>

          {/* ── View Mode Tabs ── */}
          <div className="mt-6 flex flex-wrap gap-2 dash-animate-in stagger-3">
            {views.map((v) => {
              const Icon = v.icon;
              return (
                <button
                  key={v.id}
                  onClick={() => setView(v.id)}
                  className={`view-tab flex items-center gap-2 ${
                    view === v.id ? "active" : ""
                  }`}
                >
                  <Icon size={14} />
                  {v.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {view === "roadmap" && (
          <RoadmapView
            activeNode={activeNode}
            setActiveNode={setActiveNode}
            getTagColor={getTagColor}
          />
        )}
        {view === "licence" && (
          <LicenceView
            search={search}
            activeTag={activeTag}
            getTagColor={getTagColor}
          />
        )}
        {view === "master" && (
          <MasterView
            search={search}
            activeTag={activeTag}
            getTagColor={getTagColor}
          />
        )}
        {view === "explore" && (
          <ExploreView
            search={search}
            setSearch={setSearch}
            activeTag={activeTag}
            setActiveTag={setActiveTag}
            filteredUEs={filteredUEs}
            getTagColor={getTagColor}
            searchRef={searchRef}
          />
        )}
        {view === "compare" && (
          <CompareView
            level={compareLevel}
            setLevel={setCompareLevel}
            getTagColor={getTagColor}
          />
        )}
      </div>

      {/* ── Career Outcomes Banner ── */}
      <CareerBanner getTagColor={getTagColor} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   View 1 — Interactive LMD Roadmap
   ═══════════════════════════════════════════════════════ */
function RoadmapView({ activeNode, setActiveNode, getTagColor }) {
  return (
    <div className="dash-animate-in">
      <SectionHeading
        icon={GitBranch}
        title="Parcours LMD Interactif"
        subtitle="Cliquez sur un niveau pour voir les détails"
      />

      {/* Horizontal roadmap */}
      <div className="mt-8 roadmap-horizontal">
        <div className="flex items-center gap-0 min-w-[700px] justify-center py-8">
          {roadmapLevels.map((level, idx) => (
            <div key={level.id} className="flex items-center">
              {/* Node */}
              <div
                className={`roadmap-node flex flex-col items-center ${
                  activeNode === level.id ? "active" : ""
                }`}
                style={{ color: level.color }}
                onClick={() =>
                  setActiveNode(activeNode === level.id ? null : level.id)
                }
              >
                <div className="node-glow" />
                <div className="node-ring" style={{ borderColor: level.color }} />
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition-shadow"
                  style={{
                    background: `linear-gradient(135deg, ${level.color}, ${level.color}dd)`,
                    boxShadow:
                      activeNode === level.id
                        ? `0 8px 24px -4px ${level.color}55`
                        : `0 4px 12px -2px ${level.color}33`,
                  }}
                >
                  {level.label}
                </div>
                <div className="mt-3 text-center">
                  <div className="text-xs font-bold text-[var(--color-misa-ink)]">
                    {level.track}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">
                    {level.semesters}
                  </div>
                </div>

                {/* Branch labels for M1/M2 */}
                {level.branches && (
                  <div className="flex gap-1 mt-1.5">
                    {level.branches.map((b) => (
                      <span
                        key={b}
                        className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Connector */}
              {idx < roadmapLevels.length - 1 && (
                <div className="flex items-center mx-1">
                  <svg width="60" height="4" className="overflow-visible">
                    <line
                      x1="0"
                      y1="2"
                      x2="60"
                      y2="2"
                      stroke={level.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="connector-line"
                      style={{ animationDelay: `${idx * 0.15}s` }}
                    />
                    <polygon
                      points="54,0 60,2 54,4"
                      fill={roadmapLevels[idx + 1].color}
                      className="dash-animate-scale"
                      style={{ animationDelay: `${idx * 0.15 + 0.3}s` }}
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detail panel for active node */}
      {activeNode && <RoadmapDetail levelId={activeNode} getTagColor={getTagColor} />}

      {/* Legend */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#0ea5e9]" /> Licence
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#8b5cf6]" /> MISA L3
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[var(--color-misa-red)]" /> Master
        </span>
      </div>
    </div>
  );
}

function RoadmapDetail({ levelId, getTagColor }) {
  const level = roadmapLevels.find((l) => l.id === levelId);
  if (!level) return null;

  // Get UEs for this level
  const ueList = getUEsForLevel(levelId);

  return (
    <div
      className="mt-6 glass-panel p-6 dash-animate-scale"
      style={{
        borderColor: `${level.color}33`,
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: level.color }}
            />
            <span className="text-xs tracking-widest font-semibold" style={{ color: level.color }}>
              {level.fullLabel}
            </span>
            <span className="text-xs text-neutral-400">— {level.semesters}</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-tight">
            {level.track}
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <MapPin size={13} />
            <span className="font-medium">{level.access}</span>
          </div>
        </div>
      </div>

      {level.note && (
        <div className="mt-3 text-sm text-neutral-500 italic">{level.note}</div>
      )}

      {ueList.length > 0 && (
        <div className="mt-5">
          <div className="text-xs tracking-widest text-neutral-400 mb-3">
            MATIÈRES PRINCIPALES
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {ueList.map((ue, i) => (
              <div
                key={`${ue.name}-${i}`}
                className="ue-card dash-animate-in"
                style={{
                  "--tag-color": getTagColor(ue.tags[0]),
                  animationDelay: `${i * 0.03}s`,
                }}
              >
                <div className="text-sm font-medium">{ue.name}</div>
                <div className="flex gap-1 mt-1.5 flex-wrap">
                  {ue.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
                      style={{
                        background: `${getTagColor(t)}15`,
                        color: getTagColor(t),
                      }}
                    >
                      {categoryTags.find((c) => c.id === t)?.label || t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function getUEsForLevel(levelId) {
  const result = [];

  if (levelId === "l1") {
    const p = licenceParcours[0];
    const groups = p.ues["L1 (S1-S2)"];
    groups.forEach((g) => g.forEach((item) => result.push(item)));
  } else if (levelId === "l2") {
    const p = licenceParcours[0];
    const groups = p.ues["L2 (S3-S4)"];
    groups.forEach((g) => g.forEach((item) => result.push(item)));
  } else if (levelId === "l3") {
    const p = licenceParcours[1];
    const groups = p.ues["L3 (S5-S6)"];
    groups.forEach((g) => g.forEach((item) => result.push(item)));
  } else if (levelId === "m1") {
    // Both tracks
    Object.values(masterParcours).forEach((data) => {
      data.m1.forEach((g) => g.forEach((item) => result.push(item)));
    });
  } else if (levelId === "m2") {
    Object.values(masterParcours).forEach((data) => {
      data.m2.forEach((g) => g.forEach((item) => result.push(item)));
    });
  }
  return result;
}

/* ═══════════════════════════════════════════════════════
   View 2 — Licence Explorer
   ═══════════════════════════════════════════════════════ */
function LicenceView({ search, activeTag, getTagColor }) {
  const [activeLevel, setActiveLevel] = useState(licenceParcours[0].levels[0]);
  const [activeParcours, setActiveParcours] = useState(0);

  const p = licenceParcours[activeParcours];
  const groups = p.ues[activeLevel];

  return (
    <div className="dash-animate-in">
      <SectionHeading
        icon={BookOpen}
        title="Licence — L1 à L3"
        subtitle="Deux parcours : Informatique et Technologie (L1, L2) et MISA (L3)."
      />

      {/* Parcours switch */}
      <div className="mt-6 flex gap-2 flex-wrap">
        {licenceParcours.map((par, idx) => (
          <button
            key={par.title}
            onClick={() => {
              setActiveParcours(idx);
              setActiveLevel(par.levels[0]);
            }}
            className={`view-tab text-xs ${activeParcours === idx ? "active" : ""}`}
          >
            {par.title.length > 30 ? par.title.slice(0, 30) + "…" : par.title}
          </button>
        ))}
      </div>

      {/* Level tabs */}
      <div className="mt-4 flex gap-2">
        {p.levels.map((l) => (
          <button
            key={l}
            onClick={() => setActiveLevel(l)}
            className={`text-xs font-semibold px-4 py-2 rounded-md border transition-all ${
              activeLevel === l
                ? "bg-[var(--color-misa-red)] text-white border-[var(--color-misa-red)] shadow-md"
                : "bg-white border-[var(--color-misa-line)] text-neutral-600 hover:border-neutral-300"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* UE Grid */}
      <div className="mt-6 grid lg:grid-cols-[1.4fr_0.6fr] gap-6">
        <div>
          <div className="text-xs tracking-widest text-neutral-400 mb-3">
            UE — {activeLevel}
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {groups.map((g, gIdx) => (
              <div key={gIdx} className="space-y-2 dash-animate-in" style={{ animationDelay: `${gIdx * 0.08}s` }}>
                {g.map((item) => {
                  const matchesTag = activeTag === "all" || item.tags.includes(activeTag);
                  const matchesSearch =
                    !search.trim() || item.name.toLowerCase().includes(search.toLowerCase());
                  return (
                    <div
                      key={item.name}
                      className={`ue-card ${matchesTag && matchesSearch ? "highlight" : ""} ${
                        !matchesTag || !matchesSearch ? "opacity-40" : ""
                      }`}
                      style={{ "--tag-color": getTagColor(item.tags[0]) }}
                    >
                      <div className="text-sm font-medium">{item.name}</div>
                      <div className="flex gap-1 mt-1.5 flex-wrap">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
                            style={{
                              background: `${getTagColor(t)}15`,
                              color: getTagColor(t),
                            }}
                          >
                            {categoryTags.find((c) => c.id === t)?.label || t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="glass-panel p-5">
            <div className="flex items-center gap-2 text-xs tracking-widest text-neutral-400">
              <Target size={13} />
              OBJECTIF
            </div>
            <p className="mt-2 text-sm leading-relaxed">{p.objectif}</p>
          </div>
          <div className="glass-panel p-5">
            <div className="flex items-center gap-2 text-xs tracking-widest text-neutral-400">
              <User size={13} />
              RESPONSABLE
            </div>
            <div className="mt-2 text-sm font-semibold">{p.responsable}</div>
          </div>
          {/* Category filter */}
          <CategoryFilter activeTag={activeTag} getTagColor={getTagColor} readOnly />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   View 3 — Master Explorer
   ═══════════════════════════════════════════════════════ */
function MasterView({ search, activeTag, getTagColor }) {
  const [parcours, setParcours] = useState("INT");
  const [level, setLevel] = useState("M1");
  const data = masterParcours[parcours];
  const groups = level === "M1" ? data.m1 : data.m2;

  return (
    <div className="dash-animate-in">
      <SectionHeading
        icon={GraduationCap}
        title="Master — M1 & M2"
        subtitle="Deux parcours : Innovation et Technologie (INT) et MISA."
      />

      {/* Parcours switch */}
      <div className="mt-6 flex gap-2">
        {[
          ["INT", "Innovation et Technologie"],
          ["MISA", "MISA"],
        ].map(([k, label]) => (
          <button
            key={k}
            onClick={() => {
              setParcours(k);
              setLevel("M1");
            }}
            className={`view-tab ${parcours === k ? "active" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Level tabs */}
      <div className="mt-4 flex gap-2">
        {["M1", "M2"].map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            className={`text-xs font-semibold px-4 py-2 rounded-md border transition-all ${
              level === l
                ? "bg-[var(--color-misa-red)] text-white border-[var(--color-misa-red)] shadow-md"
                : "bg-white border-[var(--color-misa-line)] text-neutral-600 hover:border-neutral-300"
            }`}
          >
            Master {l.slice(1)}{" "}
            <span className="opacity-60">{l === "M1" ? "S7·S8" : "S9·S10"}</span>
          </button>
        ))}
      </div>

      {/* UE Grid */}
      <div className="mt-6 grid lg:grid-cols-[1.4fr_0.6fr] gap-6">
        <div>
          <div className="text-xs tracking-widest text-neutral-400 mb-3">
            UE — MASTER {level.slice(1)}
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {groups.map((g, gIdx) => (
              <div key={gIdx} className="space-y-2 dash-animate-in" style={{ animationDelay: `${gIdx * 0.08}s` }}>
                {g.map((item) => {
                  const matchesTag = activeTag === "all" || item.tags.includes(activeTag);
                  const matchesSearch =
                    !search.trim() || item.name.toLowerCase().includes(search.toLowerCase());
                  return (
                    <div
                      key={item.name}
                      className={`ue-card ${matchesTag && matchesSearch ? "highlight" : ""} ${
                        !matchesTag || !matchesSearch ? "opacity-40" : ""
                      }`}
                      style={{ "--tag-color": getTagColor(item.tags[0]) }}
                    >
                      <div className="text-sm font-medium">{item.name}</div>
                      <div className="flex gap-1 mt-1.5 flex-wrap">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
                            style={{
                              background: `${getTagColor(t)}15`,
                              color: getTagColor(t),
                            }}
                          >
                            {categoryTags.find((c) => c.id === t)?.label || t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="glass-panel p-5">
            <div className="flex items-center gap-2 text-xs tracking-widest text-neutral-400">
              <Target size={13} />
              OBJECTIF
            </div>
            <p className="mt-2 text-sm leading-relaxed">{data.objectif}</p>
          </div>
          <div className="glass-panel p-5">
            <div className="flex items-center gap-2 text-xs tracking-widest text-neutral-400">
              <User size={13} />
              RESPONSABLE
            </div>
            <div className="mt-2 text-sm font-semibold">{data.responsable}</div>
          </div>
          <CategoryFilter activeTag={activeTag} getTagColor={getTagColor} readOnly />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   View 4 — Global UE Explorer (Search + Filter)
   ═══════════════════════════════════════════════════════ */
function ExploreView({
  search,
  setSearch,
  activeTag,
  setActiveTag,
  filteredUEs,
  getTagColor,
  searchRef,
}) {
  useEffect(() => {
    searchRef.current?.focus();
  }, [searchRef]);

  return (
    <div className="dash-animate-in">
      <SectionHeading
        icon={Search}
        title="Explorer les Matières"
        subtitle={`${filteredUEs.length} matière${filteredUEs.length > 1 ? "s" : ""} trouvée${filteredUEs.length > 1 ? "s" : ""}`}
      />

      {/* Search */}
      <div className="mt-6 relative max-w-[480px]">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
        />
        <input
          ref={searchRef}
          type="text"
          placeholder="Rechercher une matière, un parcours…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="dash-search"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {categoryTags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => setActiveTag(tag.id === activeTag ? "all" : tag.id)}
            className={`cat-pill ${activeTag === tag.id ? "active" : ""}`}
            style={{
              background:
                activeTag === tag.id ? `${tag.color}18` : "transparent",
              color: activeTag === tag.id ? tag.color : "#78716c",
              borderColor:
                activeTag === tag.id ? `${tag.color}44` : "var(--color-misa-line)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: tag.color }}
            />
            {tag.label}
          </button>
        ))}
      </div>

      {/* Results grid */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredUEs.map((ue, i) => (
          <div
            key={`${ue.name}-${ue.level}-${i}`}
            className="ue-card highlight dash-animate-in"
            style={{
              "--tag-color": getTagColor(ue.tags[0]),
              animationDelay: `${Math.min(i * 0.02, 0.4)}s`,
            }}
          >
            <div className="text-sm font-medium">{ue.name}</div>
            <div className="flex items-center gap-2 mt-1.5 text-[10px] text-neutral-400">
              <span className="font-semibold">{ue.degree}</span>
              <span>·</span>
              <span>{ue.level}</span>
            </div>
            <div className="flex gap-1 mt-1.5 flex-wrap">
              {ue.tags.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
                  style={{
                    background: `${getTagColor(t)}15`,
                    color: getTagColor(t),
                  }}
                >
                  {categoryTags.find((c) => c.id === t)?.label || t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredUEs.length === 0 && (
        <div className="mt-12 text-center text-neutral-400 text-sm">
          <Filter size={32} className="mx-auto mb-3 opacity-30" />
          Aucune matière ne correspond à votre recherche.
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   View 5 — Side-by-Side Track Comparison
   ═══════════════════════════════════════════════════════ */
function CompareView({ level, setLevel, getTagColor }) {
  const misa = masterParcours.MISA;
  const int = masterParcours.INT;

  const misaGroups = level === "m1" ? misa.m1 : misa.m2;
  const intGroups = level === "m1" ? int.m1 : int.m2;

  return (
    <div className="dash-animate-in">
      <SectionHeading
        icon={BarChart3}
        title="Comparer les Parcours Master"
        subtitle="MISA (Recherche) vs INT (Innovation et Technologie) — côte à côte."
      />

      {/* Level switch */}
      <div className="mt-6 flex gap-2">
        {["m1", "m2"].map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            className={`text-xs font-semibold px-4 py-2 rounded-md border transition-all ${
              level === l
                ? "bg-[var(--color-misa-red)] text-white border-[var(--color-misa-red)] shadow-md"
                : "bg-white border-[var(--color-misa-line)] text-neutral-600 hover:border-neutral-300"
            }`}
          >
            Master {l.slice(1)}{" "}
            <span className="opacity-60">{l === "m1" ? "S7·S8" : "S9·S10"}</span>
          </button>
        ))}
      </div>

      {/* Columns */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {/* MISA */}
        <div className="compare-col dash-animate-slide">
          <div
            className="p-5 border-b border-[var(--color-misa-line)]"
            style={{ background: "linear-gradient(135deg, #8b5cf612, #6366f108)" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
              <span className="text-xs tracking-widest font-bold text-[#8b5cf6]">
                MISA
              </span>
            </div>
            <h3 className="mt-2 font-bold tracking-tight">{misa.title}</h3>
            <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
              {misa.objectif}
            </p>
            <div className="mt-2 text-xs text-neutral-400">
              <User size={11} className="inline mr-1" />
              {misa.responsable}
            </div>
          </div>
          <div className="p-5 space-y-2">
            {misaGroups.flatMap((g) => g).map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="ue-card dash-animate-in"
                style={{
                  "--tag-color": getTagColor(item.tags[0]),
                  animationDelay: `${i * 0.04}s`,
                }}
              >
                <div className="text-sm font-medium">{item.name}</div>
                <div className="flex gap-1 mt-1 flex-wrap">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
                      style={{
                        background: `${getTagColor(t)}15`,
                        color: getTagColor(t),
                      }}
                    >
                      {categoryTags.find((c) => c.id === t)?.label || t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INT */}
        <div className="compare-col dash-animate-slide stagger-2">
          <div
            className="p-5 border-b border-[var(--color-misa-line)]"
            style={{ background: "linear-gradient(135deg, #f59e0b12, #ec489908)" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <span className="text-xs tracking-widest font-bold text-[#f59e0b]">
                INT
              </span>
            </div>
            <h3 className="mt-2 font-bold tracking-tight">{int.title}</h3>
            <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
              {int.objectif}
            </p>
            <div className="mt-2 text-xs text-neutral-400">
              <User size={11} className="inline mr-1" />
              {int.responsable}
            </div>
          </div>
          <div className="p-5 space-y-2">
            {intGroups.flatMap((g) => g).map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="ue-card dash-animate-in"
                style={{
                  "--tag-color": getTagColor(item.tags[0]),
                  animationDelay: `${i * 0.04 + 0.1}s`,
                }}
              >
                <div className="text-sm font-medium">{item.name}</div>
                <div className="flex gap-1 mt-1 flex-wrap">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
                      style={{
                        background: `${getTagColor(t)}15`,
                        color: getTagColor(t),
                      }}
                    >
                      {categoryTags.find((c) => c.id === t)?.label || t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Career Outcomes Banner
   ═══════════════════════════════════════════════════════ */
function CareerBanner({ getTagColor }) {
  return (
    <div className="bg-gradient-to-r from-[var(--color-misa-paper)] to-white border-t border-[var(--color-misa-line)]">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex items-center gap-2 text-xs tracking-widest text-[var(--color-misa-red)] font-semibold">
          <Sparkles size={14} />
          DÉBOUCHÉS PROFESSIONNELS
        </div>
        <h2 className="mt-2 text-xl font-bold tracking-tight">
          Où mène cette formation ?
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {careerOutcomes.map((c) => (
            <div
              key={c.role}
              className="glass-panel px-4 py-3 flex items-center gap-3 dash-animate-in"
            >
              <ArrowRight size={14} className="text-[var(--color-misa-red)] shrink-0" />
              <div>
                <div className="text-sm font-semibold">{c.role}</div>
                <div className="flex gap-1 mt-1">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
                      style={{
                        background: `${getTagColor(t)}15`,
                        color: getTagColor(t),
                      }}
                    >
                      {categoryTags.find((ct) => ct.id === t)?.label || t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            to="/admission"
            className="inline-flex items-center gap-2 bg-[var(--color-misa-red)] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[var(--color-misa-red-dark)] transition-all hover:shadow-lg"
          >
            Candidater maintenant
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Shared Sub-Components
   ═══════════════════════════════════════════════════════ */
function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 w-9 h-9 rounded-lg bg-[var(--color-misa-red)] flex items-center justify-center shrink-0">
        <Icon size={18} className="text-white" />
      </div>
      <div>
        <h2 className="text-lg font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-neutral-500 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

function CategoryFilter({ activeTag: _activeTag, getTagColor: _getTagColor, readOnly: _readOnly }) {
  return (
    <div className="glass-panel p-5">
      <div className="flex items-center gap-2 text-xs tracking-widest text-neutral-400">
        <Layers size={13} />
        DOMAINES
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {categoryTags
          .filter((t) => t.id !== "all")
          .map((tag) => (
            <span
              key={tag.id}
              className="text-[10px] font-semibold px-2 py-1 rounded-full"
              style={{
                background: `${tag.color}12`,
                color: tag.color,
                border: `1px solid ${tag.color}25`,
              }}
            >
              {tag.label}
            </span>
          ))}
      </div>
    </div>
  );
}
