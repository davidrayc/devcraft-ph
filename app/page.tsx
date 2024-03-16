'use client';
// import { useSession } from 'next-auth/react';
// import { redirect } from 'next/navigation';
// import { useEffect } from 'react';
// import Login from '../app/components/Login';
// import ProductModal from '../app/components/ProductModal';

// export default function LandingPage() {
//   const session = useSession();

//   useEffect(() => {
//     if (session.status === 'authenticated') redirect('/home');
//   }, [session.status]);
  
//   return (
//     <main>
//       <div>
//         <Login />
//       </div>
//     </main>
//   );
// }

// LandingPage.tsx

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import Login from '../app/components/Login';
import ProductModal from '../app/components/ProductModal';

export default function LandingPage() {
  const session = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    if (session.status === 'authenticated') redirect('/home');
  }, [session.status]);

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <main>
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        {isModalOpen && <ProductModal onClose={handleCloseModal} />} {/* Pass onClose function */}
      </div>
    </main>
  );
}

