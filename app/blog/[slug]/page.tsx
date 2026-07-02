import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts, CATEGORY_COLORS, CATEGORY_BG } from "../../data/blog";
import Breadcrumb from "../../components/Breadcrumb";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Hídrico Química`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const color = CATEGORY_COLORS[post.category] ?? "#007800";
  const bg = CATEGORY_BG[post.category] ?? CATEGORY_BG["Adesivos PU"];

  return (
    <main style={{ background: "#f4f5f0", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6" style={{ background: bg }}>
        {post.cover ? (
          <>
            <Image src={post.cover} alt={post.title} fill className="object-cover" priority />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 100%)" }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        )}
        <div className="relative max-w-3xl mx-auto">
          <Breadcrumb
            className="mb-8"
            variant="photo"
            crumbs={[
              { label: "Início", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5"
            style={{ background: "rgba(0,0,0,0.3)", color: "rgba(255,255,255,0.85)" }}
          >
            {post.category}
          </span>
          <h1 className="font-black text-white leading-tight mb-5" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {post.content && post.content.length > 0 ? (
            <div className="flex flex-col gap-8">
              {post.content.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="text-xl font-extrabold text-gray-900 mb-3">{section.heading}</h2>
                  )}
                  <p className="text-base text-gray-600 leading-relaxed">{section.text}</p>
                  {section.items && section.items.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {section.items.map((item) => (
                        <li key={item.label} className="text-base text-gray-600 leading-relaxed">
                          <span className="font-bold text-gray-900">{item.label}</span>: {item.text}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.links && section.links.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold underline underline-offset-2 transition-colors"
                            style={{ color }}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-base text-gray-600 leading-relaxed">{post.excerpt}</p>
          )}

          <div className="mt-16 pt-8 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: "1px solid #e7ebe8" }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color }}
            >
              ← Voltar para o blog
            </Link>
            <a
              href="https://wa.me/554137982010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all hover:brightness-110"
              style={{ background: "#007800" }}
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
