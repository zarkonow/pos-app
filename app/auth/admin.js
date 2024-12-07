import { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { useRouter } from 'next/navigation';

export default function Admin() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/login'); // Ako korisnik nije prijavljen, preusmeri ga na login
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dobrodošli, {user.email}</h1>
      {/* Ostatak admin stranice */}
    </div>
  );
}
