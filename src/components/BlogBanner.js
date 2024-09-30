import Link from "next/link";

export default function BlogBanner() {
  return (
    <div className=" mt-8 transparent20 w-full border border-custom">
      <Link href="blog" className="flex flex-wrap items-center gap-2 justify-center p-4">
        <h3 className="text-2xl font-bold">Confira nosso blog!</h3>
        <p>- Tecnologia, tendências e muito mais!</p>
      </Link>
    </div>
  );
}
