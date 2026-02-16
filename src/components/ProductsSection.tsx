import ProductCard from "./ProductCard";
import meatballGrilled from "@/assets/meatball-grilled.jpg";
import meatballSoup from "@/assets/meatball-soup.jpg";
import meatballFish from "@/assets/meatball-fish.jpg";

const products = [
  {
    image: meatballGrilled,
    name: "ลูกชิ้นหมูปิ้ง",
    description: "ลูกชิ้นหมูแท้ ย่างจนเกรียมหอม เสิร์ฟพร้อมน้ำจิ้มรสเด็ด",
    price: "฿59",
  },
  {
    image: meatballSoup,
    name: "ก๋วยเตี๋ยวลูกชิ้น",
    description: "น้ำซุปใส ต้มกระดูกหมู เสิร์ฟกับลูกชิ้นเด้งๆ และเส้นเหนียวนุ่ม",
    price: "฿45",
  },
  {
    image: meatballFish,
    name: "ลูกชิ้นปลา",
    description: "ลูกชิ้นปลาแท้ เนื้อเนียนนุ่ม เด้งกรุบ ทำจากเนื้อปลาสด 100%",
    price: "฿69",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20" style={{ background: "var(--warm-gradient)" }}>
      <div className="container">
        <div className="text-center mb-14 space-y-3">
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm">
            เมนูยอดนิยม
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            สินค้าของเรา
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            คัดสรรวัตถุดิบอย่างดี ผลิตสดใหม่ทุกวัน ไม่ใส่สารกันเสีย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <ProductCard key={product.name} {...product} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
