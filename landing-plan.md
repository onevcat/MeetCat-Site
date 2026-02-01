# MeetCat Landing Page Plan (v2)

## Goals
- Explain what MeetCat does in one screen and make the app feel friendly, light, and a bit playful.
- Keep the page minimal, focusing on core value and only essential features.
- Offer two primary CTAs: Chrome Extension download + Desktop App download.

## Brand Notes (from logo)
- Style: playful, rounded, hand-drawn feel.
- Lettering: monoline, slightly irregular strokes; likely custom or rounded handwritten.
- Recommendation: use the logo wordmark as the brand anchor, then pair a rounded display font with a clean rounded body font.
  - Display: "Fredoka" (selected) for English headings/CTAs
  - Body: system UI fonts for readability and multilingual support
- Action: if the source file (AI/Figma/PSD) exists, extract the exact font; otherwise do a quick font match and keep the logo as the primary identity mark.

## Concept Direction (design stance)
- Theme: "Playful assistant" — soft shapes, sticker-like UI chips, light hand-drawn accents.
- Signature element: floating cat + countdown bubbles to make the product instantly memorable.
- Avoid enterprise/serious UI language; keep it warm and human.

## Color System (derived from logo)
- Primary Blue: #5B768F
- Warm Orange: #F6B45A
- Soft Pink: #F2A3B2
- Cream Base: #FFF4E8
- Ink Text: #1F2023
- Muted Gray: #6E7681
- Accent Mint (small pops only): #9AD9C7

Usage:
- Background: cream base with subtle gradient (cream -> very light blue).
- Primary CTA: blue background with white text.
- Secondary CTA: white fill with blue border, or orange fill for emphasis.
- Accent highlights: orange + pink chips, mint for micro-details.

## Typography Implementation (EN + system CJK)
- Import (Google Fonts):
  - https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap
- Usage:
  - English headings, CTA, label chips: Fredoka
  - Body: system UI stack
  - CJK text: system fonts via :lang()

## Live UI Integration (replace screenshots with real components)
Feasibility: **Partially feasible with light refactor.**
- Homepage overlay + countdown are implemented in `packages/core/src/ui` as DOM-injected widgets (not React), but their structure/styles can be re-wrapped or recreated as React components for the landing page.
- Tray status is rendered by the Tauri Rust layer (not React). For the website, recreate a visually consistent “tray strip” component with mocked data.

Target Components to Rebuild (React, landing-only):
1) Homepage overlay (meeting list floating panel)
- Presentation: floating card with a rounded frame, slight tilt (1–2 degrees), soft shadow.
- Label chip: "Next up" or "Upcoming" in a pill tag.
- Caption: "MeetCat shows your next meeting right on the Meet homepage."

2) Countdown auto-join overlay (meeting prep page)
- Presentation: centered banner-style component with a glowing ring behind it.
- Label chip: "Auto-join" + "Cancel anytime".
- Caption: "A gentle countdown before joining — you stay in control."

3) Tray status (next meeting time)
- Presentation: slim horizontal strip; pair with a tiny cat icon badge.
- Label chip: "Tray status".
- Caption: "See the next meeting time at a glance."

## Source-Inferred UI Spec (from MeetCat repo)
Reference files:
- `packages/core/src/ui/homepage-overlay.ts`
- `packages/core/src/ui/join-countdown.ts`
- `packages/core/src/ui/styles.ts`
- `packages/tauri/src-tauri/src/tray.rs` (text logic)

Homepage overlay (meeting list floating panel):
- Container: fixed card, padding 12x16, radius 8, drop shadow (soft layered).
- Layout: icon (24x24) + text stack.
- Title text: "Next: {title}" / "In progress: {title}" / "No upcoming meetings".
- Subtitle: "in {mm:ss}" with countdown span.
- Countdown styling: tabular nums, medium weight, accent blue.

Countdown auto-join overlay:
- Container: fixed card top-center, padding 12x16, radius 8, shadow.
- Title: "Auto-joining in {seconds}s".
- Progress bar: 3px height, rounded, full width.
- Cancel button: small ghost button, muted text.

Tray status (next meeting time):
- Text variants: "Next: {title} (in X min)" or a short time string (10:30 AM).
- For landing: render a slim horizontal strip with a tiny icon and the time text.

Landing style mapping (to keep site consistency):
- Background: white/cream card (#FFF4E8) with soft shadow.
- Title text: Ink Text (#1F2023), subtitle: Muted Gray (#6E7681).
- Countdown/progress: Primary Blue (#5B768F).
- Button border: light gray; hover: subtle cream tint.
- Typography: use site fonts (Fredoka for label chips/CTA, body stack for UI text).

## Screenshot-Validated UI Spec (final for landing)
Based on the 3 provided screenshots, use the following concrete styling so the landing components feel identical:

1) Homepage overlay card
- Card background: #FFFFFF
- Radius: 16px
- Shadow: 0 6px 20px rgba(0, 0, 0, 0.12)
- Padding: 16px 20px
- Layout: horizontal, icon left, text right
- Icon size: 36x36, rounded 8px
- Title: 18px, weight 600, color #1F2023
- Subtitle: 16px, weight 500
- Countdown text color: #1A73E8 (blue)
- Subtitle prefix (“in”): #6E7681

2) Countdown auto-join overlay
- Card background: #FFFFFF
- Radius: 16px
- Shadow: 0 6px 20px rgba(0, 0, 0, 0.12)
- Padding: 16px 20px
- Title: 18px, weight 600, color #1F2023
- Countdown seconds: #1A73E8
- Progress bar height: 4px
- Progress track: #E5E7EB
- Progress fill: #1A73E8
- Cancel button: 36px height, 12px horizontal padding, radius 8px
- Cancel text: #5F6368, border #DADCE0

3) Tray status strip
- Background: dark translucent (#1C1B22 at ~70% alpha)
- Text: 16px, weight 600, color #F2F4F7
- Icon: 18x18 with 6px gap to text
- Format: “5:02 PM – Product Brainstorm”
- Corner radius: 10px

## Page Structure (sections + purpose)
1) Hero
- Purpose: instant clarity + fun personality.
- Layout: asymmetric — logo left, headline/CTA right.

2) Core Features (3–4 cards)
- Focus on benefits, not specs.
- Cards with slight rotation and sticker-like tags.

3) Visual Proof (live UI components)
- One section that showcases the 3 UI components in the exact order above.

4) How It Works
- 3 steps: Detect → Schedule → Auto-join.

5) Platform Split
- Chrome Extension vs Desktop App.

6) CTA Band
- Repeat two download buttons.

7) Footer
- Minimal: Contact / Privacy.

## Copy Deck (CN)
Hero
- H1: "MeetCat，让会议自己到时间就进场"
- Sub: "自动识别 Google Meet 日程，倒计时提醒，一键自动加入。"
- CTA 1: "下载 Chrome 扩展"
- CTA 2: "下载桌面 App"

Core Features
1) "智能自动加入" — 提前 X 分钟打开会议页，错过？不存在。
2) "倒计时 + 随时取消" — 进入前给你一个温柔的倒计时。
3) "麦克风/摄像头默认状态" — 进会前自动设定，安静就绪。
4) "标题过滤（可选）" — 不想自动进的会议，一键跳过。

UI Captions
- "在 Meet 首页直接显示下一场会议倒计时。"
- "自动加入前的倒计时，随时可取消。"
- "状态栏显示下一场会议时间。"

How It Works
- Step 1: "识别会议"
- Step 2: "安排触发时间"
- Step 3: "自动加入"

CTA Band
- "准备好不再错过会议了吗？"
- Buttons: "Chrome 扩展" + "桌面 App"

## Layout & Composition Ideas
- Asymmetric hero with a large headline and stacked CTA buttons.
- Overlapping feature cards with slight rotation for a hand-placed feel.
- Pill-shaped labels to create rhythm and playfulness.

## Motion & Micro-interactions
- Page load: staggered reveal of hero text, cards, and CTAs.
- Hover: gentle lift + soft shadow + tiny wobble on sticker chips.
- Animated countdown demo (looping, decorative only).

## Step-by-Step Execution Plan
1) Asset Prep
   - Confirm logo files and export 2–3 sizes (PNG/SVG).
   - Collect the 3 UI references from MeetCat repo (overlay, countdown, tray text).
   - Extract layout metrics from source (padding, radius, shadow, copy).

2) Typography & Color Decision
   - Decide display + body font pairing.
   - Lock the palette above and assign usage rules.

3) Copy Finalization
   - Approve the CN copy deck; keep it short and friendly.
   - Ensure CTA wording matches download targets.

4) Wireframe the Layout
   - Place hero, feature cards, UI component trio, and CTA band.

5) Live UI Component Build (landing-only React)
   - Rebuild the 3 components as React UI blocks with mocked data.
   - Port visual rules (rounded frames, chips, soft glow) to match site style.
   - Align details with the Source-Inferred UI Spec above.

6) Motion Pass
   - Define a single page-load sequence and consistent hover behavior.

7) Implementation Spec
   - Provide a section-by-section layout spec and CSS variable list.
   - Include spacing scale and grid rules.

8) Review & Polish
   - Check readability, contrast, and visual balance.
   - Ensure the page feels playful but still clean.
   - When screenshots arrive, compare and adjust the UI components.

## Open Items
- Confirm exact font used in the logo (source file or match).
- Confirm download URLs for Chrome Extension and Desktop App.
- Provide the three UI references (or existing components) for final integration.
- Validate UI replicas against real screenshots once available.
