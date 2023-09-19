"use client";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    console.log(session);
  }

  return (
    <nav className="bg-gray-50 text-black flex justify-between py-5 px-10 items-center">
      <Link href="/" className="text-xl sm:text-2xl font-semibold">
        <h1>NextGoogle</h1>
      </Link>
      <ul className="flex gap-10 items-center text-lg sm:text-xl text-gray-500">
        {session ? (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="flex items-center gap-1">
              <h3>{session?.user?.name}</h3>
              <p>{session?.user?.email}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={session?.user?.image!}
                alt={session?.user?.name!}
                className="w-12 rounded-full"
              />
            </li>
            <li>
              <button onClick={() => signOut({ callbackUrl: "/" })}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="hover:text-gray-950 transition-colors"
              >
                Login
              </button>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-950 transition-colors"
              >
                About
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
