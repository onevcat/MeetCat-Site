export default function HomeOverlayCard({
  title = "Product Brainstorm",
  time = "31:59",
  iconSrc = "/meetcat-icon.png",
}) {
  return (
    <div className="overlay-card overlay-home" aria-label="MeetCat homepage overlay">
      <img className="overlay-icon" src={iconSrc} alt="MeetCat" />
      <div className="overlay-copy">
        <div className="overlay-title">Next: {title}</div>
        <div className="overlay-subtitle">
          <span>in </span>
          <span className="overlay-countdown">{time}</span>
        </div>
      </div>
    </div>
  );
}
