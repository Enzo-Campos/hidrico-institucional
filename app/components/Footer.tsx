"use client";

import Image from "next/image";
import Link from "next/link";

function WhatsAppIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function MapPinIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
        </svg>
    );
}

const produtos = [
{ label: "Cola PU 606", href: "/produtos/fabcol-cola-para-pisos-de-madeira-pu-606" },
    { label: "Cola PU 604", href: "/produtos/fabcol-cola-para-pisos-de-madeira-pu-604" },
    { label: "Cola para Grama Sintética", href: "/produtos/fabcol-cola-para-grama-sintetica" },
    { label: "Impermeabilizante Contrapiso", href: "/produtos/fabflex-impermeabilizante-de-contrapiso" },
    { label: "FabFix Aditivo Cimentício", href: "/produtos/fabfix-aditivo-para-contrapiso-cimenticio" },
];

const links = [
    { label: "Início", href: "/" },
    { label: "Produtos", href: "/produtos" },
    { label: "Blog", href: "/blog" },
    { label: "Manuais", href: "/manuais" },
    { label: "Contato", href: "/contato" },
];

export default function Footer() {
    return (
        <footer style={{ background: "#04110a", color: "#ffffff" }}>
            {/* Main grid */}
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand */}
                <div className="lg:col-span-1">
                    <Link href="/" className="inline-block mb-5">
                        <Image
                            src="/assets/logo.webp"
                            alt="Hídrico Química"
                            width={140}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                        Mais de 30 anos desenvolvendo adesivos de alta performance para pisos, madeiras e grama sintética. Tecnologia que acompanha a evolução do mercado.
                    </p>
                    {/* Social icons */}
                    <div className="flex gap-3">
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
                                aria-label={s.label}
                                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                                style={{ background: "rgba(255,255,255,0.07)", color: "#31b144" }}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Products */}
                <div>

                </div>

                {/* Links */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "#31b144" }}>
                        Navegação
                    </p>
                    <ul className="flex flex-col gap-2.5">
                        {links.map(l => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className="text-sm transition-colors"
                                    style={{ color: "rgba(255,255,255,0.55)" }}
                                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "#31b144" }}>
                        Contato
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-2.5">
                            <span className="mt-0.5 shrink-0" style={{ color: "#31b144" }}><MapPinIcon /></span>
                            <a
                                href="https://maps.app.goo.gl/hsPmZxj6kzAADrcJ8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm leading-relaxed transition-colors"
                                style={{ color: "rgba(255,255,255,0.55)" }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                            >
                                Rod. Gumercindo Boza, 18500<br />
                                Campo Magro — PR, 83535-000
                            </a>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span style={{ color: "#31b144" }}><PhoneIcon /></span>
                            <a href="tel:4137972170" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                            >
                                (41) 3797-2170
                            </a>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span style={{ color: "#31b144" }}><WhatsAppIcon /></span>
                            <a href="https://wa.me/554137982010" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                            >
                                (41) 3798-2010
                            </a>
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span style={{ color: "#31b144" }}><MailIcon /></span>
                            <a href="mailto:contato@hidricoquimica.com.br" className="text-sm transition-colors break-all" style={{ color: "rgba(255,255,255,0.55)" }}
                                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                            >
                                contato@hidricoquimica.com.br
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider + copyright */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                        © {new Date().getFullYear()} Hídrico Química. Todos os direitos reservados.
                    </p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                        Desenvolvido por <Link href="https://iblanco.com.br" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold mt-1 inline-flex items-center gap-1 transition-colors" style={{ color: "#31b144" }}>iblanco</Link>
                    </p>

                </div>
            </div>
        </footer>
    );
}
