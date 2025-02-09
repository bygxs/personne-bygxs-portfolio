"use state";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AuthNav() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/"); // redirect   router.push("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/dashboard"
              className="font-bold text-xl text-gray-800 dark:text-white"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/settings"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Settings
            </Link>
            <button
              onClick={handleSignOut}
              className="ml-4 bg-pink-900 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
