import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const translations = {
  zh: {
    'nav.home': 'MeetCat',
    'nav.privacy': '隐私',
    'nav.terms': '条款',
    'lang.switch': '切换语言',
    'footer.made_with': 'Made with',
    'footer.by': 'by',
    'hero.slogan': '再也不错过任何会议',
    'hero.subtitle': '自动识别 Google Meet 日程，倒计时提醒，自动加入会议。',
    'hero.cta.chrome': '下载 Chrome 扩展',
    'hero.cta.app': '下载 App（macOS）',
    'hero.notes': '免费 · 开源 · 轻量 · 无广告 | Windows 稍后推出',
    'ui.next_meeting': '下一场：',
    'ui.in_progress': '进行中：',
    'ui.no_upcoming': '暂无即将开始的会议',
    'ui.time_remaining': '还有',
    'ui.countdown_suffix': '',
    'ui.auto_join_in': '自动加入还有 ',
    'ui.seconds': '秒',
    'ui.cancel': '取消',
    'ui.tray_status': '状态栏显示',
    'ui.tray_next': '下一场：',
    'features.title': '核心功能，保持轻松',
    'features.subtitle': '智能加入，让你的日常会议节奏更加从容',
    'features.auto_join.title': '智能自动加入',
    'features.auto_join.desc': '提前 X 分钟打开会议页，再也不怕错过会议。',
    'features.countdown.title': '倒计时 + 随时取消',
    'features.countdown.desc': '会议准备的温柔倒计时，调整或取消，随心所欲。',
    'features.mic_cam.title': '麦克风/摄像头默认状态',
    'features.mic_cam.desc': '进会前自动设定，让你安静从容地入会。',
    'features.filter.title': '会议过滤',
    'features.filter.desc': '提前设置，不想自动进的会议？直接跳过。',
    'showcase.title': '一眼可确认的会议状态界面',
    'showcase.subtitle': '计时提醒、加入前确认与清晰提示，让每场会议一目了然。',
    'showcase.home_overlay': '首页浮层',
    'showcase.home_caption': '在 Meet 首页直接显示下一场会议倒计时。',
    'showcase.auto_join': '自动加入',
    'showcase.auto_join_caption': '自动加入前的倒计时，随时可取消。',
    'showcase.tray': '状态栏显示',
    'showcase.tray_caption': '状态栏显示下一场会议时间。',
    'how.title': '工作原理',
    'how.subtitle': '三步完成，安静又可靠。',
    'how.step1.title': '识别会议',
    'how.step1.desc': '你需要做的只是打开 Meet 主页（使用已安装扩展的浏览器或桌面 App），确认下一场会议的浮窗正常显示。',
    'how.step2.title': '安排触发时间',
    'how.step2.desc': '根据设置决定何时进入会议页，在会议准备页面确认麦克风与摄像头状态。进入准备页后即开始倒计时。',
    'how.step3.title': '自动加入',
    'how.step3.desc': '倒计时结束后，将按你的设置自动加入会议。告别因遗忘会议而造成的迟到，让每一次会议都能准时开始。',
    'privacy.note.title': '隐私与数据安全',
    'privacy.pill1': '不收集、不保存任何信息',
    'privacy.pill2': '本地处理，不上传任何日程或会议数据',
    'privacy.pill3': '不做分析与追踪',
    'platforms.title': '两种形态，一样顺手',
    'platforms.subtitle': '浏览器方便快捷，桌面轻量却强大。按你的节奏选择。',
    'platforms.chrome.title': 'Chrome 扩展',
    'platforms.chrome.desc': '浏览器内轻量运行，自动打开会议页面。',
    'platforms.chrome.feat1': '自动触发入会',
    'platforms.chrome.feat2': 'Meet 首页提示',
    'platforms.chrome.feat3': '同步设置',
    'platforms.desktop.title': '桌面 App',
    'platforms.desktop.desc': '稳定的桌面体验，系统托盘随时可见。',
    'platforms.desktop.plus': '包含 Chrome 扩展的全部功能，另外还有：',
    'platforms.desktop.feat1': '托盘状态展示',
    'platforms.desktop.feat2': '开机自启',
    'platforms.desktop.feat3': '独立会议窗口',
    'cta.title': '准备好不再错过会议了吗？',
    'cta.subtitle': 'MeetCat 帮你准时入会，迟到从此与你无关。',
    'privacy.title': 'MeetCat 隐私政策',
    'privacy.page_title': '隐私政策',
    'privacy.effective_date': '生效日期：2026年2月1日',
    'privacy.overview.title': '概述',
    'privacy.overview.text': 'MeetCat 采用本地运行设计。我们不收集、存储或传输任何个人信息或使用数据。',
    'privacy.collect.title': '数据收集',
    'privacy.collect.text': '我们不收集任何数据。',
    'privacy.local.title': '本地处理',
    'privacy.local.text': '所有解析和处理都在您的设备上进行。本产品不包含任何网络功能。',
    'privacy.cookies.title': 'Cookie 与分析',
    'privacy.cookies.text': '我们不使用 Cookie、分析或追踪技术。',
    'privacy.thirdparty.title': '第三方服务',
    'privacy.thirdparty.text': '应用下载托管于 GitHub Releases。我们不与其他任何第三方服务集成。',
    'privacy.accounts.title': '账户',
    'privacy.accounts.text': 'MeetCat 不需要账户或认证。但使用 Google Meet 需要 Google 账户，详情请参看 Google Meet 的产品页面。',
    'privacy.contact.title': '联系我们',
    'privacy.contact.text': '如有疑问，请联系 onev@onevcat.com。',
    'privacy.changes.title': '政策变更',
    'privacy.changes.text': '如更新此政策，我们将修订上述生效日期并在此页面发布更新版本。',
    'tos.title': 'MeetCat 服务条款',
    'tos.page_title': '服务条款',
    'tos.effective_date': '生效日期：2026年2月1日',
    'tos.acceptance.title': '条款接受',
    'tos.acceptance.text': '访问或使用 MeetCat 即表示您同意本服务条款。如不同意，请勿使用本产品。',
    'tos.service.title': '服务描述',
    'tos.service.text': 'MeetCat 提供本地工具，帮助您更高效地管理和加入 Google Meet 会议。产品在本地运行，不提供任何网络服务。',
    'tos.warranty.title': '免责声明',
    'tos.warranty.text': 'MeetCat 按"原样"和"可用"基础提供。我们不做任何明示或暗示的保证，包括适销性或特定用途适用性。',
    'tos.liability.title': '责任限制',
    'tos.liability.text': '在法律允许的最大范围内，MeetCat 及其作者不对任何间接、附带、特殊、后果性或惩罚性损害，或任何数据、利润、收入或商业机会的损失承担责任。',
    'tos.reliability.title': '会议可靠性',
    'tos.reliability.text': '您有责任确认您的会议日程和出席情况。我们不保证您能成功加入或出席任何会议，也不保证您不会错过会议。由于存在会议过滤功能，我们也不保证您不会误跳过或误参加任何会议。',
    'tos.technical.title': '技术限制',
    'tos.technical.text': '虽然我们会尽力避免程序出现 Bug 等问题，但无法保证软件完全无缺陷。对于因程序错误或编程缺陷导致的任何问题，我们不承担责任。此外，由于 Google Meet 的规格变更或 UI 变更，我们的服务可能会变得不可用或中断，对此我们也不承担责任。',
    'tos.thirdparty.title': '第三方服务和商标',
    'tos.thirdparty.text': 'Google Meet 是 Google LLC 的商标。MeetCat 与 Google 无关。任何第三方服务的使用均受其条款约束。',
    'tos.attribution.title': '致谢',
    'tos.attribution.text': '应用图标来源：',
    'tos.attribution.link': 'Kitty 图标由 Freepik 创作 - Flaticon',
    'tos.contact.title': '联系我们',
    'tos.contact.text': '有关这些条款的问题可发送至 onev@onevcat.com。',
    'tos.changes.title': '条款变更',
    'tos.changes.text': '我们可能会不时更新这些条款。发布更改时，上述生效日期将更新。',
  },

  en: {
    'nav.home': 'MeetCat',
    'nav.privacy': 'Privacy',
    'nav.terms': 'Terms',
    'lang.switch': 'Switch language',
    'footer.made_with': 'Made with',
    'footer.by': 'by',
    'hero.slogan': 'Never miss a meeting again',
    'hero.subtitle': 'Auto-detect Google Meet schedules, count down to meetings, and join automatically.',
    'hero.cta.chrome': 'Download Chrome Extension',
    'hero.cta.app': 'Download App (macOS)',
    'hero.notes': 'Free · Open Source · Lightweight · No Ads | Windows coming soon',
    'ui.next_meeting': 'Next: ',
    'ui.in_progress': 'In progress: ',
    'ui.no_upcoming': 'No upcoming meetings',
    'ui.time_remaining': 'in',
    'ui.countdown_suffix': '',
    'ui.auto_join_in': 'Auto-join in ',
    'ui.seconds': 's',
    'ui.cancel': 'Cancel',
    'ui.tray_status': 'Status Bar',
    'ui.tray_next': 'Next: ',
    'features.title': 'Core Features, Stay Relaxed',
    'features.subtitle': 'Smart joining that keeps your meetings calm and on time.',
    'features.auto_join.title': 'Smart Auto-Join',
    'features.auto_join.desc': 'Open the meeting page X minutes early. Missing a meeting? Not anymore.',
    'features.countdown.title': 'Countdown + Cancel Anytime',
    'features.countdown.desc': 'A gentle countdown for meeting prep—adjust or cancel anytime',
    'features.mic_cam.title': 'Mic/Camera Default State',
    'features.mic_cam.desc': 'Auto-set before joining so you enter calm and ready.',
    'features.filter.title': 'Meeting Filter',
    'features.filter.desc': 'Set in advance—meetings you don\'t want to auto-join? Skip them.',
    'showcase.title': 'Clear Meeting Status View',
    'showcase.subtitle': 'Timer reminders, pre-join confirmation, and clear cues—everything at a glance.',
    'showcase.home_overlay': 'Home Overlay',
    'showcase.home_caption': 'See next meeting countdown right on the Meet homepage.',
    'showcase.auto_join': 'Auto-Join',
    'showcase.auto_join_caption': 'Countdown before auto-join, cancel anytime.',
    'showcase.tray': 'Tray Display',
    'showcase.tray_caption': 'See next meeting time in the status bar.',
    'how.title': 'How It Works',
    'how.subtitle': 'Three steps, quiet and reliable.',
    'how.step1.title': 'Detect Meetings',
    'how.step1.desc': 'All you need to do is open the Meet homepage (in a browser with the extension installed or in the desktop app) and make sure the next-meeting overlay appears.',
    'how.step2.title': 'Set Trigger Time',
    'how.step2.desc': 'Choose when to open the meeting page based on your settings. Confirm mic and camera on the pre-join page. Once you enter it, the countdown starts.',
    'how.step3.title': 'Auto-Join',
    'how.step3.desc': 'When the countdown ends, it auto-joins the meeting based on your settings. Say goodbye to late joins from forgotten meetings—start on time, every time.',
    'privacy.note.title': 'Privacy & Data Security',
    'privacy.pill1': 'No data collection or storage',
    'privacy.pill2': 'Local processing—nothing is uploaded',
    'privacy.pill3': 'No analytics or tracking',
    'platforms.title': 'Two Forms, Same Smooth Experience',
    'platforms.subtitle': 'Fast in the browser. Lightweight, yet powerful on desktop. Choose your pace.',
    'platforms.chrome.title': 'Chrome Extension',
    'platforms.chrome.desc': 'Lightweight in-browser, auto-opens meeting pages.',
    'platforms.chrome.feat1': 'Auto-trigger joining',
    'platforms.chrome.feat2': 'Meet homepage alerts',
    'platforms.chrome.feat3': 'Sync settings',
    'platforms.desktop.title': 'Desktop App',
    'platforms.desktop.desc': 'Stable desktop experience, always visible in system tray.',
    'platforms.desktop.plus': 'Everything in the Chrome extension, plus:',
    'platforms.desktop.feat1': 'Tray status display',
    'platforms.desktop.feat2': 'Auto-start on boot',
    'platforms.desktop.feat3': 'Dedicated meeting window',
    'cta.title': 'Ready to never miss a meeting?',
    'cta.subtitle': 'MeetCat gets you into meetings on time—being late is no longer on you.',
    'privacy.title': 'MeetCat Privacy Policy',
    'privacy.page_title': 'Privacy Policy',
    'privacy.effective_date': 'Effective Date: February 1, 2026',
    'privacy.overview.title': 'Overview',
    'privacy.overview.text': 'MeetCat is built to run locally. We do not collect, store, or transmit any personal information or usage data.',
    'privacy.collect.title': 'Data We Collect',
    'privacy.collect.text': 'We do not collect any data.',
    'privacy.local.title': 'Local Processing',
    'privacy.local.text': 'All parsing and processing happens on your device. The product does not include any networked features.',
    'privacy.cookies.title': 'Cookies and Analytics',
    'privacy.cookies.text': 'We do not use cookies, analytics, or tracking technologies.',
    'privacy.thirdparty.title': 'Third-Party Services',
    'privacy.thirdparty.text': 'App downloads are hosted on GitHub Releases. We do not otherwise integrate with any third-party services.',
    'privacy.accounts.title': 'Accounts',
    'privacy.accounts.text': 'MeetCat does not require accounts or authentication. However, using Google Meet requires a Google account. Please refer to Google Meet\'s product page for details.',
    'privacy.contact.title': 'Contact',
    'privacy.contact.text': 'If you have questions about this policy, contact us at onev@onevcat.com.',
    'privacy.changes.title': 'Changes',
    'privacy.changes.text': 'If we update this policy, we will revise the effective date above and post the updated version on this page.',
    'tos.title': 'MeetCat Terms of Service',
    'tos.page_title': 'Terms of Service',
    'tos.effective_date': 'Effective Date: February 1, 2026',
    'tos.acceptance.title': 'Acceptance of Terms',
    'tos.acceptance.text': 'By accessing or using MeetCat, you agree to these Terms of Service. If you do not agree, do not use the product.',
    'tos.service.title': 'Service Description',
    'tos.service.text': 'MeetCat provides local tools that help you manage and join Google Meet sessions more efficiently. The product operates locally and does not provide any networked services.',
    'tos.warranty.title': 'No Warranty',
    'tos.warranty.text': 'MeetCat is provided on an "as is" and "as available" basis. We make no warranties of any kind, express or implied, including fitness for a particular purpose or non-infringement.',
    'tos.liability.title': 'Limitations of Liability',
    'tos.liability.text': 'To the maximum extent permitted by law, MeetCat and its author are not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, revenue, or business opportunities.',
    'tos.reliability.title': 'Meeting Reliability',
    'tos.reliability.text': 'You are responsible for confirming your meeting schedules and attendance. We do not guarantee that you will successfully join or attend any meeting, or that you will not miss a meeting. Due to the meeting filter feature, we also do not guarantee that you will not accidentally skip or join any meeting.',
    'tos.technical.title': 'Technical Limitations',
    'tos.technical.text': 'While we strive to avoid bugs and errors, we cannot guarantee that the software will be completely free of defects. We are not responsible for any issues caused by bugs or programming errors. Additionally, due to changes in Google Meet\'s specifications or UI, our service may become unavailable or interrupted, for which we also assume no responsibility.',
    'tos.thirdparty.title': 'Third-Party Services and Trademarks',
    'tos.thirdparty.text': 'Google Meet is a trademark of Google LLC. MeetCat is not affiliated with Google. Any use of third-party services is subject to their terms.',
    'tos.attribution.title': 'Attribution',
    'tos.attribution.text': 'App icon attribution:',
    'tos.attribution.link': 'Kitty icons created by Freepik - Flaticon',
    'tos.contact.title': 'Contact',
    'tos.contact.text': 'Questions about these terms can be sent to onev@onevcat.com.',
    'tos.changes.title': 'Changes',
    'tos.changes.text': 'We may update these terms from time to time. The effective date above will be updated when changes are posted.',
  },

  ja: {
    'nav.home': 'MeetCat',
    'nav.privacy': 'プライバシー',
    'nav.terms': '利用規約',
    'lang.switch': '言語を切り替え',
    'footer.made_with': 'Made with',
    'footer.by': 'by',
    'hero.slogan': 'もうミーティングを見逃さない',
    'hero.subtitle': 'Google Meet の予定を自動認識し、カウントダウン通知して自動参加。',
    'hero.cta.chrome': 'Chrome 拡張機能をダウンロード',
    'hero.cta.app': 'アプリをダウンロード（macOS）',
    'hero.notes': '無料 · オープンソース · 軽量 · 広告なし | Windows 版近日公開',
    'ui.next_meeting': '次：',
    'ui.in_progress': '進行中：',
    'ui.no_upcoming': '予定されているミーティングはありません',
    'ui.time_remaining': 'あと',
    'ui.countdown_suffix': '',
    'ui.auto_join_in': '自動参加まで ',
    'ui.seconds': '秒',
    'ui.cancel': 'キャンセル',
    'ui.tray_status': 'ステータスバー表示',
    'ui.tray_next': '次：',
    'features.title': 'コア機能で、気楽に',
    'features.subtitle': 'スマート参加で、日常のミーティングリズムを穏やかに',
    'features.auto_join.title': 'スマート自動参加',
    'features.auto_join.desc': 'X 分前にミーティングページを開きます。ミーティングを見逃す？ありえません。',
    'features.countdown.title': 'カウントダウン + いつでもキャンセル',
    'features.countdown.desc': 'ミーティング準備のやさしいカウントダウン—調整もキャンセルも自由に',
    'features.mic_cam.title': 'マイク/カメラのデフォルト状態',
    'features.mic_cam.desc': '参加前に自動設定。静かに、余裕をもって参加できます。',
    'features.filter.title': 'ミーティングフィルタ',
    'features.filter.desc': '事前に設定—自動参加したくないミーティング？スキップします。',
    'showcase.title': 'ひと目で分かるミーティング状況UI',
    'showcase.subtitle': 'タイマー通知、参加前確認、分かりやすい表示—すべて一目で。',
    'showcase.home_overlay': 'ホームオーバーレイ',
    'showcase.home_caption': 'Meet ホームページで次のミーティングのカウントダウンを直接表示。',
    'showcase.auto_join': '自動参加',
    'showcase.auto_join_caption': '自動参加前のカウントダウン、いつでもキャンセル可能。',
    'showcase.tray': 'トレイ表示',
    'showcase.tray_caption': 'ステータスバーに次のミーティング時間を表示。',
    'how.title': '仕組み',
    'how.subtitle': '3ステップ、静かで確実。',
    'how.step1.title': 'ミーティングを検出',
    'how.step1.desc': 'やることは Meet ホームページを開くだけ（拡張機能を入れたブラウザ、またはデスクトップアプリ）。次のミーティングのオーバーレイが表示されることを確認してください。',
    'how.step2.title': 'トリガー時間を設定',
    'how.step2.desc': '設定に基づいてミーティングページを開く時間を決定。ミーティング準備ページでマイクとカメラの状態を確認します。準備ページに入るとカウントダウンが始まります。',
    'how.step3.title': '自動参加',
    'how.step3.desc': 'カウントダウンが終わると、設定に従って自動的に参加します。ミーティングを忘れて遅刻することとお別れして、毎回のミーティングを時間通りに始めましょう。',
    'privacy.note.title': 'プライバシーとデータセキュリティ',
    'privacy.pill1': '情報を収集・保存しません',
    'privacy.pill2': 'ローカル処理、予定や会議情報は送信しません',
    'privacy.pill3': '分析・トラッキングなし',
    'platforms.title': '2つの形態、同じ使いやすさ',
    'platforms.subtitle': 'ブラウザは手軽で速く、デスクトップは軽量でもパワフル。あなたのペースで選択。',
    'platforms.chrome.title': 'Chrome 拡張機能',
    'platforms.chrome.desc': 'ブラウザ内で軽量に動作し、ミーティングページを自動で開きます。',
    'platforms.chrome.feat1': '自動参加トリガー',
    'platforms.chrome.feat2': 'Meet ホームページ通知',
    'platforms.chrome.feat3': '設定の同期',
    'platforms.desktop.title': 'デスクトップアプリ',
    'platforms.desktop.desc': '安定したデスクトップ体験、システムトレイで常時表示。',
    'platforms.desktop.plus': 'Chrome 拡張の全機能に加えて：',
    'platforms.desktop.feat1': 'トレイ状態表示',
    'platforms.desktop.feat2': '起動時自動起動',
    'platforms.desktop.feat3': '専用ミーティングウィンドウ',
    'cta.title': 'もうミーティングを見逃さない準備はできましたか？',
    'cta.subtitle': 'MeetCat が時間通りの参加をサポート。遅刻はもうあなたのせいじゃない。',
    'privacy.title': 'MeetCat プライバシーポリシー',
    'privacy.page_title': 'プライバシーポリシー',
    'privacy.effective_date': '発効日：2026年2月1日',
    'privacy.overview.title': '概要',
    'privacy.overview.text': 'MeetCat はローカルで動作するよう設計されています。個人情報や使用データを収集、保存、送信することはありません。',
    'privacy.collect.title': '収集するデータ',
    'privacy.collect.text': 'データを収集しません。',
    'privacy.local.title': 'ローカル処理',
    'privacy.local.text': 'すべての解析と処理はお使いのデバイス上で行われます。ネットワーク機能は含まれていません。',
    'privacy.cookies.title': 'Cookie と分析',
    'privacy.cookies.text': 'Cookie、分析、トラッキング技術を使用しません。',
    'privacy.thirdparty.title': 'サードパーティサービス',
    'privacy.thirdparty.text': 'アプリのダウンロードは GitHub Releases でホストされています。それ以外のサードパーティサービスとは統合していません。',
    'privacy.accounts.title': 'アカウント',
    'privacy.accounts.text': 'MeetCat はアカウントや認証を必要としません。ただし、Google Meet を使用するには Google アカウントが必要です。詳細は Google Meet の製品ページをご確認ください。',
    'privacy.contact.title': 'お問い合わせ',
    'privacy.contact.text': 'このポリシーについてご質問がある場合は、onev@onevcat.com までご連絡ください。',
    'privacy.changes.title': 'ポリシーの変更',
    'privacy.changes.text': 'このポリシーを更新した場合、上記の発効日を改訂し、このページに更新版を掲載します。',
    'tos.title': 'MeetCat 利用規約',
    'tos.page_title': '利用規約',
    'tos.effective_date': '発効日：2026年2月1日',
    'tos.acceptance.title': '規約への同意',
    'tos.acceptance.text': 'MeetCat にアクセスまたは使用することで、本利用規約に同意したことになります。同意しない場合は、製品を使用しないでください。',
    'tos.service.title': 'サービスの説明',
    'tos.service.text': 'MeetCat は、Google Meet セッションをより効率的に管理・参加するためのローカルツールを提供します。製品はローカルで動作し、ネットワークサービスは提供しません。',
    'tos.warranty.title': '保証の免責',
    'tos.warranty.text': 'MeetCat は「現状のまま」「利用可能な状態で」提供されます。特定目的への適合性や非侵害を含め、明示的または黙示的な保証は一切行いません。',
    'tos.liability.title': '責任の制限',
    'tos.liability.text': '法律で許容される最大限の範囲で、MeetCat およびその作者は、間接的、偶発的、特別、結果的、または懲罰的損害、またはデータ、利益、収益、ビジネス機会の損失について責任を負いません。',
    'tos.reliability.title': 'ミーティングの信頼性',
    'tos.reliability.text': 'ミーティングのスケジュールと出席の確認はお客様の責任です。ミーティングに正常に参加できること、またはミーティングを見逃さないことを保証しません。ミーティングフィルタ機能があるため、誤ってスキップしたり参加したりしないことも保証しません。',
    'tos.technical.title': '技術的制限',
    'tos.technical.text': 'バグやエラーを避けるよう努めていますが、ソフトウェアが完全に欠陥がないことを保証することはできません。バグやプログラミングエラーによる問題については責任を負いません。また、Google Meet の仕様変更や UI 変更により、サービスが利用できなくなったり中断したりする可能性があり、これについても責任を負いません。',
    'tos.thirdparty.title': 'サードパーティサービスと商標',
    'tos.thirdparty.text': 'Google Meet は Google LLC の商標です。MeetCat は Google とは関係ありません。サードパーティサービスの使用はそれらの規約に従います。',
    'tos.attribution.title': 'アトリビューション',
    'tos.attribution.text': 'アプリアイコンのアトリビューション：',
    'tos.attribution.link': 'Kitty アイコンは Freepik 作成 - Flaticon',
    'tos.contact.title': 'お問い合わせ',
    'tos.contact.text': 'これらの規約についてのお問い合わせは onev@onevcat.com までお送りください。',
    'tos.changes.title': '規約の変更',
    'tos.changes.text': 'これらの規約は随時更新される場合があります。変更が投稿されると、上記の発効日が更新されます。',
  },

  ko: {
    'nav.home': 'MeetCat',
    'nav.privacy': '개인정보',
    'nav.terms': '약관',
    'lang.switch': '언어 전환',
    'footer.made_with': 'Made with',
    'footer.by': 'by',
    'hero.slogan': '더 이상 회의를 놓치지 마세요',
    'hero.subtitle': 'Google Meet 일정을 자동 인식하고 카운트다운으로 알린 뒤 자동으로 참여합니다.',
    'hero.cta.chrome': 'Chrome 확장 프로그램 다운로드',
    'hero.cta.app': '앱 다운로드 (macOS)',
    'hero.notes': '무료 · 오픈 소스 · 가벼움 · 광고 없음 | Windows 곧 출시',
    'ui.next_meeting': '다음: ',
    'ui.in_progress': '진행 중: ',
    'ui.no_upcoming': '예정된 회의 없음',
    'ui.time_remaining': '남은 시간',
    'ui.countdown_suffix': '',
    'ui.auto_join_in': '자동 참여까지 ',
    'ui.seconds': '초',
    'ui.cancel': '취소',
    'ui.tray_status': '상태 바 표시',
    'ui.tray_next': '다음: ',
    'features.title': '핵심 기능, 여유롭게',
    'features.subtitle': '스마트한 참여로 일상의 회의 리듬을 차분하게',
    'features.auto_join.title': '스마트 자동 참여',
    'features.auto_join.desc': 'X분 전에 회의 페이지를 엽니다. 회의를 놓칠 일은 없습니다.',
    'features.countdown.title': '카운트다운 + 언제든 취소',
    'features.countdown.desc': '회의 준비를 위한 부드러운 카운트다운—언제든 조정 또는 취소',
    'features.mic_cam.title': '마이크/카메라 기본 상태',
    'features.mic_cam.desc': '참여 전 자동 설정, 조용하고 여유롭게 입장.',
    'features.filter.title': '회의 필터',
    'features.filter.desc': '미리 설정—자동 참여하고 싶지 않은 회의? 건너뛰기.',
    'showcase.title': '한눈에 확인 가능한 회의 상태 UI',
    'showcase.subtitle': '타이머 알림, 참여 전 확인, 명확한 안내—한눈에 확인.',
    'showcase.home_overlay': '홈 오버레이',
    'showcase.home_caption': 'Meet 홈페이지에서 다음 회의 카운트다운을 직접 확인.',
    'showcase.auto_join': '자동 참여',
    'showcase.auto_join_caption': '자동 참여 전 카운트다운, 언제든 취소 가능.',
    'showcase.tray': '트레이 표시',
    'showcase.tray_caption': '상태 바에서 다음 회의 시간 확인.',
    'how.title': '작동 방식',
    'how.subtitle': '세 단계면 충분합니다. 조용하고 믿을 수 있습니다.',
    'how.step1.title': '회의 감지',
    'how.step1.desc': '당신이 할 일은 Meet 홈페이지를 여는 것뿐입니다(확장 프로그램이 설치된 브라우저 또는 데스크톱 앱). 다음 회의 오버레이가 표시되는지 확인하세요.',
    'how.step2.title': '트리거 시간 설정',
    'how.step2.desc': '설정에 따라 회의 페이지를 여는 시간을 정합니다. 회의 준비 페이지에서 마이크와 카메라 상태를 확인하세요. 준비 페이지에 들어가면 카운트다운이 시작됩니다.',
    'how.step3.title': '자동 참여',
    'how.step3.desc': '카운트다운이 끝나면 설정에 따라 자동으로 회의에 참여합니다. 잊어버린 회의로 인한 지각과 작별하고, 매 회의가 정시에 시작되도록 하세요.',
    'privacy.note.title': '개인정보 및 데이터 보안',
    'privacy.pill1': '데이터 수집 또는 저장 없음',
    'privacy.pill2': '로컬 처리, 일정/회의 데이터 업로드 없음',
    'privacy.pill3': '분석 및 추적 없음',
    'platforms.title': '두 가지 형태, 같은 매끄러운 경험',
    'platforms.subtitle': '브라우저는 빠르고 간편하게, 데스크톱은 가볍지만 강력하게. 당신의 속도에 맞게 선택하세요.',
    'platforms.chrome.title': 'Chrome 확장 프로그램',
    'platforms.chrome.desc': '브라우저 내에서 가볍게 실행, 회의 페이지를 자동으로 엽니다.',
    'platforms.chrome.feat1': '자동 참여 트리거',
    'platforms.chrome.feat2': 'Meet 홈페이지 알림',
    'platforms.chrome.feat3': '설정 동기화',
    'platforms.desktop.title': '데스크톱 앱',
    'platforms.desktop.desc': '안정적인 데스크톱 경험, 시스템 트레이에서 항상 확인 가능.',
    'platforms.desktop.plus': 'Chrome 확장 기능에 더해:',
    'platforms.desktop.feat1': '트레이 상태 표시',
    'platforms.desktop.feat2': '부팅 시 자동 시작',
    'platforms.desktop.feat3': '전용 회의 창',
    'cta.title': '더 이상 회의를 놓치지 않을 준비가 되셨나요?',
    'cta.subtitle': 'MeetCat이 회의에 제때 들어가도록 도와줍니다—지각은 더 이상 당신 탓이 아닙니다.',
    'privacy.title': 'MeetCat 개인정보 처리방침',
    'privacy.page_title': '개인정보 처리방침',
    'privacy.effective_date': '발효일: 2026년 2월 1일',
    'privacy.overview.title': '개요',
    'privacy.overview.text': 'MeetCat은 로컬에서 실행되도록 설계되었습니다. 개인정보나 사용 데이터를 수집, 저장 또는 전송하지 않습니다.',
    'privacy.collect.title': '수집하는 데이터',
    'privacy.collect.text': '데이터를 수집하지 않습니다.',
    'privacy.local.title': '로컬 처리',
    'privacy.local.text': '모든 파싱과 처리는 사용자의 기기에서 이루어집니다. 네트워크 기능은 포함되어 있지 않습니다.',
    'privacy.cookies.title': '쿠키 및 분석',
    'privacy.cookies.text': '쿠키, 분석 또는 추적 기술을 사용하지 않습니다.',
    'privacy.thirdparty.title': '제3자 서비스',
    'privacy.thirdparty.text': '앱 다운로드는 GitHub Releases에서 호스팅됩니다. 그 외에는 제3자 서비스와 통합하지 않습니다.',
    'privacy.accounts.title': '계정',
    'privacy.accounts.text': 'MeetCat은 계정이나 인증이 필요하지 않습니다. 단, Google Meet를 사용하려면 Google 계정이 필요합니다. 자세한 내용은 Google Meet 제품 페이지를 참조하세요.',
    'privacy.contact.title': '문의하기',
    'privacy.contact.text': '이 정책에 대해 궁금한 점이 있으면 onev@onevcat.com으로 문의하세요.',
    'privacy.changes.title': '정책 변경',
    'privacy.changes.text': '이 정책을 업데이트하면 위의 발효일을 수정하고 이 페이지에 업데이트된 버전을 게시합니다.',
    'tos.title': 'MeetCat 이용약관',
    'tos.page_title': '이용약관',
    'tos.effective_date': '발효일: 2026년 2월 1일',
    'tos.acceptance.title': '약관 동의',
    'tos.acceptance.text': 'MeetCat에 접근하거나 사용함으로써 본 이용약관에 동의하는 것입니다. 동의하지 않으면 제품을 사용하지 마세요.',
    'tos.service.title': '서비스 설명',
    'tos.service.text': 'MeetCat은 Google Meet 세션을 더 효율적으로 관리하고 참여할 수 있는 로컬 도구를 제공합니다. 제품은 로컬에서 작동하며 네트워크 서비스를 제공하지 않습니다.',
    'tos.warranty.title': '보증 부인',
    'tos.warranty.text': 'MeetCat은 "있는 그대로" 및 "사용 가능한 대로" 제공됩니다. 특정 목적에의 적합성이나 비침해를 포함하여 어떠한 명시적 또는 묵시적 보증도 하지 않습니다.',
    'tos.liability.title': '책임 제한',
    'tos.liability.text': '법이 허용하는 최대 범위 내에서 MeetCat 및 그 저작자는 간접적, 우발적, 특별, 결과적 또는 징벌적 손해, 또는 데이터, 이익, 수익 또는 사업 기회의 손실에 대해 책임을 지지 않습니다.',
    'tos.reliability.title': '회의 신뢰성',
    'tos.reliability.text': '회의 일정과 출석 확인은 사용자의 책임입니다. 회의에 성공적으로 참여하거나 출석할 것을 보장하지 않으며, 회의를 놓치지 않을 것을 보장하지 않습니다. 회의 필터 기능이 있으므로, 실수로 건너뛰거나 참여하지 않는다고도 보장하지 않습니다.',
    'tos.technical.title': '기술적 제한',
    'tos.technical.text': '버그와 오류를 피하기 위해 최선을 다하고 있지만, 소프트웨어가 완전히 결함 없이 작동한다고 보장할 수는 없습니다. 버그나 프로그래밍 오류로 인한 문제에 대해서는 책임을 지지 않습니다. 또한 Google Meet의 사양 변경이나 UI 변경으로 인해 서비스를 사용할 수 없거나 중단될 수 있으며, 이에 대해서도 책임을 지지 않습니다.',
    'tos.thirdparty.title': '제3자 서비스 및 상표',
    'tos.thirdparty.text': 'Google Meet는 Google LLC의 상표입니다. MeetCat은 Google과 제휴하지 않았습니다. 제3자 서비스의 사용은 해당 서비스의 약관을 따릅니다.',
    'tos.attribution.title': '저작권 표시',
    'tos.attribution.text': '앱 아이콘 저작권:',
    'tos.attribution.link': 'Kitty 아이콘은 Freepik이 제작함 - Flaticon',
    'tos.contact.title': '문의하기',
    'tos.contact.text': '이 약관에 대한 문의는 onev@onevcat.com으로 보내주세요.',
    'tos.changes.title': '약관 변경',
    'tos.changes.text': '이 약관은 수시로 업데이트될 수 있습니다. 변경사항이 게시되면 위의 발효일이 업데이트됩니다.',
  },
};

const languageNames = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
};



const langConfig = {
  en: { dir: '', htmlLang: 'en' },
  ja: { dir: 'ja', htmlLang: 'ja' },
  zh: { dir: 'zh', htmlLang: 'zh' },
  ko: { dir: 'ko', htmlLang: 'ko' },
};

function t(lang, key) {
  return translations[lang]?.[key] || translations.en?.[key] || key;
}

function getBaseUrl(lang) {
  return langConfig[lang].dir ? `/${langConfig[lang].dir}` : '';
}

function generateLangDropdown(currentLang) {
  const items = Object.keys(langConfig).map(lang => {
    const baseUrl = getBaseUrl(lang);
    const href = baseUrl || '/';
    const activeClass = lang === currentLang ? ' active' : '';
    return `<a class="lang-dropdown-item${activeClass}" href="${href}">${languageNames[lang]}</a>`;
  }).join('\n              ');
  
  return `<div class="lang-dropdown">
              ${items}
            </div>`;
}

function processHtml(html, lang) {
  const baseUrl = getBaseUrl(lang);
  
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${langConfig[lang].htmlLang}"`);
  
  html = html.replace(/data-i18n="([^"]+)"[^>]*>([^<]*)</g, (match, key, content) => {
    const translated = t(lang, key);
    return `data-i18n="${key}">${translated}<`;
  });
  
  html = html.replace(/data-i18n-aria="([^"]+)"[^>]*aria-label="[^"]*"/g, (match, key) => {
    const translated = t(lang, key);
    return `data-i18n-aria="${key}" aria-label="${translated}"`;
  });
  
  html = html.replace(/<title[^>]*data-i18n="([^"]+)"[^>]*>[^<]*<\/title>/g, (match, key) => {
    const translated = t(lang, key);
    return `<title>${translated}</title>`;
  });
  
  html = html.replace(/<div class="lang-dropdown">[\s\S]*?<\/div>/g, '');
  
  html = html.replace(
    /<button class="lang-switch"[^>]*>[\s\S]*?<\/button>/,
    `<button class="lang-switch" type="button" aria-label="${t(lang, 'lang.switch')}">
              <span class="lang-icon material-symbols-rounded" aria-hidden="true">translate</span>
            </button>
            ${generateLangDropdown(lang)}`
  );

  html = html.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  html = html.replace(/href="\/privacy\.html"/g, `href="${baseUrl}/privacy.html"`);
  html = html.replace(/href="\/tos\.html"/g, `href="${baseUrl}/tos.html"`);
  html = html.replace(/href="\/#top"/g, `href="${baseUrl || '/'}#top"`);
  html = html.replace(/href="\/" aria-label/g, `href="${baseUrl || '/'}" aria-label`);
  
  html = html.replace(/<script[^>]*src="\/src\/i18n\.js"[^>]*><\/script>/g, '');
  html = html.replace(/<script type="module" src="\/src\/i18n\.js"><\/script>/g, '');
  
  html = html.replace(/<script>\s*document\.querySelector\('\.lang-switch'\)[\s\S]*?<\/script>\s*/g, '');
  
  html = html.replace(
    '</body>',
    `<script>
    document.querySelector('.lang-switch')?.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelector('.lang-dropdown')?.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      document.querySelector('.lang-dropdown')?.classList.remove('open');
    });
  </script>
</body>`
  );
  
  return html;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generateStaticPages() {
  const templateFiles = ['index.html', 'privacy.html', 'tos.html'];
  
  for (const lang of Object.keys(langConfig)) {
    const config = langConfig[lang];
    const outputDir = config.dir ? path.join(rootDir, config.dir) : rootDir;
    
    if (config.dir) {
      ensureDir(outputDir);
    }
    
    for (const file of templateFiles) {
      const templatePath = path.join(rootDir, file);
      if (!fs.existsSync(templatePath)) {
        console.warn(`Template not found: ${templatePath}`);
        continue;
      }
      
      const template = fs.readFileSync(templatePath, 'utf-8');
      const processed = processHtml(template, lang);
      
      const outputPath = config.dir 
        ? path.join(outputDir, file)
        : path.join(rootDir, file);
      
      if (config.dir) {
        fs.writeFileSync(outputPath, processed, 'utf-8');
        console.log(`Generated: ${config.dir}/${file}`);
      } else {
        fs.writeFileSync(outputPath, processed, 'utf-8');
        console.log(`Generated: ${file} (${lang})`);
      }
    }
  }
  
  console.log('\nStatic pages generated successfully!');
}

generateStaticPages();
