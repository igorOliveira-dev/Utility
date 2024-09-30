import Link from "next/link";

export default function ReturnButton() {
  return (
    <Link href="/blog" className="p-2 transparent bgHover transition-all rounded-lg border border-custom-color">
      {"< Início do blog"}
    </Link>
  );
}
