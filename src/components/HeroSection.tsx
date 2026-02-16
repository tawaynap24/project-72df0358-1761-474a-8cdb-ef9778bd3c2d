import heroImage from "@/assets/hero-meatball.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="ลูกชิ้นสดใหม่"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-primary-foreground">
        <div className="max-w-2xl space-y-6 animate-fade-up">
          <p className="text-lg font-body tracking-widest uppercase opacity-90">
            สดใหม่ทุกวัน · ไม่ใส่สารกันเสีย
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            มะม่วง
          </h1>
          <p className="text-xl font-body opacity-90 max-w-lg">
            ลูกชิ้นคุณภาพ ผลิตจากเนื้อสัตว์คัดพิเศษ สูตรลับเฉพาะ ส่งตรงถึงบ้านคุณ
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#products"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary-foreground text-primary font-display font-semibold text-lg hover:scale-105 transition-transform">

              ดูสินค้า
            </a>
            <a

              className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-primary-foreground text-primary-foreground font-display font-semibold text-lg hover:bg-primary-foreground/10 transition-colors" href="/contact">

              ติดต่อเรา
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;