import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "ASP.NET Core Identity: Authentication & Authorization Guide",
    excerpt: "A practical guide to building authentication and authorization in ASP.NET Core using Identity, custom user/role models, role-based access, and cookie-based sign-in flows.",
    date: "May 31, 2025",
    readTime: "10 min read",
    slug: "https://medium.com/@mustafalbayrak/asp-net-core-identity-ile-kimlik-do%C4%9Frulama-ve-yetkilendirme-uygulamal%C4%B1-rehber-119da6defa69"
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold tracking-tight">Blog</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        
        <p className="text-center text-muted-foreground mb-12">
          Thoughts on software engineering, architecture, and development
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article 
              key={post.title}
              className="group glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
                <span className="text-border">·</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <a 
                href={post.slug}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://medium.com/@mustafalbayrak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            View all posts
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
