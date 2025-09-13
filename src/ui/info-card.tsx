export const InfoCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg p-6 bg-zinc-800">
      <span className="rounded-full bg-zinc-500/20 p-3">{icon}</span>
      <div>
        <p className="text-2xl font-medium text-white">{value}</p>
        <p className="text-sm text-gray-300">{title}</p>
      </div>
    </div>
  );
};
