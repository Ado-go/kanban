type BadgeProps = {
  badgeName: string;
  color: string;
};

export default function Badge({ badgeName, color }: BadgeProps) {
  return (
    <div
      className="border-2 text-black rounded pl-2 pr-2"
      style={{ backgroundColor: color, borderColor: color }}
    >
      <p className="text-xs">{badgeName}</p>
    </div>
  );
}
