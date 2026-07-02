import Image from "next/image";
import Link from "next/link";

export default function VinylSection() {
    return (
        <section className="py-20 px-6" style={{ background: "#fff" }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Copy */}
                <div className="order-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#007800" }}>
                        Alta Performance em Fixação
                    </p>
                    <h2 className="font-extrabold text-gray-900 leading-tight mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>
                        Soluções para{" "} <br></br>
                        <span style={{ color: "#007800" }}>pisos de vinílico</span>
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed mb-4">
                        Para que o design de um piso vinílico seja valorizado por completo, a preparação que fica sob a superfície é decisiva. Alinhamento perfeito e réguas estáveis dependem diretamente de um contrapiso bem nivelado e de uma colagem contínua. É com esse foco que nasce a Linha para Vinílicos: um conjunto de 4 produtos complementares que cuidam de todo o processo, desde o tratamento inicial da base até o acabamento.
                    </p>
                    <p className="text-gray-500 text-base leading-relaxed mb-8">
                        Fórmulas eficientes que ajudam a eliminar imperfeições ocultas, evitam o surgimento de bolhas e protegem a paginação contra o desgaste do tráfego diário.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/produtos?categoria=linha-para-vinilicos"
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

                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden order-2" style={{ height: 500 }}>
                    <Image
                        src="/assets/Banner_610x500px_Vinilico.png"
                        alt="Soluções para Pisos de Vinílico"
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
                            Linha para Vinílicos
                        </p>
                        <p className="text-white text-sm font-semibold">4 produtos, um único sistema</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
