import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-foreground">
      <div className="container">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">
            ติดต่อสั่งซื้อ
          </h2>
          <p className="text-primary-foreground/70 font-body max-w-md mx-auto">
            สั่งซื้อได้ทุกวัน ส่งตรงถึงบ้านคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Phone, title: "โทรสั่ง", detail: "081-234-5678", sub: "ทุกวัน 6:00 - 20:00" },
            { icon: MapPin, title: "ที่อยู่ร้าน", detail: "ตลาดสดเทศบาล", sub: "ซอย 5 ถนนราชดำเนิน" },
            { icon: Clock, title: "เวลาเปิด", detail: "06:00 - 20:00", sub: "เปิดทุกวัน ไม่มีวันหยุด" },
          ].map((item) => (
            <div key={item.title} className="text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground">{item.title}</h3>
              <p className="font-display text-xl font-bold text-secondary">{item.detail}</p>
              <p className="text-primary-foreground/50 font-body text-sm">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
