import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import sinathPortrait from "@/imports/image.png";
import { Menu, X, MapPin, Bed, Bath, Square, Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";

const navItems = ["About", "Services", "Philosophy", "Listings", "Contact"];

const listings = [
  {
    id: 1,
    address: "2847 Cypress Ridge Drive",
    city: "Alameda County, CA",
    price: "$3,200,000",
    beds: 4,
    baths: 3.5,
    sqft: 3840,
    image: "photo-1613490493576-7fde63acd811",
  },
  {
    id: 2,
    address: "519 Meadowbrook Lane",
    city: "Mill Valley, CA",
    price: "$2,750,000",
    beds: 3,
    baths: 2.5,
    sqft: 2650,
    image: "photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    address: "1104 Shoreline Blvd, Unit 8A",
    city: "Sausalito, CA",
    price: "$1,895,000",
    beds: 2,
    baths: 2,
    sqft: 1780,
    image: "photo-1512917774080-9991f1c4c750",
  },
];

const sold = [
  {
    id: 1,
    address: "374 Oak Canyon Court",
    city: "Tiburon, CA",
    soldPrice: "$4,100,000",
    listPrice: "$3,950,000",
    beds: 5,
    baths: 4,
    sqft: 4600,
    closedDate: "March 2025",
    image: "photo-1600047509807-ba8f99d2cdde",
  },
  {
    id: 2,
    address: "881 Eucalyptus Way",
    city: "Belvedere, CA",
    soldPrice: "$2,980,000",
    listPrice: "$2,850,000",
    beds: 4,
    baths: 3,
    sqft: 3200,
    closedDate: "January 2025",
    image: "photo-1564013799919-ab600027ffc6",
  },
  {
    id: 3,
    address: "1630 Hillcrest Avenue",
    city: "San Anselmo, CA",
    soldPrice: "$1,625,000",
    listPrice: "$1,550,000",
    beds: 3,
    baths: 2,
    sqft: 2100,
    closedDate: "November 2024",
    image: "photo-1523217582562-09d0def993a6",
  },
  {
    id: 4,
    address: "255 Pacific Crest Road",
    city: "Ross, CA",
    soldPrice: "$5,400,000",
    listPrice: "$5,200,000",
    beds: 6,
    baths: 5,
    sqft: 5800,
    closedDate: "October 2024",
    image: "photo-1600566753190-17f0baa2a6c3",
  },
];

const services = [
  {
    title: "Buyer Representation",
    description: "From first showing to closing day, I help you locate your dream home — with trusted lending partners to tailor the perfect loan and the market knowledge to choose exactly the right property.",
  },
  {
    title: "Seller Representation",
    description: "Exquisite marketing materials, prime placement on over 700 websites, and international name recognition to position your home in front of serious buyers worldwide.",
  },
  {
    title: "Luxury Properties",
    description: "Deep expertise in Alameda County's premium market — waterfront estates, architectural gems, and generational homes.",
  },
  {
    title: "Investment Advisory",
    description: "Data-driven analysis on rental properties, 1031 exchanges, and portfolio strategies for long-term wealth.",
  },
  {
    title: "Relocation Services",
    description: "Moving to the Bay Area? I make the transition seamless with neighborhood tours, school insights, and community connections.",
  },
  {
    title: "Market Analysis",
    description: "Complimentary comparative market analysis for any property — buyers and sellers both deserve to make informed decisions.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"listings" | "sold">("listings");

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="bg-background text-foreground min-h-screen"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("hero")}
            className="text-foreground tracking-tight"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", fontWeight: 600 }}
          >
            Sinath Thi
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="text-sm bg-primary text-primary-foreground px-5 py-2.5 hover:opacity-90 transition-opacity tracking-wide"
            >
              Get in Touch
            </button>
          </nav>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left text-base text-foreground"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="text-left text-base text-accent font-medium"
            >
              Get in Touch
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-16 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left panel — dark */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-24 lg:py-32 bg-primary text-primary-foreground">
          <p className="text-xs tracking-[0.22em] uppercase mb-6" style={{ color: "#C4A35A" }}>
            SF Bay Area · Independent Agent · Real Estate
          </p>
          <h1
            className="leading-[1.05] mb-8"
            style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 600 }}
          >
            Your Home.<br />Your Story.<br />Your Move.
          </h1>
          <p className="text-base lg:text-lg max-w-md leading-relaxed mb-10" style={{ color: "rgba(245,240,232,0.7)" }}>
            {"I'm Sinath Thi — an independent Bay Area real estate agent with 44 years of local knowledge, helping families buy, sell, and invest in extraordinary homes."}
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("listings")}
              className="px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              style={{ backgroundColor: "#C4A35A", color: "#1C1C2E" }}
            >
              View Listings <ArrowRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border text-primary-foreground px-7 py-3.5 text-sm hover:opacity-80 transition-opacity"
              style={{ borderColor: "rgba(245,240,232,0.3)" }}
            >
              Work With Me
            </button>
          </div>
          <div
            className="mt-16 grid grid-cols-3 gap-6 pt-10"
            style={{ borderTop: "1px solid rgba(245,240,232,0.1)" }}
          >
            {[
              { value: "$340M+", label: "Volume Closed" },
              { value: "280+", label: "Homes Sold" },
              { value: "44", label: "Years in the Bay Area" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl lg:text-3xl font-semibold"
                  style={{ fontFamily: "'Fraunces', serif", color: "#C4A35A" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs mt-1 tracking-wide" style={{ color: "rgba(245,240,232,0.45)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right panel — photo */}
        <div className="hidden lg:block relative bg-secondary overflow-hidden min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=1000&fit=crop&auto=format"
            alt="Stunning Alameda County luxury home exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(28,28,46,0.08)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="overflow-hidden bg-secondary" style={{ aspectRatio: "3/4" }}>
              <ImageWithFallback
                src={sinathPortrait}
                alt="Sinath Thi, Alameda County realtor"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div
              className="absolute shadow-xl px-6 py-5"
              style={{ bottom: "-24px", right: "-24px", backgroundColor: "#C4A35A" }}
            >
              <p
                className="text-2xl font-semibold"
                style={{ fontFamily: "'Fraunces', serif", color: "#1C1C2E" }}
              >
                Independent
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#1C1C2E" }}>Real Estate Agent</p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground mb-4">More About Me</p>
            <h2
              className="leading-tight mb-6"
              style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}
            >
              Buy, Sell, and Invest in Real Estate with Sinath
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sinath Thi is a native of Cambodia who has lived in the SF Bay Area for 44 years. As an immigrant, she knows how important resources and trusted guidance can be — experience she now brings to clients as an independent real estate agent.
              </p>
              <p>
                She has resources at her disposal that few REALTORS® have available. If you are an owner considering selling your home, she offers exquisite marketing materials, prime placement on over 700 websites, and international name recognition.
              </p>
              <p>
                If you are a buyer, she is the perfect agent to help you locate your dream home — with trusted lending partners to tailor the perfect loan and the market knowledge necessary to choose exactly the right property. No matter what goals or dreams you may have when it comes to property ownership, Sinath wants to help and can.
              </p>
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              {[
                { label: "Affiliation", value: "Independent Agent" },
                { label: "Location", value: "Castro Valley, CA" },
                { label: "Languages", value: "Central Khmer · English" },
              ].map((item) => (
                <div key={item.label} className="border border-border px-5 py-3">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground mb-4">What I Do</p>
              <h2
                className="leading-tight"
                style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}
              >
                Full-service, start to close.
              </h2>
            </div>
            <div className="lg:col-span-8 lg:flex lg:items-end">
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                Whether you're buying your first home, selling a family estate, or building a real estate portfolio, I bring the same care, expertise, and transparency to every engagement.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-secondary p-8 hover:bg-background transition-colors duration-300 group cursor-default"
              >
                <ChevronRight
                  size={20}
                  className="mb-4 group-hover:translate-x-1 transition-transform duration-200"
                  style={{ color: "#C4A35A" }}
                />
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-24 lg:py-36 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <img
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1600&h=900&fit=crop&auto=format"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.22em] uppercase mb-6" style={{ color: "#C4A35A" }}>
              My Philosophy
            </p>
            <blockquote
              className="leading-[1.2] mb-8 italic"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(1.6rem, 4vw, 3rem)",
                fontWeight: 600,
              }}
            >
              "A home isn't a transaction. It's the backdrop for every memory you'll ever make."
            </blockquote>
            <div className="space-y-4 leading-relaxed max-w-lg" style={{ color: "rgba(245,240,232,0.65)" }}>
              <p>
                I don't measure success by volume alone. I measure it by how confident my clients feel on closing day — and how often they call me years later when they're ready to move again.
              </p>
              <p>
                My approach is built on radical transparency: I'll tell you when a home isn't worth the asking price. I'll walk away from a deal that isn't right for you. I'd rather earn your trust than your commission.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center gap-8">
            {[
              { heading: "Honesty first.", body: "I give you the unvarnished truth — not the version designed to close a deal." },
              { heading: "Patient counsel.", body: "I've never once pressured a client. The right home is worth waiting for." },
              { heading: "Long-term thinking.", body: "I consider resale value, school districts, and neighborhood trajectory in every recommendation." },
            ].map((item) => (
              <div key={item.heading} className="pl-6" style={{ borderLeft: "2px solid #C4A35A" }}>
                <h3
                  className="text-lg mb-1"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                  {item.heading}
                </h3>
                <p className="text-sm" style={{ color: "rgba(245,240,232,0.55)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTINGS & SOLD */}
      <section id="listings" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground mb-3">Properties</p>
              <h2
                className="leading-tight"
                style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}
              >
                {activeTab === "listings" ? "Current Listings" : "Recently Sold"}
              </h2>
            </div>
            <div className="flex gap-1 border border-border p-1 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab("listings")}
                className="px-5 py-2 text-sm transition-colors"
                style={
                  activeTab === "listings"
                    ? { backgroundColor: "#1C1C2E", color: "#F5F0E8" }
                    : { color: "#6B6355" }
                }
              >
                Active Listings
              </button>
              <button
                id="sold"
                onClick={() => setActiveTab("sold")}
                className="px-5 py-2 text-sm transition-colors"
                style={
                  activeTab === "sold"
                    ? { backgroundColor: "#1C1C2E", color: "#F5F0E8" }
                    : { color: "#6B6355" }
                }
              >
                Sold
              </button>
            </div>
          </div>

          {activeTab === "listings" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listings.map((l) => (
                <div key={l.id} className="group cursor-pointer">
                  <div className="overflow-hidden relative mb-4 bg-secondary" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={`https://images.unsplash.com/${l.image}?w=700&h=525&fit=crop&auto=format`}
                      alt={l.address}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute top-4 left-4 text-xs px-3 py-1 font-medium tracking-wide"
                      style={{ backgroundColor: "#C4A35A", color: "#1C1C2E" }}
                    >
                      Active
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <div>
                      <p
                        className="text-lg leading-snug"
                        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                      >
                        {l.address}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin size={12} /> {l.city}
                      </p>
                    </div>
                    <p
                      className="text-lg font-semibold whitespace-nowrap"
                      style={{ fontFamily: "'Fraunces', serif", color: "#C4A35A" }}
                    >
                      {l.price}
                    </p>
                  </div>
                  <div
                    className="flex gap-4 text-sm text-muted-foreground mt-3 pt-3"
                    style={{ borderTop: "1px solid rgba(28,28,46,0.12)" }}
                  >
                    <span className="flex items-center gap-1"><Bed size={14} /> {l.beds} bd</span>
                    <span className="flex items-center gap-1"><Bath size={14} /> {l.baths} ba</span>
                    <span className="flex items-center gap-1"><Square size={14} /> {l.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "sold" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sold.map((s) => (
                <div
                  key={s.id}
                  className="group flex gap-5 border border-border p-5 hover:border-foreground/25 transition-colors"
                >
                  <div className="w-28 h-28 flex-shrink-0 bg-secondary overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${s.image}?w=300&h=300&fit=crop&auto=format`}
                      alt={s.address}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p
                        className="text-base leading-tight"
                        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                      >
                        {s.address}
                      </p>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 whitespace-nowrap flex-shrink-0 tracking-wide">
                        SOLD
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                      <MapPin size={11} /> {s.city}
                    </p>
                    <div className="flex gap-3 text-xs text-muted-foreground mb-3">
                      <span><Bed size={11} className="inline mr-0.5" />{s.beds} bd</span>
                      <span><Bath size={11} className="inline mr-0.5" />{s.baths} ba</span>
                      <span><Square size={11} className="inline mr-0.5" />{s.sqft.toLocaleString()} sqft</span>
                    </div>
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Sold {s.closedDate}</p>
                        <p
                          className="text-base font-semibold"
                          style={{ fontFamily: "'Fraunces', serif", color: "#C4A35A" }}
                        >
                          {s.soldPrice}
                        </p>
                      </div>
                      {s.soldPrice !== s.listPrice && (
                        <p className="text-xs text-muted-foreground">Listed {s.listPrice}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground mb-4">Get in Touch</p>
            <h2
              className="leading-tight mb-6"
              style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}
            >
              {"Let's talk about what you're looking for."}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Whether you're ready to list, actively searching, or just exploring your options — I'm happy to have a conversation with no pressure and no obligation.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Phone size={16} />, label: "510-565-0949", href: "tel:+15105650949" },
                { icon: <Mail size={16} />, label: "sinathrealestate@gmail.com", href: "mailto:sinathrealestate@gmail.com" },
                { icon: <MapPin size={16} />, label: "21060 Redwood Rd Ste 130, Castro Valley, CA 94546", href: undefined },
              ].map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    {item.label}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    {item.label}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#C4A35A" }}
                >
                  <ArrowRight size={24} color="#1C1C2E" />
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                  Message received.
                </h3>
                <p className="text-muted-foreground">
                  {"I'll be in touch within one business day. Looking forward to connecting."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                    placeholder="(510) 000-0000"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Tell me a bit about what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 tracking-wide"
                >
                  Send Message <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            className="text-lg font-semibold"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Sinath Thi
          </p>
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.38)" }}>
            © 2025 Sinath Thi · Independent Real Estate · DRE #01922809 · Castro Valley, CA
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "rgba(245,240,232,0.38)" }}>
            <a href="#" className="hover:opacity-70 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Fair Housing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
