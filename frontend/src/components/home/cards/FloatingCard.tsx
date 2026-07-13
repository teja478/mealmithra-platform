interface FloatingCardProps {
  title: string;
  value: string;
}

export default function FloatingCard({
  title,
  value,
}: FloatingCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-green-100
        bg-white/80
        backdrop-blur-xl
        p-5
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-105
        hover:shadow-green-100
"
    >
      <p className="text-sm text-neutral-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-green-700">
        {value}
      </h3>
    </div>
  );
}