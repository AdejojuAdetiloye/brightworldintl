// // context/GlobalContext.tsx

// // Ensure this is placed correctly at the top if you're working with client-side only components in Next.js
// "use client";

// import React, { createContext, useContext, useState, ReactNode } from 'react';

// // Step 1: Define types for user and language states
// interface User {
//   id: string;
//   name: string;
// }

// interface GlobalContextType {
//   user: User | null;
//   language: string | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
//   setLanguage: React.Dispatch<React.SetStateAction<string | null>>;
// }

// // Step 2: Create the context with default value `undefined` (as we'll use it inside a provider)
// const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// // Step 3: Create a custom hook to use the context
// export const useGlobalContext = (): GlobalContextType => {
//   const context = useContext(GlobalContext);
//   if (!context) {
//     throw new Error('useGlobalContext must be used within a GlobalProvider');
//   }
//   return context;
// };

// // Step 4: Create the provider component
// interface GlobalProviderProps {
//   children: ReactNode;
// }

// const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
//   // Step 5: Define state for user and language, both initially set to null
//   const [user, setUser] = useState<User | null>(null);
//   const [language, setLanguage] = useState<string | null>(null);

//   return (
//     <GlobalContext.Provider value={{ user, setUser, language, setLanguage }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export default GlobalProvider;
