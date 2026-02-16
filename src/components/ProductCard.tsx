interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  delay?: number;
}

const ProductCard = ({ image, name, description, price, delay = 0 }: ProductCardProps) => {
  return (
    <div
      className="group rounded-xl overflow-hidden bg-card opacity-0 animate-fade-up"
      style={{
        animationDelay: `${delay}ms`,
        boxShadow: "var(--card-shadow)",
      }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 space-y-2">
        <h3 className="font-display text-xl font-semibold text-foreground">{name}</h3>
        <p className="text-muted-foreground font-body text-sm">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-display text-2xl font-bold text-primary">{price}</span>
          <button className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-display font-medium hover:scale-105 transition-transform text-sm">
            สั่งซื้อ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
