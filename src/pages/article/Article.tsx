import React from 'react';
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import ArticleBlog from './components/ArticleBlog';
const Article: React.FC = () => {
    return (
      <div>
        <Navbar />
        <div className="pt-8">
          <ArticleBlog />
        </div>
        <Footer />
      </div>
    );
};

export default Article;