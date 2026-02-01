export default function TrayStatusStrip({
  time = "5:02 PM",
  title = "Product Brainstorm",
  iconSrc = "/meetcat-icon.png",
}) {
  return (
    <div className="tray-strip" aria-label="MeetCat tray status">
      <img className="tray-icon" src={iconSrc} alt="MeetCat" />
      <span className="tray-text">
        {time} - {title}
      </span>
    </div>
  );
}
