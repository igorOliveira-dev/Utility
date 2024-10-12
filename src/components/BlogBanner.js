import Link from "next/link";

export default function BlogBanner() {
  return (
    <div className="transition-all mt-8 transparent bgHover w-full border border-custom-color rounded-xl m-auto">
      <Link href="blog" className="flex flex-wrap items-center gap-2 justify-center p-4">
        <h3 className="text-2xl font-bold">Confira nosso blog de tecnologia!</h3>
      </Link>
    </div>
  );
}
