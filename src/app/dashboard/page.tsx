// src/app/dashboard/page.tsx
import { useState, useEffect } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

interface Activity {
  id: string;
  type: string;  // Just the type for now
  // Add other fields as you need them
}

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState<Activity[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchData(currentUser.uid);
      } else {
        router.push('/signin');
      }
    });
    return () => unsubscribe();
  }, [router, user]);

  const fetchData = async (userId: string) => {
    try {
      const db = getFirestore();
      const q = query(collection(db, 'users', userId, 'activity')); // ***REPLACE with your path***
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        type: doc.data().type, // Get the 'type' field (adjust as needed)
        // Add other fields as you need them
      }));
      setActivities(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error (e.g., display an error message)
    }
  };


  if (!activities) { // Display a simple message while loading
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.type}</li> // Display the 'type'
      ))}
    </div>
  );
}