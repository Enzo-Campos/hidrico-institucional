"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

/* ── Icons ──────────────────────────────────────────────────────── */
function WhatsAppIcon({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function MapPinIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.63c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V23h-4V8z" />
        </svg>
    );
}

/* ── Info Card ─────────────────────────────────────────────────── */
function InfoCard({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
    return (
        <div className="flex gap-4 p-5 rounded-2xl border" style={{ background: "#f9faf9", borderColor: "#e7ebe8" }}>
            <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,120,0,0.08)", color: "#007800" }}>
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-1" style={{ color: "#007800" }}>{label}</p>
                {children}
            </div>
        </div>
    );
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function ContatoPage() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");
        await new Promise(r => setTimeout(r, 1200));
        setStatus("sent");
    }

    const input = "w-full rounded-xl border px-4 py-3 text-sm text-gray-800 outline-none transition-all focus:border-green-600 focus:ring-2 focus:ring-green-100";
    const inputBase = { borderColor: "#d1d5db", background: "#fff" };

    return (
        <div className="min-h-screen" style={{ background: "#f4f5f0" }}>

            {/* PAGE HEADER */}
            <div className="pt-32 pb-14 px-6" style={{ background: "#fff", borderBottom: "1px solid #e7ebe8" }}>
                <div className="max-w-7xl mx-auto">
                    <Breadcrumb
                      className="mb-4"
                      variant="light"
                      crumbs={[
                        { label: "Início", href: "/" },
                        { label: "Contato" },
                      ]}
                    />
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: "#007800" }}>
                        Hídrico Química
                    </p>
                    <h1 className="font-black text-gray-900 mb-4 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                        Entre em contato
                    </h1>
                    <p className="text-gray-500 text-base leading-relaxed" style={{ maxWidth: 520 }}>
                        Nossa equipe está pronta para atender você — tire dúvidas, solicite um orçamento ou encontre o produto ideal para sua obra.
                    </p>
                </div>
            </div>

            {/* MAIN GRID */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                    {/* FORM (3 cols) */}
                    <div className="lg:col-span-3 rounded-3xl p-8 border" style={{ background: "#fff", borderColor: "#e7ebe8" }}>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#007800" }}>Formulário</p>
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-7">Envie sua mensagem</h2>

                        {status === "sent" ? (
                            <div className="rounded-2xl p-10 text-center border" style={{ background: "#f0fdf4", borderColor: "rgba(34,197,94,0.3)" }}>
                                <div className="text-5xl mb-4">✅</div>
                                <p className="font-bold text-green-800 text-xl mb-2">Mensagem enviada!</p>
                                <p className="text-green-700 text-sm mb-6">Em breve nossa equipe entrará em contato.</p>
                                <button
                                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                                    className="px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:brightness-110"
                                    style={{ background: "#007800", color: "#fff" }}
                                >
                                    Enviar outra mensagem
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nome *</label>
                                        <input required name="name" value={form.name} onChange={handleChange} placeholder="Seu nome completo" className={input} style={inputBase} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Telefone</label>
                                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="(41) 9 0000-0000" className={input} style={inputBase} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">E-mail *</label>
                                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" className={input} style={inputBase} />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Assunto</label>
                                    <select name="subject" value={form.subject} onChange={handleChange} className={input} style={inputBase}>
                                        <option value="">Selecione um assunto</option>
                                        <option value="orcamento">Solicitação de orçamento</option>
                                        <option value="suporte">Suporte técnico</option>
                                        <option value="revendedor">Quero ser revendedor</option>
                                        <option value="duvida">Dúvida sobre produto</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Mensagem *</label>
                                    <textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Descreva sua dúvida ou solicitação..." className={input} style={{ ...inputBase, resize: "none" }} />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full py-4 rounded-full font-bold text-sm transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
                                    style={{ background: "#007800", color: "#fff" }}
                                >
                                    {status === "sending" ? "Enviando…" : "Enviar mensagem →"}
                                </button>

                                <p className="text-xs text-gray-400 text-center">
                                    Ou fale diretamente pelo{" "}
                                    <a href="https://wa.me/554137982010" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "#007800" }}>
                                        WhatsApp
                                    </a>
                                </p>
                            </form>
                        )}
                    </div>

                    {/* INFO + SOCIAL (2 cols) */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <div className="mb-2">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: "#007800" }}>Informações</p>
                            <h2 className="text-2xl font-extrabold text-gray-900">Como nos encontrar</h2>
                        </div>

                        <InfoCard icon={<MapPinIcon />} label="Endereço">
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Rod. Gumercindo Boza, 18500<br />
                                Centro — Campo Magro, PR<br />
                                CEP 83535-000
                            </p>
                            <a href="https://maps.google.com/?q=Rod.+Gumercindo+Boza+18500+Campo+Magro+PR" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-xs font-semibold" style={{ color: "#007800" }}>
                                Ver no Google Maps →
                            </a>
                        </InfoCard>

                        <InfoCard icon={<PhoneIcon />} label="Telefone Fixo">
                            <a href="tel:4137972170" className="text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors">
                                (41) 3797-2170
                            </a>
                        </InfoCard>

                        <InfoCard icon={<WhatsAppIcon />} label="WhatsApp">
                            <a href="https://wa.me/554137982010" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors">
                                (41) 3798-2010
                            </a>
                            <p className="text-xs text-gray-400 mt-0.5">Seg–Sex, 8h–18h</p>
                        </InfoCard>

                        <InfoCard icon={<MailIcon />} label="E-mail">
                            <a href="mailto:contato@hidricoquimica.com.br" className="text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors break-all">
                                contato@hidricoquimica.com.br
                            </a>
                        </InfoCard>

                        {/* Socials */}
                        <div className="rounded-2xl p-5 border" style={{ background: "#f9faf9", borderColor: "#e7ebe8" }}>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: "#007800" }}>Redes Sociais</p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { href: "https://www.instagram.com/hidricoquimica", icon: <InstagramIcon />, label: "Instagram" },
                                    { href: "https://www.linkedin.com/company/h%C3%ADdrico-qu%C3%ADmica/?viewAsMember=true", icon: <LinkedInIcon />, label: "LinkedIn" },
                                    { href: "https://wa.me/554137982010", icon: <WhatsAppIcon />, label: "WhatsApp" },
                                ].map(s => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-green-300"
                                        style={{ borderColor: "#e7ebe8", background: "#fff", color: "#374151" }}
                                    >
                                        {s.icon}
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="px-6 pb-20">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#007800" }}>Localização</p>
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Onde estamos</h2>
                    <div className="rounded-3xl overflow-hidden border" style={{ borderColor: "#e7ebe8", height: 420 }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.445793308!2d-49.491!3d-25.351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dca3acb2a08f29%3A0x94a4a59a8cde6af0!2sRod.+Gumercindo+Boza%2C+18500+-+Campo+Magro%2C+PR%2C+83535-000!5e0!3m2!1spt-BR!2sbr!4v1714218000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização Hídrico Química — Campo Magro PR"
                        />
                    </div>
                </div>
            </section>

            {/* CTA strip */}
            <section className="py-16 px-6" style={{ background: "#0a1a0a" }}>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#22c55e" }}>Atendimento rápido</p>
                    <h2 className="text-3xl font-extrabold text-white mb-4">Prefere falar agora?</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Chame no WhatsApp e receba atendimento imediato da nossa equipe técnica.
                    </p>
                    <a
                        href="https://wa.me/554137982010?text=Olá%2C gostaria de um orçamento"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm transition-all hover:brightness-110 active:scale-95"
                        style={{ background: "#22c55e", color: "#071007" }}
                    >
                        <WhatsAppIcon size={18} />
                        Falar no WhatsApp
                    </a>
                </div>
            </section>

        </div>
    );
}
