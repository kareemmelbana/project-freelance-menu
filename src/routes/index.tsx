import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import hali1 from "@/assets/hali/hali_1.jpg.asset.json";
import hali2 from "@/assets/hali/hali_2.jpg.asset.json";
import hali3 from "@/assets/hali/hali_3.jpg.asset.json";
import hali4 from "@/assets/hali/hali_4.jpg.asset.json";
import hali5 from "@/assets/hali/hali_5.jpg.asset.json";
import hali6 from "@/assets/hali/hali_6.jpg.asset.json";
import hali7 from "@/assets/hali/hali_7.jpg.asset.json";
import hali8 from "@/assets/hali/hali_8.jpg.asset.json";
import hali9 from "@/assets/hali/hali_9.jpg.asset.json";
import hali10 from "@/assets/hali/hali_10.jpg.asset.json";
import hali11 from "@/assets/hali/hali_11.jpg.asset.json";
import haliB1 from "@/assets/hali/hali_b1.jpg.asset.json";
import haliB2 from "@/assets/hali/hali_b2.jpg.asset.json";
import haliB3 from "@/assets/hali/hali_b3.jpg.asset.json";
import haliB4 from "@/assets/hali/hali_b4.jpg.asset.json";
import haliB5 from "@/assets/hali/hali_b5.jpg.asset.json";
import haliB6 from "@/assets/hali/hali_b6.jpg.asset.json";
import haliB7 from "@/assets/hali/hali_b7.jpg.asset.json";
import haliB8 from "@/assets/hali/hali_b8.jpg.asset.json";
import haliB9 from "@/assets/hali/hali_b9.jpg.asset.json";
import malh1 from "@/assets/malh/malh_1.jpg.asset.json";
import malh2 from "@/assets/malh/malh_2.jpg.asset.json";
import malh3 from "@/assets/malh/malh_3.jpg.asset.json";
import malh4 from "@/assets/malh/malh_4.jpg.asset.json";
import malh5 from "@/assets/malh/malh_5.jpg.asset.json";
import malh6 from "@/assets/malh/malh_6.jpg.asset.json";
import malh7 from "@/assets/malh/malh_7.jpg.asset.json";
import malh8 from "@/assets/malh/malh_8.jpg.asset.json";
import malh9 from "@/assets/malh/malh_9.jpg.asset.json";
import malh10 from "@/assets/malh/malh_10.jpg.asset.json";
import malhNew1 from "@/assets/malh/malh_new_1.jpg.asset.json";
import malhNew2 from "@/assets/malh/malh_new_2.jpg.asset.json";
import malhNew3 from "@/assets/malh/malh_new_3.jpg.asset.json";
import box1 from "@/assets/box/box_1.jpg.asset.json";
import box2 from "@/assets/box/box_2.jpg.asset.json";
import box3 from "@/assets/box/box_3.jpg.asset.json";
import box4 from "@/assets/box/box_4.jpg.asset.json";
import box5 from "@/assets/box/box_5.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

type Category = "الكل" | "الحالي" | "المالح" | "البوكسات";

type Item = {
  name: string;
  desc?: string;
  qty?: string;
  price: number;
  image: string;
  category: Exclude<Category, "الكل">;
};

const LUQAIMAT_DESC = "كرات عجين ذهبية مقلية تقدم ساخنة بطعم لذيذ ومقرمش";
const LUQAIMAT_QTY = "اضافات: شيرة / نستله / عسل / دبس تمر / سمسم وحبة سوداء";
const JIBNIYA_DESC = "عجينة مقلية ممزوجة بالجبن تقدم ساخنة مع شيرة لذيذة تضيف لمسة حلا ناعمة";
const TAWA_DESC = "عجينة مقلية مقرمشة مصنوعة من طحين البر والحبة السوداء تقدم مع صوص دبس التمر الغني بالنكهة";
const MOKAABAT_DESC = "مكعبات جبن مقلية مقرمشة تقدم مع صوص دبس التمر اللذيذ ومكسرات البيكان";
const SEMEED_DESC = "مثلثات السميد محشوة بالجبن وتقدم ساخنة مع صوص شيرة لذيذ والفستق المطحون";
const HALA_LUQ_DESC = "رقائق العجين محشوة بالحليب المحموس وعجينة التمر والسميد وخلطة لقيمة الخاصة بصوص النستلة والقرفة والمكسرات";
const SINABON_DESC = "عجينة قطنية محشوة بالقرفة والسكر البني الرطب بالزبدة بصوص كريمة الشيو وتوفي الكراميل المملح ومكسرات البيكان";

const items: Item[] = [
  { name: "لقيمات صغير", qty: LUQAIMAT_QTY, desc: LUQAIMAT_DESC, price: 16, image: hali1.url, category: "الحالي" },
  { name: "لقيمات كبير", qty: LUQAIMAT_QTY, desc: LUQAIMAT_DESC, price: 33, image: hali2.url, category: "الحالي" },
  { name: "لقيمات وسط", qty: LUQAIMAT_QTY, desc: LUQAIMAT_DESC, price: 23, image: hali3.url, category: "الحالي" },
  { name: "جبنية وسط", desc: JIBNIYA_DESC, price: 23, image: hali4.url, category: "الحالي" },
  { name: "جبنية صغير", desc: JIBNIYA_DESC, price: 16, image: hali5.url, category: "الحالي" },
  { name: "جبنية كبير", desc: JIBNIYA_DESC, price: 33, image: hali6.url, category: "الحالي" },
  { name: "تاوه وسط", desc: TAWA_DESC, price: 23, image: hali7.url, category: "الحالي" },
  { name: "تاوه كبير", desc: TAWA_DESC, price: 33, image: hali8.url, category: "الحالي" },
  { name: "تاوه صغير", desc: TAWA_DESC, price: 16, image: hali9.url, category: "الحالي" },
  { name: "مكعبات الجبن صغير", desc: MOKAABAT_DESC, price: 17, image: hali10.url, category: "الحالي" },
  { name: "مكعبات الجبن وسط", desc: MOKAABAT_DESC, price: 33, image: hali11.url, category: "الحالي" },
  { name: "مثلثات السميد وسط", desc: SEMEED_DESC, price: 33, image: haliB2.url, category: "الحالي" },
  { name: "مثلثات السميد صغير", desc: SEMEED_DESC, price: 17, image: haliB1.url, category: "الحالي" },
  { name: "حلا لقيمة صغير", desc: HALA_LUQ_DESC, price: 23, image: haliB3.url, category: "الحالي" },
  { name: "حلا لقيمة وسط", desc: HALA_LUQ_DESC, price: 42, image: haliB4.url, category: "الحالي" },
  { name: "سينابون وسط", qty: "٨ حبات", desc: SINABON_DESC, price: 42, image: haliB5.url, category: "الحالي" },
  { name: "سينابون صغير", qty: "٤ حبات", desc: SINABON_DESC, price: 23, image: haliB6.url, category: "الحالي" },
  { name: "سينابون كبير", qty: "١٢ حبة", desc: SINABON_DESC, price: 75, image: haliB7.url, category: "الحالي" },
  { name: "خلية السينابون", price: 30, image: haliB8.url, category: "الحالي" },
  { name: "خلية لقيمة", price: 25, image: haliB9.url, category: "الحالي" },
  { name: "ورق عنب كبير", qty: "٣٨ حبة", price: 75, image: malhNew1.url, category: "المالح" },
  { name: "ورق عنب وسط", qty: "٢٥ حبة", price: 53, image: malhNew2.url, category: "المالح" },
  { name: "ورق عنب صغير", qty: "١٢ حبة", price: 27, image: malhNew3.url, category: "المالح" },
  { name: "مسخن دجاج كبير", qty: "٣٣ حبة", price: 75, image: malh4.url, category: "المالح" },
  { name: "مسخن صغير", qty: "١٠ حبات", price: 27, image: malh5.url, category: "المالح" },
  { name: "مسخن وسط", qty: "٢٠ حبة", price: 53, image: malh6.url, category: "المالح" },
  { name: "ملفوف كبير", qty: "٣٧ حبة", price: 75, image: malh7.url, category: "المالح" },
  { name: "ملفوف وسط", qty: "٢٥ حبة", price: 53, image: malh8.url, category: "المالح" },
  { name: "ملفوف صغير", qty: "١٢ حبة", price: 27, image: malh9.url, category: "المالح" },
  { name: "سمبوسة دجاج صغير", qty: "٨ حبات", price: 16, image: malh10.url, category: "المالح" },
  { name: "سمبوسة دجاج وسط", qty: "١٦ حبة", price: 32, image: malh10.url, category: "المالح" },
  { name: "سمبوسة جبن صغير", qty: "٨ حبات", price: 12, image: malh10.url, category: "المالح" },
  { name: "سمبوسة جبن وسط", qty: "١٦ حبة", price: 24, image: malh10.url, category: "المالح" },
  { name: "سمبوسة مكس دجاج وجبن صغير", qty: "٨ حبات", price: 14, image: malh10.url, category: "المالح" },
  { name: "سمبوسة مكس دجاج وجبن وسط", qty: "١٦ حبة", price: 28, image: malh10.url, category: "المالح" },
  { name: "بوكس جمعات الحالي", qty: "٣ أصناف من اختيارك", desc: "لقيمات + جبنية + تاوه + مكعبات الجبن ٢٠ حبة + مثلثات السميد ١٥ حبة + حلا لقيمة ٢٢ حبة", price: 53, image: box1.url, category: "البوكسات" },
  { name: "بوكس جمعات المالح", qty: "٣ أصناف من اختيارك", desc: "ورق عنب + ملفوف + مسخن + سمبوسة", price: 74, image: box2.url, category: "البوكسات" },
  { name: "بوكس القرمشة", desc: "مثلثات السميد + حلا لقيمة (أصابع محشوة عجينة تمر وحليب محموس) + مكعبات الجبن", price: 50, image: box3.url, category: "البوكسات" },
  { name: "بوكس لقيمة مالح وحالي", desc: "مثلثات السميد، مكعبات الجبن، حلا لقيمة، ورق عنب، ملفوف، مسخن دجاج", price: 124, image: box4.url, category: "البوكسات" },
  { name: "بوكس سبيشل", qty: "صنف حالي وصنف مالح من اختيارك — حجم وسط", desc: "الحالي: سينابون ٨ حبات / مكعبات الجبن ٣٠ حبة / مثلثات السميد ٢٠ حبة / حلا لقيمة ٤٠ حبة. المالح: ورق عنب ٢٥ حبة / ملفوف ٢٥ حبة / مسخن ٢٠ حبة / سمبوسة ١٦ حبة", price: 74, image: box5.url, category: "البوكسات" },
];

const categories: Category[] = ["الكل", "الحالي", "المالح", "البوكسات"];

const WHATSAPP = "966501206793";
const TIKTOK = "https://www.tiktok.com/@luqyma.sa?_r=1&_t=ZS-97rpd89XOBs";
const INSTAGRAM = "https://www.instagram.com/luqyma.sa?igsh=MW9tZ2wybHhtN2Rhbw%3D%3D&utm_source=qr";

const BRAND_NAME = "لقيمة";
const BRAND_TAGLINE = "مالح وحالي";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.6 6.8a5.7 5.7 0 0 1-3.4-1.1 5.7 5.7 0 0 1-2.2-3.7h-3.3v13.1a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V9.1a6 6 0 1 0 5.2 6V9.6a9 9 0 0 0 5.6 1.9V8.2c-.1 0 0 0 0-1.4Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Index() {
  const [active, setActive] = useState<Category>("الكل");

  const filtered = useMemo(
    () => (active === "الكل" ? items : items.filter((i) => i.category === active)),
    [active],
  );

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl leading-none text-primary md:text-3xl">{BRAND_NAME}</span>
            <span className="text-xs tracking-widest text-muted-foreground">{BRAND_TAGLINE}</span>
          </div>
          <div className="flex items-center gap-2">
            <a href={TIKTOK} target="_blank" rel="noreferrer" aria-label="تيك توك" className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary">
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="انستقرام" className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90">
              اطلب واتساب
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-accent">منيو المطعم</p>
            <h1 className="font-display text-5xl leading-tight text-primary md:text-7xl">
              {BRAND_NAME}
              <span className="block text-2xl font-normal text-foreground/80 md:text-3xl">
                {BRAND_TAGLINE}
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-loose text-muted-foreground md:text-lg">
              حلا ومالح بنكهات بيتية أصيلة. اطّلع على القائمة كاملة بالأسعار وعدد الحبات، واطلب مباشرة عبر واتساب.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#menu" className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90">
                تصفّح المنيو
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="rounded-full border-2 border-primary bg-transparent px-6 py-3 text-sm font-bold text-primary transition hover:bg-primary/5">
                واتساب المطعم
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[var(--gradient-warm)] blur-2xl" />
            <img src={heroImg} alt={`تشكيلة منتجات ${BRAND_NAME}`} width={1024} height={1024} className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="menu" className="mx-auto max-w-6xl px-4 pt-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={
                  "rounded-full border px-4 py-2 text-sm font-bold transition " +
                  (isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-card)]"
                    : "border-border bg-card text-foreground hover:border-primary/50")
                }
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* Menu grid */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card/50 p-10 text-center">
            <p className="font-display text-2xl text-primary">قريباً</p>
            <p className="mt-2 text-sm text-muted-foreground">
              المنتجات هتتضاف قريباً في هذا القسم.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <article key={item.name} className="group flex overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <div className="relative w-32 shrink-0 overflow-hidden sm:w-36">
                  <img src={item.image} alt={item.name} loading="lazy" width={512} height={512} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="font-display text-xl leading-tight text-foreground">{item.name}</h3>
                    {item.qty && <p className="mt-1 text-sm font-bold text-accent">{item.qty}</p>}
                    {item.desc && <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-display text-2xl text-primary">
                      {item.price}
                      <span className="mr-1 text-xs font-bold tracking-wider text-muted-foreground">ر.س</span>
                    </span>
                    <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("أرغب بطلب: " + item.name)}`} target="_blank" rel="noreferrer" className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">
                      اطلب
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-border bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center">
          <div className="font-display text-3xl text-primary">{BRAND_NAME}</div>
          <p className="text-xs tracking-widest text-muted-foreground">{BRAND_TAGLINE}</p>
          <div className="mt-2 flex items-center gap-3">
            <a href={TIKTOK} target="_blank" rel="noreferrer" aria-label="تيك توك" className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary">
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="انستقرام" className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary">
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="mt-1 text-sm font-bold text-primary hover:underline">
            للطلب: {WHATSAPP}
          </a>
        </div>
      </footer>
    </div>
  );
}
