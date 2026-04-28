import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
    title: "Sobre | Hídrico Química",
    description:
        "Conheça a história da Hídrico Química — mais de 30 anos inovando no desenvolvimento de adesivos de alta performance para pisos, madeiras e grama sintética.",
};

const values = [
    { icon: "⬡", title: "Nossa Missão", desc: "Inovar, desenvolver e fabricar sistemas completos de ancoragem e impermeabilização, com consciência ambiental, responsabilidade social e perfeitamente adaptados às necessidades dos clientes." },
    { icon: "⬡", title: "Nossa Visão", desc: "Pesquisar e desenvolver produtos e métodos que acelerem e tornem mais confiáveis os processos construtivos aplicados por empresas que utilizam tecnologia de ponta." },
    { icon: "⬡", title: "Nossos Valores", desc: "Honestidade, ética nas ações e relações comerciais e industriais, respeito pelo meio ambiente e pelo ser humano, e o orgulho de sermos brasileiros." },
];

const stats = [
    { value: "+30", label: "Anos de mercado" },
    { value: "100%", label: "Tecnologia nacional" },
    { value: "+15", label: "Linhas de produto" },
    { value: "PR", label: "Campo Magro, Paraná" },
];

const pillars = [
    { title: "Produtos de Qualidade", desc: "Contamos com os melhores e mais completos produtos para pisos e madeiras, desenvolvidos com tecnologia de ponta e testes rigorosos antes de chegarem ao mercado." },
    { title: "+30 Anos de Experiência", desc: "A Hídrico Química possui experiência ampla há mais de 30 anos no mercado de adesivos industriais, acumulando know-how e confiança de profissionais de toda a região." },
    { title: "Fomentação da Área", desc: "Ajudamos o aplicador a oferecer produtos qualificados que vão melhorar o desempenho de seus serviços, capacitando o mercado com soluções técnicas acessíveis." },
];

export default function SobrePage() {
    return (
        <div className="min-h-screen" style={{ background: "#f4f5f0" }}>

            {/* ── PAGE HEADER ── */}
            <div className="pt-32 pb-14 px-6" style={{ background: "#fff", borderBottom: "1px solid #e7ebe8" }}>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end gap-10">
                    <div className="flex-1">
                        <Breadcrumb
                          className="mb-4"
                          variant="light"
                          crumbs={[
                            { label: "Início", href: "/" },
                            { label: "Sobre" },
                          ]}
                        />
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: "#007800" }}>
                            Hídrico Química
                        </p>
                        <h1 className="font-black text-gray-900 mb-4 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Mais de 30 anos transformando o mercado de pisos
                        </h1>
                        <p className="text-gray-500 text-base leading-relaxed" style={{ maxWidth: 520 }}>
                            A Hídrico Química nasceu da paixão pela química aplicada à construção. Tecnologia de ponta, segurança e respeito ao meio ambiente — servindo profissionais em todo o Brasil.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                        <Link
                            href="/produtos"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
                            style={{ background: "#007800", color: "#fff" }}
                        >
                            Conhecer produtos
                        </Link>
                        <Link
                            href="/contato"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                            style={{ border: "1.5px solid #e7ebe8", color: "#374151" }}
                        >
                            Fale conosco
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── STATS ── */}
            <section className="py-14 px-6" style={{ background: "#fff" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map(s => (
                        <div key={s.label} className="text-center py-6 px-4 rounded-2xl border" style={{ borderColor: "#e7ebe8", background: "#f9faf9" }}>
                            <p className="text-4xl font-black mb-1" style={{ color: "#007800" }}>{s.value}</p>
                            <p className="text-sm text-gray-500">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── MISSION / VISION / VALUES ── */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#007800" }}>Quem somos</p>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
                        Princípios que guiam{" "}
                        <span style={{ color: "#007800" }}>cada decisão</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map(v => (
                            <div key={v.title} className="rounded-2xl p-7 border transition-all hover:-translate-y-1 hover:shadow-md" style={{ background: "#fff", borderColor: "#e7ebe8" }}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm mb-5" style={{ background: "rgba(0,120,0,0.08)", color: "#007800" }}>
                                    {v.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── IMAGE + PILLARS ── */}
            <section className="py-20 px-6" style={{ background: "#fff" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div className="relative rounded-3xl overflow-hidden order-2 lg:order-1" style={{ height: 480 }}>
                        <Image
                            src="/assets/quem-somos.jpeg"
                            alt="Laboratório Hídrico Química"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay badge */}
                        <div className="absolute bottom-6 left-6 rounded-2xl px-5 py-4 border" style={{ background: "rgba(4,17,10,0.85)", backdropFilter: "blur(12px)", borderColor: "rgba(34,197,94,0.25)" }}>
                            <p className="text-2xl font-black" style={{ color: "#22c55e" }}>+30</p>
                            <p className="text-xs text-white/70 mt-0.5">anos de experiência</p>
                        </div>
                    </div>

                    {/* Pillars */}
                    <div className="order-1 lg:order-2">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#007800" }}>Diferenciais</p>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                            Por que escolher a{" "}
                            <span style={{ color: "#007800" }}>Hídrico Química</span>?
                        </h2>
                        <div className="flex flex-col gap-5">
                            {pillars.map((p, i) => (
                                <div key={p.title} className="flex gap-4 items-start rounded-2xl p-5 border transition-all hover:border-green-200" style={{ background: "#f9faf9", borderColor: "#e7ebe8" }}>
                                    <span className="shrink-0 text-2xl font-black leading-none mt-0.5" style={{ color: "rgba(0,120,0,0.15)" }}>
                                        0{i + 1}
                                    </span>
                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">{p.title}</p>
                                        <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 px-6" style={{ background: "#0a1a0a" }}>
                <div className="relative max-w-3xl mx-auto text-center overflow-hidden rounded-3xl px-10 py-16" style={{ background: "#0e1a0e", border: "1px solid rgba(34,197,94,0.14)" }}>
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.12) 0%, transparent 68%)" }} />
                    <p className="text-xs font-bold uppercase tracking-widest mb-4 relative z-10" style={{ color: "#22c55e" }}>
                        Fale com a Hídrico
                    </p>
                    <h2 className="text-3xl font-extrabold text-white mb-4 relative z-10">Vamos trabalhar juntos?</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
                        Nossa equipe está pronta para encontrar a solução ideal para o seu projeto. Entre em contato e solicite um orçamento.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center relative z-10">
                        <a href="https://wa.me/554137982010" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:brightness-110" style={{ background: "#22c55e", color: "#071007" }}>
                            Falar no WhatsApp
                        </a>
                        <Link href="/produtos" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white/5 transition-colors" style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "#fff" }}>
                            Ver produtos →
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
