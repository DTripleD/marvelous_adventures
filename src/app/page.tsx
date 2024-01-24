import Link from "next/link";

export default function Home() {
  return (
    <Link href="/comics" className="bg-red-50">
      All comics
    </Link>
  );
}
