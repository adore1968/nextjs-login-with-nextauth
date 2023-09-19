"use client";
import { useSession, signOut } from "next-auth/react";

function DashboardPage() {
  const { data: session } = useSession();

  return (
    <section className="flex justify-center items-center h-[calc(100vh-7rem)] sm:px-0 px-5">
      <div className="container mx-auto sm:max-w-2xl flex flex-col gap-5">
        <h2 className="text-center text-2xl sm:text-3xl font-bold">Profile</h2>
        <div className="bg-gray-700 flex p-5 sm:gap-0 gap-5 justify-between rounded">
          <div>
            <h2 className="text-xl sm:text-2xl font-medium mb-1">
              {session?.user?.name}
            </h2>
            <p className="text-lg sm:text-xl text-gray-200">
              {session?.user?.email}
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={session?.user?.image!}
            alt={session?.user?.name!}
            className="rounded-full"
          />
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="bg-red-600 hover:bg-red-500 transition-colors text-lg sm:text-xl block mx-auto px-4 py-2"
        >
          Logout
        </button>
      </div>
    </section>
  );
}

export default DashboardPage;
