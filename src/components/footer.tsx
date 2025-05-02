export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Pooja Choudhary. All rights reserved.
      </div>
    </footer>
  );
}
