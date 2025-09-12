import React from "react";

interface Article {
  image?: string;
  title: string;
  description: string;
  url: string;
}

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        {/* Gambar Artikel */}
        <img
          src={
            article.image ||
            "https://via.placeholder.com/600x400?text=Gambar+Tidak+Tersedia"
          }
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        {/* Judul Artikel */}
        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
          {article.title}
        </h3>

        {/* Deskripsi Artikel */}
        <p className="text-muted-foreground text-sm line-clamp-3">
          {article.description}
        </p>

        {/* Tautan ke Artikel */}
        <div className="mt-4">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
