import Chip from "./components/Chip.jsx";
import HomeOverlayCard from "./components/HomeOverlayCard.jsx";
import CountdownOverlayCard from "./components/CountdownOverlayCard.jsx";
import TrayStatusStrip from "./components/TrayStatusStrip.jsx";

const features = [
  {
    title: "智能自动加入",
    desc: "提前 X 分钟打开会议页，错过？不存在。",
    tone: "orange",
    badge: "AUTO",
  },
  {
    title: "倒计时 + 随时取消",
    desc: "进入前给你一个温柔的倒计时。",
    tone: "pink",
    badge: "COUNT",
  },
  {
    title: "麦克风/摄像头默认状态",
    desc: "进会前自动设定，安静就绪。",
    tone: "blue",
    badge: "QUIET",
  },
  {
    title: "标题过滤（可选）",
    desc: "不想自动进的会议，一键跳过。",
    tone: "mint",
    badge: "FILTER",
  },
];

const steps = [
  {
    title: "识别会议",
    desc: "在 Meet 首页解析会议列表。",
  },
  {
    title: "安排触发时间",
    desc: "根据设置决定何时进入会议页。",
  },
  {
    title: "自动加入",
    desc: "倒计时结束后自动点击加入。",
  },
];

const platforms = [
  {
    title: "Chrome Extension",
    desc: "浏览器内轻量运行，自动打开会议页面。",
    bullets: ["自动触发加入", "Meet 首页提示", "同步设置"],
    tone: "blue",
  },
  {
    title: "Desktop App",
    desc: "稳定的桌面体验，系统托盘随时可见。",
    bullets: ["托盘状态展示", "开机自启", "独立设置窗口"],
    tone: "orange",
  },
];

function DownloadButtons({ variant = "default" }) {
  const className = variant === "stacked" ? "cta-buttons stacked" : "cta-buttons";
  return (
    <div className={className}>
      <a className="btn btn-primary" href="" data-disabled="true" aria-disabled="true">
        下载 Chrome 扩展
      </a>
      <a className="btn btn-secondary" href="" data-disabled="true" aria-disabled="true">
        下载桌面 App
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <img className="logo" src="/meetcat-logo.png" alt="MeetCat" />
          <div className="header-actions">
            <Chip label="Playful Assistant" tone="blue" />
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <Chip label="Auto-join for Google Meet" tone="orange" />
              <h1 className="hero-title">
                MeetCat，让会议自己到时间就进场
              </h1>
              <p className="hero-subtitle">
                自动识别 Google Meet 日程，倒计时提醒，一键自动加入。
              </p>
              <DownloadButtons />
              <div className="hero-notes">
                <span>Free · Lightweight · No ads</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="float-surface">
                <HomeOverlayCard />
              </div>
              <div className="hero-bubbles">
                <div className="bubble bubble-a" />
                <div className="bubble bubble-b" />
                <div className="bubble bubble-c" />
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>核心功能，保持轻松</h2>
              <p>只保留真正有用的部分，让节奏更安静。</p>
            </div>
            <div className="feature-grid">
              {features.map((item) => (
                <article key={item.title} className={`feature-card tone-${item.tone}`}>
                  <span className="feature-badge">{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ui-showcase">
          <div className="container">
            <div className="section-header">
              <h2>与 MeetCat 真正一致的 UI</h2>
              <p>用可复用组件，直接把真实体验带到页面里。</p>
            </div>
            <div className="showcase-grid">
              <div className="showcase-item">
                <Chip label="Homepage Overlay" tone="blue" />
                <HomeOverlayCard />
                <p className="caption">在 Meet 首页直接显示下一场会议倒计时。</p>
              </div>
              <div className="showcase-item">
                <Chip label="Auto-join" tone="pink" />
                <CountdownOverlayCard />
                <p className="caption">自动加入前的倒计时，随时可取消。</p>
              </div>
              <div className="showcase-item">
                <Chip label="Tray Status" tone="orange" />
                <TrayStatusStrip />
                <p className="caption">状态栏显示下一场会议时间。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <div className="section-header">
              <h2>How it works</h2>
              <p>三步完成，安静又可靠。</p>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <div key={step.title} className="step-card">
                  <div className="step-index">0{index + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="platforms">
          <div className="container">
            <div className="section-header">
              <h2>两种形态，一样顺手</h2>
              <p>浏览器轻量，桌面稳定。按你的节奏选择。</p>
            </div>
            <div className="platform-grid">
              {platforms.map((platform) => (
                <article
                  key={platform.title}
                  className={`platform-card tone-${platform.tone}`}
                >
                  <h3>{platform.title}</h3>
                  <p>{platform.desc}</p>
                  <ul>
                    {platform.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container cta-inner">
            <div>
              <h2>准备好不再错过会议了吗？</h2>
              <p>MeetCat 会在你需要时出现，然后悄悄退场。</p>
            </div>
            <DownloadButtons variant="stacked" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>MeetCat</span>
          <div className="footer-links">
            <a href="" data-disabled="true" aria-disabled="true">
              Contact
            </a>
            <a href="" data-disabled="true" aria-disabled="true">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
