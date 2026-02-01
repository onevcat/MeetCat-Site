export default function Chip({ label, tone = "blue" }) {
  return (
    <span className={`chip chip-${tone}`}>
      {label}
    </span>
  );
}
