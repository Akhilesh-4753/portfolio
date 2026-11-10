import React from 'react';
import {
  ShoppingBag,
  Building2,
  Compass,
  CheckCircle2,
  LayoutDashboard,
  Receipt,
  RotateCcw,
  Users,
  Package,
  Boxes,
  Truck,
  Wallet,
  FileSpreadsheet,
  BarChart3,
  ShieldCheck,
  Settings,
  ArrowRight,
  Server,
  Code2,
  Workflow
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { SectionTitle } from '../../components/common/SectionTitle';
import { FadeIn } from '../../components/animations/FadeIn';

const ICON_MAP = {
  LayoutDashboard,
  Receipt,
  RotateCcw,
  Users,
  Package,
  Boxes,
  Truck,
  Wallet,
  FileSpreadsheet,
  BarChart3,
  ShieldCheck,
  Settings
};

/**
 * Connected horizontal/vertical blueprint node for a single planned POS module.
 */
const ModuleNode = ({ name, icon }) => {
  const Icon = ICON_MAP[icon] || LayoutDashboard;
  return (
    <div className="pos-module-node">
      <span className="pos-module-node-icon" aria-hidden="true">
        <Icon size={15} />
      </span>
      <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)' }}>
        {name}
      </span>
    </div>
  );
};

export const CurrentWork = () => {
  const { activeWork } = personalInfo;

  return (
    <section id="current-work" className="section-wrapper">
      <div className="site-container">
        <SectionTitle
          badge={activeWork.badge}
          title="Featured Ongoing"
          highlight="Project"
          subtitle="Collaborative system architecture, functional planning, and accounting-driven workflow design for point-of-sale operations."
        />

        <FadeIn direction="up" delay={0.1}>
          <div
            className="glass-panel pos-showcase-panel"
            style={{
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              background:
                'linear-gradient(155deg, rgba(249, 115, 22, 0.05) 0%, rgba(17, 17, 17, 0.9) 42%, rgba(8, 8, 8, 0.96) 100%)',
              boxShadow: '0 20px 48px -12px rgba(0, 0, 0, 0.78), 0 0 32px -8px rgba(249, 115, 22, 0.16)'
            }}
          >
            {/* Subtle Ambient Right Glow */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-120px',
                right: '-80px',
                width: '360px',
                height: '360px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, rgba(124, 45, 18, 0.06) 45%, transparent 72%)',
                filter: 'blur(45px)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
              {/* 1. Project Header & Overview */}
              <div
                style={{
                  paddingBottom: '1.75rem',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1.25rem',
                    marginBottom: '1.35rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '14px',
                        background: 'var(--gradient-primary)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 6px 20px rgba(249, 115, 22, 0.35)'
                      }}
                    >
                      <ShoppingBag size={26} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: 'clamp(1.55rem, 2.8vw, 2.05rem)',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.02em',
                          marginBottom: '0.45rem'
                        }}
                      >
                        {activeWork.title}
                      </h3>

                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.86rem',
                            fontWeight: 600,
                            color: '#FDBA74'
                          }}
                        >
                          <Building2 size={14} style={{ color: '#F97316' }} />
                          {activeWork.organization}
                        </span>

                        <span style={{ color: 'var(--text-muted)' }} aria-hidden="true">•</span>

                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.84rem',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          <Compass size={14} style={{ color: '#F97316' }} />
                          <span>
                            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>My Role:</strong>{' '}
                            {activeWork.role}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Active Development Status Pill */}
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.42rem 0.95rem',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.03em',
                      backgroundColor: 'rgba(16, 185, 129, 0.12)',
                      color: 'var(--color-emerald)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <span className="status-dot animate-status-pulse" />
                    {activeWork.status}
                  </span>
                </div>

                {/* 2. Project Overview */}
                <p
                  style={{
                    fontSize: '1.03rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    maxWidth: '900px',
                    margin: 0
                  }}
                >
                  {activeWork.description}
                </p>
              </div>

              {/* 3. My Role & Contributions Grid */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                    marginBottom: '1rem'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      margin: 0
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#F97316',
                        boxShadow: '0 0 10px rgba(249, 115, 22, 0.7)'
                      }}
                      aria-hidden="true"
                    />
                    My Role & Planning Contributions
                  </h4>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#FDBA74',
                      letterSpacing: '0.04em'
                    }}
                  >
                    // FUNCTIONAL ANALYSIS & BUSINESS LOGIC
                  </span>
                </div>

                <div className="pos-responsibilities-grid">
                  {activeWork.responsibilities.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        padding: '0.75rem 0.95rem',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: '#F97316', flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. POS Functional Module Architecture Diagram */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      margin: 0
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#F97316',
                        boxShadow: '0 0 10px rgba(249, 115, 22, 0.7)'
                      }}
                      aria-hidden="true"
                    />
                    POS Functional Module Architecture
                  </h4>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      padding: '0.24rem 0.7rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(249, 115, 22, 0.1)',
                      color: '#FDBA74',
                      border: '1px solid rgba(249, 115, 22, 0.28)'
                    }}
                  >
                    PLANNED / SUGGESTED MODULES (12)
                  </span>
                </div>

                {/* Connected Architectural Blueprint */}
                <div className="pos-blueprint-box">
                  {activeWork.moduleTiers.map((tier, tierIdx) => (
                    <React.Fragment key={tier.tierLabel}>
                      <div className="pos-blueprint-tier">
                        <div className="pos-tier-label">{tier.tierLabel}</div>
                        <div className="pos-tier-nodes">
                          {tier.modules.map((mod) => (
                            <ModuleNode key={mod.name} name={mod.name} icon={mod.icon} />
                          ))}
                        </div>
                      </div>

                      {tierIdx < activeWork.moduleTiers.length - 1 && (
                        <div className="pos-tier-connector" aria-hidden="true">
                          <span className="pos-tier-connector-line" />
                          <span className="pos-tier-connector-dot" />
                          <span className="pos-tier-connector-line" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* 5. Sample Transaction Workflow Diagram */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                    marginBottom: '1rem'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      margin: 0
                    }}
                  >
                    <Workflow size={17} style={{ color: '#F97316' }} />
                    Sample Transaction Data Flow
                  </h4>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    // Sales → Payments → Inventory → Reports
                  </span>
                </div>

                <div className="pos-workflow-pipeline">
                  {activeWork.transactionWorkflow.map((node, wIdx) => {
                    const StepIcon = ICON_MAP[node.icon] || Receipt;
                    const isLast = wIdx === activeWork.transactionWorkflow.length - 1;

                    return (
                      <React.Fragment key={node.step}>
                        <div className="pos-workflow-step">
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '0.5rem',
                              marginBottom: '0.55rem'
                            }}
                          >
                            <span
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                color: '#F97316'
                              }}
                            >
                              STEP {node.step}
                            </span>
                            <span
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(249, 115, 22, 0.12)',
                                color: '#FDBA74',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                              aria-hidden="true"
                            >
                              <StepIcon size={14} />
                            </span>
                          </div>

                          <div
                            style={{
                              fontSize: '0.94rem',
                              fontWeight: 700,
                              color: 'var(--text-primary)',
                              marginBottom: '0.3rem'
                            }}
                          >
                            {node.title}
                          </div>
                          <div
                            style={{
                              fontSize: '0.8rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5
                            }}
                          >
                            {node.detail}
                          </div>
                        </div>

                        {!isLast && (
                          <div className="pos-workflow-arrow" aria-hidden="true">
                            <ArrowRight size={18} />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* 6. Technical Collaboration Split */}
              <div
                style={{
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                <h4
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                  }}
                >
                  Technical & Team Collaboration
                </h4>

                <div className="pos-collab-grid">
                  {/* Highlighted: My Functional & Planning Contribution */}
                  <div
                    style={{
                      padding: '1.35rem',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(249, 115, 22, 0.06)',
                      border: '1px solid rgba(249, 115, 22, 0.35)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '0.85rem'
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          color: '#F97316',
                          marginBottom: '0.5rem'
                        }}
                      >
                        MY CONTRIBUTION — DOMAIN & PLANNING
                      </span>
                      <p
                        style={{
                          fontSize: '0.93rem',
                          color: 'var(--text-primary)',
                          lineHeight: 1.65,
                          margin: 0
                        }}
                      >
                        {activeWork.technicalCollaboration.myContribution}
                      </p>
                    </div>
                  </div>

                  {/* Team Implementation Stack */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '1rem'
                    }}
                    className="pos-stack-pair"
                  >
                    <div
                      style={{
                        padding: '1.25rem',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#FDBA74',
                          fontWeight: 600,
                          marginBottom: '0.45rem'
                        }}
                      >
                        <Server size={14} style={{ color: '#F97316' }} />
                        BACKEND (TEAM)
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        {activeWork.technicalCollaboration.backend.stack}
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {activeWork.technicalCollaboration.backend.scope}
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '1.25rem',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#FDBA74',
                          fontWeight: 600,
                          marginBottom: '0.45rem'
                        }}
                      >
                        <Code2 size={14} style={{ color: '#F97316' }} />
                        FRONTEND (TEAM)
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        {activeWork.technicalCollaboration.frontend.stack}
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {activeWork.technicalCollaboration.frontend.scope}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .pos-showcase-panel {
          padding: 2.35rem;
          border-radius: 22px;
        }

        .pos-responsibilities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .pos-blueprint-box {
          padding: 1.35rem;
          border-radius: 16px;
          background-color: rgba(8, 8, 8, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.07);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pos-blueprint-tier {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 1rem;
          border-radius: 12px;
          background-color: rgba(17, 17, 17, 0.72);
          border: 1px solid rgba(249, 115, 22, 0.14);
        }

        .pos-tier-label {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #FDBA74;
        }

        .pos-tier-nodes {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.65rem;
          width: 100%;
        }

        .pos-module-node {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.9rem;
          border-radius: 10px;
          background-color: #111111;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: var(--transition-smooth);
        }

        .pos-module-node:hover {
          border-color: rgba(249, 115, 22, 0.45);
          background-color: rgba(249, 115, 22, 0.08);
          transform: translateY(-1px);
        }

        .pos-module-node-icon {
          color: #F97316;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .pos-tier-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.1rem 0;
        }

        .pos-tier-connector-line {
          width: 2px;
          height: 10px;
          background: linear-gradient(to bottom, rgba(249, 115, 22, 0.55), rgba(253, 186, 116, 0.35));
        }

        .pos-tier-connector-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #F97316;
          box-shadow: 0 0 8px rgba(249, 115, 22, 0.8);
        }

        .pos-workflow-pipeline {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          gap: 0.65rem;
          align-items: stretch;
        }

        .pos-workflow-step {
          padding: 1.05rem;
          border-radius: 12px;
          background-color: rgba(17, 17, 17, 0.8);
          border: 1px solid rgba(249, 115, 22, 0.2);
          display: flex;
          flex-direction: column;
        }

        .pos-workflow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F97316;
          padding: 0 0.1rem;
        }

        .pos-collab-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 1.25rem;
          align-items: stretch;
        }

        @media (max-width: 980px) {
          .pos-workflow-pipeline {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .pos-workflow-arrow {
            transform: rotate(90deg);
            padding: 0.2rem 0;
          }

          .pos-collab-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .pos-showcase-panel {
            padding: 1.35rem 1.15rem;
            border-radius: 16px;
          }

          .pos-responsibilities-grid,
          .pos-stack-pair {
            grid-template-columns: 1fr !important;
          }

          .pos-blueprint-box {
            padding: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};
