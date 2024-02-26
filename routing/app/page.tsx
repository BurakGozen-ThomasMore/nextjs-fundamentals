import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-8">
      <h1 className="text-3xl">Home</h1>

      <div className="flex gap-10">
        <Link href="/diensten" className="hover:underline">
          Diensten
        </Link>
        <Link href="/over-ons" className="hover:underline">
          Over ons
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </main>
  );
}
