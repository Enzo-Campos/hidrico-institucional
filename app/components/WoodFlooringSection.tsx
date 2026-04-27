import Image from "next/image";
import Link from "next/link";

export default function WoodFlooringSection() {
    return (
        <section className="py-20 px-6" style={{ background: "#fff" }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden order-2 lg:order-1" style={{ height: 500 }}>
                    <Image
                        src="/assets/produtos.webp"
                        alt="Soluções para Pisos de Madeira"
                        fill
                        className="object-cover"
                    />
                    {/* Subtle overlay gradient at bottom */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: "linear-gradient(to top, rgba(4,17,10,0.45) 0%, transparent 50%)",
                        }}
                    />
                    {/* Badge */}
                    <div
                        className="absolute bottom-6 left-6 rounded-2xl px-5 py-4 border"
                        style={{
                            background: "rgba(4,17,10,0.80)",
                            backdropFilter: "blur(12px)",
                            borderColor: "rgba(34,197,94,0.25)",
                        }}
                    >
                        <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#22c55e" }}>
                            Linha FabCol
                        </p>
                        <p className="text-white text-sm font-semibold">Alta performance em cada etapa</p>
                    </div>
                </div>

                {/* Copy */}
                <div className="order-1 lg:order-2">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#007800" }}>
                        Especialidade Hídrico
                    </p>
                    <h2 className="font-extrabold text-gray-900 leading-tight mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>
                        Soluções para{" "} <br></br>
                        <span style={{ color: "#007800" }}>Pisos de Madeira</span>
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed mb-4">
                        A performance de um piso de madeira vai além do material, e projetos de alto padrão exigem soluções à altura. É na etapa de instalação que se define a estabilidade do sistema, a resposta às variações do ambiente e a durabilidade ao longo do tempo.
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed mb-8">
                        É com esse entendimento que desenvolvemos uma linha de adesivos para madeira, considerando as variáveis críticas da obra, para garantir desempenho consistente e estabilidade ao longo do tempo.
                    </p>

                    {/* Feature pills
                    <div className="flex flex-wrap gap-2 mb-8">
                        {["Alta aderência", "Baixo VOC", "Cura rápida", "Resistência à umidade", "Sem odor"].map(tag => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 rounded-full text-xs font-semibold border"
                                style={{ background: "rgba(0,120,0,0.05)", borderColor: "rgba(0,120,0,0.18)", color: "#007800" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div> */}

                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/produtos"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
                            style={{ background: "#007800", color: "#fff" }}
                        >
                            Ver linha completa →
                        </Link>
                        <a
                            href="https://wa.me/554137982010"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors hover:bg-gray-50"
                            style={{ border: "1.5px solid #d1d5db", color: "#374151" }}
                        >
                            Falar com especialista
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
