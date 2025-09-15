export const Input = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-zinc-400 focus:border-zinc-400 transition"
      {...props}
    />
  );
};
