// src/components/footer.tsx
'use client'; // Add 'use client' directive

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    // This code runs only on the client after hydration
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container text-center text-sm text-muted-foreground">
        {/* Display loading text or the year once calculated */}
        © {currentYear ? currentYear : 'Loading...'} Pooja Choudhary. All rights reserved.
      </div>
    </footer>
  );
}
