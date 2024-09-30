import Link from "next/link";

export default function Article({ title, description, date, readTime, path }) {
  return (
    <Link href={path} className="transparent p-6 rounded-lg transition-all bgHover">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-transparent90 mb-4">{description}</p>
      <p className="text-transparent text-sm">
        {date} - {readTime} min de leitura
      </p>
    </Link>
  );
}
