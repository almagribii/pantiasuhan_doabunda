import { useState, useEffect } from "react";
import ArticleCard from "../../../components/ui/articleCard";

const ArticleBlog = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticles = async () => {
      const apiKey = "11d60b707b4316d8032f0a76f6a44c55";
      const keywords = "politik";
      const url = `https://gnews.io/api/v4/search?q=${keywords}&lang=id&country=id&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (e) {
        setError(
          "Terjadi kesalahan saat memuat artikel. Silakan coba lagi nanti.");
      } finally {
        setIsLoading(false);
      }
    };

    getArticles();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center p-10 text-foreground">Memuat artikel...</div>
    );
  }

  if (error) {
    return <div className="text-center p-10 text-destructive">{error}</div>;
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-foreground mb-12">
          Artikel Seputar Panti Asuhan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              Tidak ada artikel yang ditemukan.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleBlog;
