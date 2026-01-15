"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Instagram, MessageCircle, ExternalLink, Mail, ChevronRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)


const IMAGES = {
  mainVisual: "/images/toukalogo.png",
  ramenBowl: "/images/tokusio.jpg",
  chashu: "/images/cha-syu-.jpeg",
  beer: "/images/tenpogaikan.png",
  menu1: "/images/menu1.jpg",
  menu2: "/images/menu2.jpg",
  menu3: "/images/sio.jpg",
  menu4: "/images/syouyu.jpg",
  menu5: "/images/paitan.jpg",
  menu6: "/images/tokusio.jpeg",
  noodle: "/images/men.jpeg",
  soup: "/images/siru.jpeg",
  meat: "/images/niku.jpeg",
  egg: "/images/tamago.jpeg",
  rice: "/images/kome.jpeg",
  greenOnion: "/images/negi.jpeg",
  ramenDon: "/images/cha-syu-.jpeg",
  recruit1: "/images/tennai.jpeg",
  recruit2: "/images/noren.jpeg",
  exterior: "/images/tenpogaikan.png",
  interior: "/images/tennai.jpeg",
  noren: "/images/noren.jpeg",
  tokusio: "/images/tokusio.jpg",
  tokusyoyu: "/images/tokusyoyu.jpg",
  sio: "/images/sio.jpg",
  syouyu: "/images/syouyu.jpg",
  paitan: "/images/paitan.jpg",
  calendar: "/images/eigyou-1.jpg",
  gallery: [
    "/images/tantan.jpg",
    "/images/cha-syu-.jpeg",
    "/images/syouyutukemen.jpg",
    "/images/syouyu.jpg",
    "/images/paitan.jpg",
    "/images/tennai.jpeg",
    // "/images/tenpogaikan.png",
    "/images/jikaseimen.jpeg",
    "/images/noren.jpeg",
  ],
}



export default function KiramuPageClient() {
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"men" | "soup" | "niku">("men")

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 300)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1a1a1a] overflow-x-hidden font-sans">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#F5F0E8] flex flex-col items-center justify-center"
          >
            <div className="flex gap-8 mb-8">
              <div className="flex flex-col items-center gap-2">
                {["希", "楽", "夢"].map((char, i) => (
                  <motion.span
                    key={char}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-4xl font-bold"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm tracking-widest text-gray-500">KIRAMU NOODLE</p>
              <p className="text-2xl font-bold mt-2">{loadingProgress}%</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-xs tracking-widest text-gray-600">Ramen</span>
            <h1 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              希楽夢
            </h1>
            <span className="text-[10px] text-gray-500">Produced By Kiraumu Inc.</span>
          </motion.div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 bg-[#C41E3A] rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            aria-label="メニュー"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" className="text-white">
              <path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[80] bg-[#C41E3A]"
          >
            <div className="flex flex-col h-full text-white">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center"
                  aria-label="閉じる"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 flex flex-col items-center justify-center gap-6">
                {[
                  { id: "concept", label: "CONCEPT" },
                  { id: "menu", label: "MENU" },
                  { id: "gallery", label: "GALLERY" },
                  { id: "commitment", label: "Materials & Methods" },
                  { id: "recruit", label: "RECRUIT" },
                  { id: "access", label: "ACCESS" },
                ].map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => scrollTo(item.id)}
                    className="text-2xl md:text-3xl font-bold tracking-widest hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-8 text-center">
                <p className="text-sm opacity-70">© 2026 麺屋 希楽夢</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative min-h-screen pt-20 flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${IMAGES.exterior}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 z-0 bg-[#F5E6D3]/40" />

        <div className="absolute top-24 left-8 hidden md:block z-10" style={{ writingMode: "vertical-rl" }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-5xl md:text-7xl font-bold"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            らーめん
          </motion.span>
        </div>

        <div className="absolute top-24 right-8 hidden md:block z-10" style={{ writingMode: "vertical-rl" }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-5xl md:text-7xl font-bold"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            自家製麺
          </motion.span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 z-10 w-full flex flex-col items-center justify-center">
          <motion.div
            key={loading ? "hero-logo-loading" : "hero-logo"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <img
              src={IMAGES.mainVisual}
              alt="麺屋 希楽夢"
               className="w-full max-w-sm md:max-w-lg mx-auto py-6 md:py-8"
            />
          </motion.div>

          <motion.div
            key={loading ? "hero-subtitle-loading" : "hero-subtitle"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-4 md:mt-6 mb-8 md:mb-10"
          >
            <h2
              className="text-3xl md:text-6xl font-bold"
              style={{ fontFamily: "var(--font-script), 'Brush Script MT', 'Segoe Script', cursive" }}
            >
              2nd story
            </h2>
          </motion.div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 bg-[#C41E3A] text-white py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 mx-8">
                <span className="text-sm tracking-widest">全粒粉入り自家製麺</span>
                <span className="w-1 h-1 bg-white rounded-full" />
                <span className="text-sm tracking-widest">魚貝×鶏の無化調Wスープ</span>
                <span className="w-1 h-1 bg-white rounded-full" />
                <span className="text-sm tracking-widest">国産小麦のこだわりワンタン</span>
                <span className="w-1 h-1 bg-white rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="concept" className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-widest text-[#C41E3A] mb-4">CONCEPT</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p
              className="text-3xl md:text-4xl font-bold leading-relaxed"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              麺屋　希楽夢
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              魚貝と鶏の旨味を重ねた、Wスープ。
              <br />
              北海道産小麦100%の自家製麺。
            </h3>

            <p className="text-gray-600 leading-loose">
              麺屋 希楽夢(きらむ)は、有名ラーメン店で
              <br className="hidden md:block" />
              経験を積んだ店主が2017年に愛知で独立創業。
              <br className="hidden md:block" />
              2023年夏、故郷・京都府宇治田原町で移転オープン。
              <br className="hidden md:block" />
              鶏スープとしじみ・魚介を掛け合わせた無化調Wスープ、
              <br className="hidden md:block" />
              全粒粉入りの自家製麺が織りなす至福の一杯。
              <br className="hidden md:block" />
              地元・木津川市や城陽市の食材を活かした
              <br className="hidden md:block" />
              ここでしか作れない味をご賞味ください。
            </p>
          </motion.div>
        </div>
      </section>

      <MenuSection />

      <SignatureGallerySection />

      <PhotoGallerySection />

      <section id="commitment" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-[#C41E3A] mb-4">Materials & Methods</p>
            <p className="text-2xl" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              素材と製法
            </p>
          </div>

          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-16 leading-relaxed"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            地元食材を活かした、
            <br />
            ここでしか作れない一杯
          </motion.h3>

          <CommitmentTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </section>

      <div className="py-12 overflow-hidden bg-white">
        <div className="flex whitespace-nowrap animate-marquee-slow">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-bold mx-8 text-gray-100"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              希楽夢
            </span>
          ))}
        </div>
      </div>

      <RecruitSection />

      <CalendarSection />

      <section id="access" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-[#C41E3A] mb-4">ACCESS</p>
            <h3 className="text-2xl font-bold" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              店舗情報
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  麺屋 希楽夢
                </h4>
                <p className="text-sm text-gray-500 mb-4">めんや きらむ</p>
                <div className="space-y-2 text-gray-600">
                  <p>〒610-0201</p>
                  <p>京都府綴喜郡宇治田原町南亥子90-1</p>
                  <p className="mt-4 text-sm text-gray-500">※電話番号非公開</p>
                </div>
              </div>

              <div>
                <h5 className="font-bold mb-2">営業時間</h5>
                <div className="text-gray-600 space-y-1">
                  <p>【月・水・木・日】</p>
                  <p className="pl-4">11:00〜14:20(L.O.)</p>
                  <p className="mt-2">【金・土】</p>
                  <p className="pl-4">11:00〜14:20(L.O.)</p>
                  <p className="pl-4">18:00〜20:20(L.O.)</p>
                </div>
              </div>

              <div>
                <h5 className="font-bold mb-2">定休日</h5>
                <p className="text-gray-600">火曜日・祝日</p>
              </div>

              <div>
                <h5 className="font-bold mb-2">アクセス</h5>
                <p className="text-gray-600">京都京阪バス 60号・180号系統</p>
                <p className="text-gray-600">「亥子(いね)」停留所より徒歩約1分</p>
              </div>

              <div>
                <h5 className="font-bold mb-2">駐車場</h5>
                <p className="text-gray-600">12台完備</p>
              </div>

              <div>
                <h5 className="font-bold mb-2">座席</h5>
                <p className="text-gray-600">カウンター8席、テーブル4人×2卓、座敷6人×1卓</p>
                <p className="text-gray-600">計22席</p>
              </div>

              <div>
                <h5 className="font-bold mb-2">備考</h5>
                <p className="text-gray-600 text-sm">食券制 / 全席禁煙 / お水はセルフ</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={IMAGES.exterior}
                  alt="麺屋 希楽夢 外観"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                <iframe
                  title="麺屋希楽夢 Google Map"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=%E4%BA%AC%E9%83%BD%E5%BA%9C%E7%B6%B4%E5%96%9C%E9%83%A1%E5%AE%87%E6%B2%BB%E7%94%B0%E5%8E%9F%E7%94%BA%E5%8D%97%E4%BA%A5%E5%AD%9090-1&output=embed"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            希楽夢
          </h2>
          <p className="text-sm text-gray-400 mb-8">MENYA KIRAMU</p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/menya.kiramu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645-.069-4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://x.com/menyakiramu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <p className="text-sm text-gray-500">© 2026 麺屋 希楽夢</p>
        </div>
      </footer>

      <ScrollToTop />

      <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 50s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

function MenuSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current
      const track = trackRef.current
      if (!container || !track) return

      const getDistance = () => {
        if (!containerRef.current || !trackRef.current) return 0
        return Math.max(trackRef.current.scrollWidth - containerRef.current.offsetWidth, 0)
      }

      const horizontalTween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          id: "menu-horizontal",
          trigger: container,
          start: "top top",
          end: () => "+=" + getDistance(),
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })

      const panels = gsap.utils.toArray<HTMLElement>(".menu-item-base")
      ScrollTrigger.create({
        trigger: container,
        start: "top 80%",
        onEnter: () => {
          panels.forEach((panel) => panel.classList.add("menu-animate-in"))
        },
      })

      const handleResize = () => {
        ScrollTrigger.refresh()
      }
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
        horizontalTween.kill()
        ScrollTrigger.getById("menu-horizontal")?.kill()
      }
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const mainMenuItems = [
    {
      title: "特製塩らーめん",
      subtitle: "当店自慢の塩らーめんに贅沢なトッピングをプラス",
      description:
        "澄んだ塩スープに自家製麺が絡む、当店自慢の塩らーめんに贅沢なトッピングをプラス。バラチャーシュー2枚、肩ロース1枚、味玉、海苔2枚が入った特製仕様で、素材の旨みを最大限に味わえる一杯です。",
      image: IMAGES.tokusio,
      label: "当店自慢の塩らーめんに贅沢なトッピングをプラス",
      sideDish: null as string | null,
      badge: "当店自慢",
      price: "¥1,400",
    },
    {
      title: "特製醤油らーめん",
      subtitle: "芳醇な醤油スープに、贅沢なトッピングをプラス",
      description:
        "三種の醤油を独自ブレンドした芳醇な醤油スープに、贅沢なトッピングをプラス。バラチャーシュー2枚、肩ロース1枚、味玉、海苔2枚が入った特製仕様で、醤油の深い味わいを堪能できる一杯です。",
      image: IMAGES.tokusyoyu,
      label: "芳醇な醤油スープに、贅沢なトッピングをプラス",
      sideDish: null as string | null,
      badge: "人気",
      price: "¥1,400",
    },
    {
      title: "醤油らーめん",
      subtitle: "三種の醤油が織りなす芳醇な味わい",
      description:
        "埼玉県、奥出雲産、愛知産の醤油をブレンドした芳醇な醤油ダレが決め手。北海道産小麦を使用した自家製麺と、こだわりのスープが織りなす正統派の醤油らーめんです。",
      image: IMAGES.syouyu,
      label: "三種の醤油を独自ブレンド",
      sideDish: null as string | null,
      badge: "おすすめ",
      price: "¥1,000",
    },
    {
      title: "塩らーめん",
      subtitle: "魚介と鶏のダブルスープが奏でる旨み",
      description:
        "しじみ、昆布、煮干し、鯖節など数種類の乾物を使った魚貝スープと、鶏ガラ、丸鶏、野菜類を使った鶏スープのダブルスープ。澄んだ塩スープが素材の旨みを引き立てる、あっさりとした味わいの一杯。",
      image: IMAGES.sio,
      label: "ダブルスープの深い旨み",
      sideDish: null as string | null,
      badge: "1番人気",
      price: "¥1,000",
    },
    {
      title: "きらむ白湯らーめん",
      subtitle: "濃厚クリーミーな白湯スープの極み",
      description:
        "鶏白湯スープに煮干しを効かせた濃厚でクリーミーなスープが自慢。長時間じっくり炊き上げることで生まれる深いコクと旨みが口の中に広がります。濃厚ながらも後味はすっきり、何度でも食べたくなる一杯です。",
      image: IMAGES.paitan,
      label: "長時間煮込んだ濃厚スープ",
      sideDish: null as string | null,
      badge: "1日限定20食",
      price: "¥1,050",
    },
  ]

  const toppingItems = [
    {
      name: "特製盛り",
      price: "¥400",
      description: "バラチャーシュー2枚、肩ロース1枚、味玉、のり2枚増し",
    },
        {
      name: "塩、醤油麺大盛り",
      price: "¥150",
      description: "自家製麺大盛り",
    },
    {
      name: "味玉",
      price: "¥150",
      description: "とろとろ半熟の自家製味付け玉子",
    },
    {
      name: "メンマ増し",
      price: "¥150",
      description: "自家製メンマを追加",
    },
    {
      name: "のり増し",
      price: "¥100",
      description: "香り高い海苔を2枚追加",
    },
        {
      name: "わんたん4個",
      price: "¥250",
      description: "自家製わんたん",
    },
  ]

  const sideMenuItems = [
    {
      name: "チャーシュー丼",
      price: "¥600",
      description: "自家製チャーシューをたっぷりのせた丼",
    },
        {
      name: "チャーシュー丼ミニ",
      price: "¥350",
      description: "自家製チャーシューをたっぷりのせた丼(ミニサイズ)",
    },
    {
      name: "ご飯 大",
      price: "¥390",
      description: "山城町産のこだわり米。（大）",
    },
    {
      name: "ご飯 中",
      price: "¥260",
      description: "山城町産のこだわり米。（中）",
    },
    {
      name: "ご飯 小",
      price: "¥130",
      description: "山城町産のこだわり米。（小）",
    },
  ]

  const drinkItems = [
    {
      name: "ビンビール小瓶",
      price: "¥500",
    },
    {
      name: "酎ハイ レモン",
      price: "¥450",
    },
    {
      name: "コーラ",
      price: "¥200",
    },
    {
      name: "ラムネ",
      price: "¥200",
    },
  ]

  return (
    <section id="menu" ref={sectionRef as any} className="relative overflow-hidden bg-[#D29D2B]">
      <div className="relative bg-[#D29D2B] overflow-hidden py-8">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-white/40" />
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/40" />

        <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center opacity-35">
          <svg viewBox="0 0 200 20" className="w-40 h-5">
            <path
              d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10"
              fill="none"
              stroke="#FFF7D1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center opacity-35">
          <svg viewBox="0 0 200 20" className="w-40 h-5">
            <path
              d="M0 10 Q25 20 50 10 T100 10 T150 10 T200 10"
              fill="none"
              stroke="#FFF7D1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="oshinagaki-endless-wrapper flex relative">
          <div className="flex items-center flex-shrink-0">
            {[...Array(10)].map((_, i) => (
              <div key={`text-${i}`} className="inline-flex items-center mx-12">
                <span className="text-5xl md:text-7xl font-bold text-white tracking-widest font-serif-jp">
                  KIRAMU
                </span>
                <span className="text-2xl md:text-3xl text-white/80 mx-6 font-serif">麺屋</span>
                <span className="text-5xl md:text-7xl font-bold text-white tracking-widest font-serif-jp">
                  KIRAMU
                </span>
                <span className="text-2xl md:text-3xl text-white/80 mx-6 font-serif">麺屋</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative">
        <div ref={trackRef} className="flex">
          {mainMenuItems.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (menuItemsRef.current[index] = el)}
              className="menu-item-base relative bg-[#D29D2B] border-r border-black/10 last:border-r-0 flex-shrink-0 w-full md:w-1/2"
            >
              <div className="relative min-h-screen flex flex-col">
                <div className="absolute top-8 left-8 right-8 z-10">
                  <div className="bg-[#f5f1e8] px-6 py-4 inline-block relative">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black" />
                    <p className="text-xs font-bold text-black tracking-wider">{item.label}</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-8 pt-28 pb-6">
                  <div className="relative w-full max-w-sm mx-auto mb-6">
                    <div className="absolute -top-16 -right-8 writing-vertical text-white font-bold text-6xl font-serif-jp opacity-35 z-0">
                      {item.title}
                    </div>

                    <div className="relative z-10">
                      <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-2xl">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      {item.badge && (
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 flex items-center justify-center">
                          <div className="w-full h-full rounded-full border-4 border-[#f5f1e8] bg-[#c8102e] flex items-center justify-center rotate-12">
                            <div className="text-center">
                              <div className="text-white text-xs font-bold leading-tight">{item.badge}</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {item.sideDish && (
                      <div className="absolute -bottom-8 -left-8 w-28 h-28 z-20">
                        <img
                          src={item.sideDish}
                          alt="Side dish"
                          className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
                        />
                      </div>
                    )}
                  </div>

                  <div className="text-center text-white space-y-3 max-w-lg mb-4">
                    <div className="relative inline-block">
                      <div className="absolute -top-2 left-0 w-6 h-6 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div className="absolute -top-2 right-0 w-6 h-6 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 font-serif-jp tracking-wide px-8">{item.title}</h3>
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-red-600">{item.price}</p>
                  </div>
                </div>

                <div className="px-8 pb-10">
                  <div className="bg-white p-4 rounded-sm relative menu-desc-card">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c8102e]" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#c8102e]" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#c8102e]" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c8102e]" />
                    <p className="text-sm text-gray-800 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f5f1e8] py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-[#c8102e] font-serif-jp mb-2 relative inline-block">
                    <span className="relative z-10">らーめん</span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-[#D29D2B] opacity-30 z-0" />
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">当店自慢の一杯</p>
                </div>
                <div className="space-y-4">
                  {mainMenuItems.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                        <span className="text-xl font-bold text-[#c8102e] ml-4">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-[#c8102e] font-serif-jp mb-2 relative inline-block">
                    <span className="relative z-10">トッピング</span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-[#D29D2B] opacity-30 z-0" />
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">お好みでカスタマイズ</p>
                </div>
                <div className="space-y-4">
                  {toppingItems.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                        <span className="text-xl font-bold text-[#c8102e] ml-4">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-[#c8102e] font-serif-jp mb-2 relative inline-block">
                    <span className="relative z-10">ご飯</span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-[#D29D2B] opacity-30 z-0" />
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">山城町産のこだわり米使用</p>
                </div>
                <div className="space-y-4">
                  {sideMenuItems.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                        <span className="text-xl font-bold text-[#c8102e] ml-4">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-[#c8102e] font-serif-jp mb-2 relative inline-block">
                    <span className="relative z-10">お酒・ドリンク</span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-[#D29D2B] opacity-30 z-0" />
                  </h3>
                </div>
                <div className="space-y-4">
                  {drinkItems.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                        <span className="text-xl font-bold text-[#c8102e]">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .oshinagaki-endless-wrapper {
          animation: oshinagaki-scroll 40s linear infinite;
        }

        @keyframes oshinagaki-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .menu-item-base {
          opacity: 0;
          transform: translateY(80px);
          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .menu-item-base.menu-animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: upright;
        }

        .menu-desc-card {
          min-height: auto;
        }

        @media (max-width: 768px) {
          .oshinagaki-endless-wrapper {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  )
}

function CommitmentTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: "men" | "soup" | "niku"
  setActiveTab: (t: "men" | "soup" | "niku") => void
}) {
  return (
    <>
      <div className="flex justify-center gap-4 mb-12">
        {[
          { id: "men", label: "麺" },
          { id: "soup", label: "汁" },
          { id: "niku", label: "肉" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "men" | "soup" | "niku")}
            className={`w-16 h-16 rounded-full text-2xl font-bold transition-all ${
              activeTab === tab.id ? "bg-[#C41E3A] text-white" : "bg-white text-[#C41E3A] border-2 border-[#C41E3A]"
            }`}
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src={activeTab === "men" ? IMAGES.noodle : activeTab === "soup" ? IMAGES.soup : IMAGES.meat}
              alt={activeTab === "men" ? "麺" : activeTab === "soup" ? "スープ" : "チャーシュー"}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              {activeTab === "men" && "全粒粉入り自家製細打ちストレート麺"}
              {activeTab === "soup" && "鶏と貝のWスープ、しじみと魚介の調和"}
              {activeTab === "niku" && "しっとりモチモチの大判豚レアチャーシュー"}
            </h4>
            <p className="text-gray-600 leading-loose">
              {activeTab === "men" &&
                "加水高めの全粒粉入り自家製細打ちストレート麺。少し平打ち気味でツルモチ食感、スープリフトも上々。程よいスープの塩みが相まって麺の甘さが引き立ちます。"}
              {activeTab === "soup" &&
                "鶏や香味野菜から取った鶏スープと、しじみをはじめ魚介系乾物から取った魚貝スープを掛け合わせたWスープ。鶏が中心に感じられつつも淡く奥深いテイスト。鶏油が全体をまろやかに包み込みます。"}
              {activeTab === "niku" &&
                "しっとりモチモチな食感に仕上げた大判豚レアチャーシュー。肉の旨味をしっかり感じられる食べ応えのある一枚。あっさりめに味付けされた材木メンマは柔らかく仕上げ、複雑に交差する旨味たっぷりのラーメンを引き立てます。"}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

function SignatureGallerySection() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const items = [
    {
      badge: "平日限定",
      badgeEn: "LIMITED MENU",
      title: "醤油つけ麺",
      price: "1,100円",
      description:
        "香り立つ自家製醤油ダレが決め手。数種の醤油を重ねた奥行きあるつけ汁に、魚介と鶏の旨味を丁寧に合わせ、ひと口目から“醤油の立ち上がり”とコクが広がります。北海道産小麦を使った自家製麺は、つけ汁をしっかり抱える程よいコシと喉ごし。〆はスープ割りで、香りと余韻まで楽しんで。",
      caption: "数秒ごとに自動でスライドします",
      mainImage: IMAGES.gallery[2],
    },
    {
      badge: "おすすめ",
      badgeEn: "RECOMMENDATION",
      title: "特製塩らーめん",
      price: "1,400円",
      description:
        "澄んだ塩スープに自家製麺が絡む、当店自慢の塩らーめんに贅沢なトッピングをプラス。バラチャーシュー2枚、肩ロース1枚、味玉、海苔2枚が入った特製仕様で、素材の旨みを最大限に味わえる一杯です。",
      caption: "当店自慢の塩らーめんに贅沢なトッピングをプラス",
      mainImage: IMAGES.tokusio,
    },
    {
      badge: "らーめんのお供に",
      badgeEn: "ACCOMPANIED BY",
      title: "チャーシュー丼",
      price: "600円",
      description:
        "チャーシューを贅沢にのせた一杯。肉の旨味をしっかり感じられるチャーシューに自家製ダレと卵黄が絡み合う、〆にもぴったりのごちそう丼です。",
      caption: "ごちそう丼",
      mainImage: IMAGES.gallery[1],
    },
  ]

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % items.length)
      }, 10000)
      return () => clearInterval(timer)
    }
  }, [items.length, isPaused])

  const handlePrev = () => {
    setIsPaused(true)
    setIndex((prev) => (prev - 1 + items.length) % items.length)
    setTimeout(() => setIsPaused(false), 15000)
  }

  const handleNext = () => {
    setIsPaused(true)
    setIndex((prev) => (prev + 1) % items.length)
    setTimeout(() => setIsPaused(false), 15000)
  }

  const handleDotClick = (i: number) => {
    setIsPaused(true)
    setIndex(i)
    setTimeout(() => setIsPaused(false), 15000)
  }

  const active = items[index]

  return (
    <section className="py-24 px-4 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black/70 rounded-sm" />
          <div className="relative bg-white border-4 border-black rounded-sm overflow-hidden shadow-[12px_12px_0_#000]">
            <div className="absolute -top-4 right-10 w-14 h-14 bg-[#f5f1e8] border-4 border-black rotate-6 hidden md:block" />
            <div className="absolute top-10 -left-6 w-10 h-10 bg-[#f5f1e8] border-4 border-black -rotate-6 hidden md:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x > 100 || velocity.x > 500) {
                    handlePrev()
                  } else if (offset.x < -100 || velocity.x < -500) {
                    handleNext()
                  }
                }}
                className="grid md:grid-cols-2 gap-0 cursor-grab active:cursor-grabbing"
              >
                <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-black text-white text-xs font-black rounded-sm tracking-wide">
                      {active.badge}
                    </span>
                    <span className="px-3 py-1 bg-[#F8D94B] border-2 border-black text-xs font-black tracking-widest rounded-sm">
                      {active.badgeEn}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 tracking-[0.25em] mb-3 uppercase">SIGNATURE GALLERY</p>
                    <h3
                      className="text-4xl md:text-5xl font-black leading-tight text-[#111]"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {active.title}{" "}
                      <span className="text-[#E44757] text-3xl md:text-4xl font-black">（{active.price}）</span>
                    </h3>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-[#222]">{active.description}</p>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={handlePrev}
                        className="w-11 h-11 flex items-center justify-center rounded-full border-[3px] border-black bg-white hover:-translate-y-0.5 transition-transform shadow-[3px_3px_0_#000]"
                        aria-label="前へ"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
                          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      <div className="flex items-center gap-3">
                        {items.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={`w-3 h-3 rounded-full border-2 border-black transition-colors ${
                              i === index ? "bg-[#E44757]" : "bg-white"
                            }`}
                            aria-label={`slide-${i + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={handleNext}
                        className="w-11 h-11 flex items-center justify-center rounded-full border-[3px] border-black bg-white hover:-translate-y-0.5 transition-transform shadow-[3px_3px_0_#000]"
                        aria-label="次へ"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
                          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">{active.caption}</p>
                  </div>
                </div>

                <div className="p-8 md:p-12 bg-[#f5f1e8] flex items-center justify-center relative">
                  <div className="relative w-full max-w-xl aspect-[4/3]">
                    <div className="absolute inset-0 translate-x-5 translate-y-5 bg-black rounded-sm" />
                    <div className="absolute inset-0 translate-x-10 translate-y-10 bg-white border-4 border-black rounded-sm" />
                    <div className="relative w-full h-full border-[10px] border-white shadow-[12px_12px_0_#000] rounded-sm overflow-hidden">
                      <img src={active.mainImage} alt={active.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhotoGallerySection() {
  return (
    <section id="gallery" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <a
            href="https://line.me/R/ti/p/@091wotfr"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-4xl mx-auto hover:opacity-90 transition-opacity"
          >
            <img
              src="/images/bana.png"
              alt="LINE公式アカウント"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </motion.div>

        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[#C41E3A] mb-4">GALLERY</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            希楽夢の味わい
          </h3>
          <p className="text-gray-600">店内の雰囲気、こだわりの一杯をご覧ください</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {IMAGES.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`希楽夢 ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>      
    </section>
  )
}

function RecruitSection() {
  return (
    <section id="recruit" className="py-24 px-4 bg-[#F5E6D3] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-16 opacity-20"
            style={{ left: `${15 + i * 15}%`, bottom: "20%" }}
            animate={{ y: [-20, -80, -20], opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: 3 + i * 0.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
          >
            <svg viewBox="0 0 20 40" className="w-full h-full fill-[#5D4E37]">
              <path d="M10 40 C10 40 5 30 8 20 C11 10 6 5 10 0 C14 5 9 10 12 20 C15 30 10 40 10 40Z" />
            </svg>
          </motion.div>
        ))}

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 opacity-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 400 50" className="w-full h-full stroke-[#5D4E37] fill-none" strokeWidth="2">
            <motion.path
              d="M0 25 Q50 10 100 25 T200 25 T300 25 T400 25"
              animate={{
                d: [
                  "M0 25 Q50 10 100 25 T200 25 T300 25 T400 25",
                  "M0 25 Q50 40 100 25 T200 25 T300 25 T400 25",
                  "M0 25 Q50 10 100 25 T200 25 T300 25 T400 25",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.path
              d="M0 35 Q50 20 100 35 T200 35 T300 35 T400 35"
              animate={{
                d: [
                  "M0 35 Q50 20 100 35 T200 35 T300 35 T400 35",
                  "M0 35 Q50 50 100 35 T200 35 T300 35 T400 35",
                  "M0 35 Q50 20 100 35 T200 35 T300 35 T400 35",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-10 right-10 w-32 h-32 opacity-10"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 80" className="w-full h-full fill-[#5D4E37]">
            <ellipse cx="50" cy="20" rx="45" ry="15" />
            <path d="M5 20 Q10 70 50 75 Q90 70 95 20 Z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-sm tracking-widest mb-6 text-[#8B7355]">RECRUIT</p>
        <h2
          className="text-3xl md:text-4xl font-serif mb-4 text-[#3D3129]"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          働くすべての人の
        </h2>
        <h2
          className="text-3xl md:text-4xl font-serif mb-12 text-[#3D3129]"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          日常に寄り添うお店でいたい
        </h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            IMAGES.noren,
            "/images/jikaseimen.jpeg",
            IMAGES.interior,
            "/images/tenpogaikan.png",
          ].map((src, i) => (
            <motion.div
              key={i}
              className="w-48 h-64 overflow-hidden rounded shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={src} alt={`店舗写真 ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <p className="text-lg tracking-widest mb-8 text-[#5D4E37]">Good Times, Good People, Good Day.</p>

          <motion.a
            href="https://kiramu-recruit.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#FFE600] text-black border-[2.5px] border-black rounded-md shadow-[3px_3px_0_#000] text-base font-semibold tracking-wide hover:-translate-y-0.5 transition-transform"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="w-5 h-5" />
            採用ページを見てみる！
            <ChevronRight className="w-5 h-5" />
          </motion.a>

        <p className="mt-12 text-[#5D4E37] leading-relaxed">
          ラーメンが好き、食べることが好き、
          <br />
          調理経験を積みたい、接客が好き、
          <br />
          お客様をおもてなしするのが好きな人、歓迎。
          <br />
          経験は問いません。
        </p>
      </div>
    </section>
  )
}

function CalendarSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[#C41E3A] mb-4">CALENDAR</p>
          <h3 className="text-2xl font-bold" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            営業日カレンダー
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={IMAGES.calendar}
            alt="営業日カレンダー"
            className="w-full max-w-2xl rounded-2xl shadow-lg"
          />
        </motion.div>

        <div className="bg-white border-4 border-black p-6 mt-6" style={{ boxShadow: '4px 4px 0 0 #000' }}>
          <div className="text-center">
            <p className="text-xl font-black text-black mb-4">
              インスタグラムはこちら！
            </p>
            <a
              href="https://www.instagram.com/menya.kiramu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 px-8 py-4 border-4 border-black text-white text-lg font-black uppercase hover:translate-x-1 hover:translate-y-1 transition-transform"
              style={{ boxShadow: '4px 4px 0 0 #000' }}
            >
              <Instagram className="w-6 h-6" />
              Instagram
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="bg-white border-4 border-black p-6 mt-6" style={{ boxShadow: '4px 4px 0 0 #000' }}>
          <div className="text-center">
            <p className="text-xl font-black text-black mb-4">
              公式LINEはこちら！
            </p>
            <a
              href="https://line.me/R/ti/p/@091wotfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-4 border-black text-white text-lg font-black uppercase hover:translate-x-1 hover:translate-y-1 transition-transform"
              style={{ backgroundColor: '#06C755', boxShadow: '4px 4px 0 0 #000' }}
            >
              <MessageCircle className="w-6 h-6" />
              LINE
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 w-12 h-12 bg-[#C41E3A] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      aria-label="ページ上部へ"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
