type BadgeProps = {
  badgeName: string;
};

export default function Badge({ badgeName }: BadgeProps) {
  return (
    <div className="border-2 rounded pl-2 pr-2">
      <p className="text-xs">{badgeName}</p>
    </div>
  );
}
