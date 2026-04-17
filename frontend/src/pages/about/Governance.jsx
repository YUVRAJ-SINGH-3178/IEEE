import { motion } from 'framer-motion';
import { FileText, Scale, Vote, BookOpen, Shield, Users, Eye, Landmark, Layers } from 'lucide-react';

// ── Data (from user spec) ─────────────────────────────────
const orgHierarchy = [
  'IEEE Hyderabad Section',
  'Faculty Advisors',
  'Student Branch Executive Committee',
  'Computer Society / Robotics & Auto. / AI Society',
  'Volunteers',
  'Members',
];

const keyDocuments = [
  { icon: FileText, title: 'Student Branch Constitution', desc: 'The definitive framework governing all branch operations and organizational structure.' },
  { icon: BookOpen, title: 'Branch Bylaws', desc: 'Detailed operational rules and procedures for daily governance of the student branch.' },
  { icon: Scale, title: 'Amendment Process', desc: 'Protocol for proposing & ratifying changes to the constitution and bylaws.' },
  { icon: Shield, title: 'Affiliation & Compliance', desc: 'IEEE Region 10 mandates and compliance requirements for continued affiliation.' },
];

const financialRules = [
  'Budget approvals require strict consensus',
  'Mandatory treasurer transparency reports',
  'Pre-approved event fund allocation brackets',
  'IEEE vTools compliant financial logging',
];

const decisionMaking = [
  { label: 'Voting', value: 'Democratic polling among ExeCom' },
  { label: 'Quorum', value: 'Minimum 2/3rd attendance mandatory' },
  { label: 'Meeting frequency', value: 'Bi-weekly' },
  { label: 'Workflow', value: 'Proposal → Discuss → Vote → Approved' },
];

const executiveRoles = [
  { role: 'Chairperson', responsibility: 'Strategic oversight, branch representation, primary leadership' },
  { role: 'Vice Chair', responsibility: 'Cross-functional coordination and operational support' },
  { role: 'Secretary', responsibility: 'Records management, communications, meeting logistics' },
  { role: 'Treasurer', responsibility: 'Financial accounting, budgeting, funding allocations' },
  { role: 'Chapter Chairs', responsibility: 'Domain-specific technical leadership and society operations' },
  { role: 'Faculty Advisors', responsibility: 'Academic mentorship and institutional compliance oversight' },
];

const codeOfEthics = [
  'Hold paramount the safety, health, and welfare of the public',
  'Avoid real or perceived conflicts of interest whenever possible',
  'Be honest and realistic in stating claims or estimates based on available data',
  'Maintain and improve technical competence; only undertake tasks if qualified',
];

const branchId = {
  id: 'SRMAP-IEEE-0001',
  region: 'IEEE Hyderabad Section',
  institution: 'SRM University AP',
  oversight: 'Faculty Advisors',
};

// ── Main Export ──────────────────────────────────────────
export default function Governance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl"
    >
      <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-ieee-deep leading-[0.95]">
        Governance<span className="text-ieee-bright">.</span>
      </h1>
      <p className="text-lg font-sans text-ieee-deep/60 leading-relaxed mb-16 max-w-2xl">
        Transparency, structured growth, and accountability form the pillars of our branch. Our governance framework ensures we remain steadfast to IEEE bylaws while adapting to the needs of a modern engineering community.
      </p>

      {/* ── ORGANIZATIONAL HIERARCHY ── */}
      <div className="mb-16">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Structure</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-ieee-deep mb-8 tracking-tight">Organizational Hierarchy</h2>
        <div className="relative pl-8 border-l-2 border-ieee-bright/20">
          {orgHierarchy.map((level, i) => (
            <div key={i} className="relative mb-6 last:mb-0 group">
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-ieee-slate border-2 border-ieee-bright/40 group-hover:bg-ieee-bright group-hover:border-ieee-bright transition-colors duration-300" />
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-ieee-bright/60 font-bold">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-sans text-ieee-deep/80 text-base font-medium">{level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── KEY DOCUMENTS ── */}
      <div className="mb-16">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Documents</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-ieee-deep mb-8 tracking-tight">Key Documents</h2>
        <div className="space-y-4">
          {keyDocuments.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 + 0.3 }}
                className="group flex gap-6 p-6 md:p-8 rounded-xl border border-ieee-deep/5 hover:border-ieee-bright/20 hover:bg-white/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-ieee-deep/5 flex items-center justify-center flex-shrink-0 group-hover:bg-ieee-bright/10 transition-colors duration-300">
                  <Icon size={20} className="text-ieee-deep/30 group-hover:text-ieee-bright transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-ieee-deep mb-2">{doc.title}</h3>
                  <p className="text-ieee-deep/50 leading-relaxed text-sm md:text-base">{doc.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── FINANCIAL GOVERNANCE ── */}
      <div className="mb-16">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Finance</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-ieee-deep mb-8 tracking-tight">Financial Governance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {financialRules.map((rule, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-ieee-deep/5">
              <span className="text-ieee-bright mt-0.5">✓</span>
              <span className="text-sm font-sans text-ieee-deep/70">{rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── DECISION MAKING ── */}
      <div className="mb-16">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Process</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-ieee-deep mb-8 tracking-tight">Decision-Making Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {decisionMaking.map((d, i) => (
            <div key={i} className="p-4 rounded-xl border border-ieee-deep/5">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-ieee-bright font-bold block mb-1">{d.label}</span>
              <span className="text-sm font-sans text-ieee-deep/70">{d.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── EXECUTIVE ROLES ── */}
      <div className="mb-16">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Roles</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-ieee-deep mb-8 tracking-tight">Executive Roles Summary</h2>
        <div className="overflow-hidden rounded-xl border border-ieee-deep/5">
          {executiveRoles.map((r, i) => (
            <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-2 p-4 ${i !== executiveRoles.length - 1 ? 'border-b border-ieee-deep/5' : ''}`}>
              <span className="text-sm font-display font-bold text-ieee-deep sm:w-40 flex-shrink-0">{r.role}</span>
              <span className="text-sm font-sans text-ieee-deep/50">{r.responsibility}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CODE OF ETHICS ── */}
      <div className="mb-16">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Ethics</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-ieee-deep mb-8 tracking-tight">IEEE Code of Ethics</h2>
        <div className="space-y-3">
          {codeOfEthics.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-ieee-deep/5">
              <span className="text-sm font-mono text-ieee-bright font-bold flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-sm font-sans text-ieee-deep/70 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── BRANCH ID CARD ── */}
      <div className="p-6 md:p-8 rounded-2xl bg-ieee-deep text-white">
        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-ieee-cyan font-bold block mb-4">Branch Identity</span>
        <div className="grid grid-cols-2 gap-4">
          <div><span className="text-[10px] font-sans uppercase tracking-[0.15em] text-white/30 block mb-1">Branch ID</span><span className="font-mono text-sm text-white/80">{branchId.id}</span></div>
          <div><span className="text-[10px] font-sans uppercase tracking-[0.15em] text-white/30 block mb-1">Region</span><span className="font-mono text-sm text-white/80">{branchId.region}</span></div>
          <div><span className="text-[10px] font-sans uppercase tracking-[0.15em] text-white/30 block mb-1">Institution</span><span className="font-mono text-sm text-white/80">{branchId.institution}</span></div>
          <div><span className="text-[10px] font-sans uppercase tracking-[0.15em] text-white/30 block mb-1">Oversight</span><span className="font-mono text-sm text-white/80">{branchId.oversight}</span></div>
        </div>
      </div>
    </motion.div>
  );
}
