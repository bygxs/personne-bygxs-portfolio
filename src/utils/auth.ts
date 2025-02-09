import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function hasCompletedOnboarding(userId: string): Promise<boolean> {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    const userData = userSnap.data();
    return userData.onboardingCompleted === true;
  }
  
  return false;
}
