import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl font-bold text-primary-foreground">
          🔴 ลูกชิ้นแท้
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["หน้าแรก", "สินค้า", "ติดต่อ"].map((item, i) => (
            <a
              key={item}
              href={["#", "#products", "#contact"][i]}
              className="text-primary-foreground/80 hover:text-secondary font-body font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md pb-4">
          {["หน้าแรก", "สินค้า", "ติดต่อ"].map((item, i) => (
            <a
              key={item}
              href={["#", "#products", "#contact"][i]}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-secondary font-body font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
