export default function CountdownOverlayCard({
  seconds = 17,
  progress = 0.72,
  iconSrc = "/meetcat-icon.png",
}) {
  const clamped = Math.max(0, Math.min(1, progress));
  return (
    <div className="overlay-card overlay-countdown" aria-label="MeetCat auto-join countdown">
      <img className="overlay-icon" src={iconSrc} alt="MeetCat" />
      <div className="overlay-copy overlay-copy-wide">
        <div className="overlay-title">
          Auto-joining in <span className="overlay-countdown">{seconds}s</span>
        </div>
        <div className="overlay-progress">
          <span className="overlay-progress-fill" style={{ width: `${clamped * 100}%` }} />
        </div>
      </div>
      <button className="overlay-cancel" type="button">
        Cancel
      </button>
    </div>
  );
}
