import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "../page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found — Humanents" };
  return {
    title: `${post.title} — Humanents`,
    description: post.excerpt,
  };
}

export default async function NewsArticle({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <article className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <Link
          href="/news"
          className="text-sm text-white/40 hover:text-white/60 transition-colors mb-8 inline-block"
        >
          &larr; Back to News
        </Link>
        <time className="block text-sm text-white/40 font-mono mb-4">
          {post.date}
        </time>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          {post.title}
        </h1>
        <div className="prose-humanents">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-white/70 leading-relaxed mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
