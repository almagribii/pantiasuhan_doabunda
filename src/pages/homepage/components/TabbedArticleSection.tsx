import { useState } from "react";

const tabData = [
  {
    id: "pendidikan",
    label: "PENDIDIKAN & KETERAMPILAN",
    content: {
      headline: "Pendidikan Adalah Kunci Masa Depan Mereka",
      paragraphs: [
        "Kami berkomitmen penuh untuk memastikan setiap anak mendapatkan akses pendidikan yang layak. Mulai dari pendidikan formal di sekolah hingga les tambahan dan bimbingan belajar, kami menyiapkan mereka untuk meraih cita-cita.",
        "Selain itu, kami juga mengajarkan berbagai keterampilan non-akademik, seperti melukis, musik, dan kerajinan tangan, untuk menggali bakat terpendam mereka dan mengembangkan kreativitas.",
      ],
      image:
        "https://images.unsplash.com/photo-1546522370-0d4810a905a5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb", // Ganti dengan URL gambar pendidikan
    },
  },
  {
    id: "kesehatan",
    label: "KESEHATAN & GIZI",
    content: {
      headline: "Mewujudkan Hidup Sehat dan Berkualitas",
      paragraphs: [
        "Kesehatan adalah prioritas kami. Secara berkala, kami melakukan pemeriksaan kesehatan rutin untuk memastikan setiap anak tumbuh dengan optimal. Lingkungan yang bersih dan higienis juga selalu kami jaga.",
        "Kami menyediakan asupan gizi yang seimbang setiap harinya. Dengan menu makanan yang bervariasi, kami berharap dapat memenuhi kebutuhan nutrisi mereka untuk tumbuh kembang yang sempurna.",
      ],
      image:
        "https://images.unsplash.com/photo-1517596853744-8c88f34f4347?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb", // Ganti dengan URL gambar kesehatan/gizi
    },
  },
  {
    id: "relawan",
    label: "CERITA INSPIRATIF",
    content: {
      headline: "Sentuhan Kasih Sayang dari Para Relawan",
      paragraphs: [
        "Para relawan adalah pahlawan tanpa tanda jasa kami. Mereka datang dengan hati tulus untuk menemani anak-anak belajar, bermain, atau sekadar berbagi cerita. Kehadiran mereka membawa kebahagiaan dan semangat baru.",
        "Banyak cerita inspiratif yang lahir dari interaksi antara relawan dan anak-anak. Kisah-kisah ini menunjukkan bahwa kebaikan sekecil apapun dapat memberikan dampak yang luar biasa.",
      ],
      image:
        "https://images.unsplash.com/photo-1520108398437-024c084ac918?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb", // Ganti dengan URL gambar relawan
    },
  },
];

const TabbedArticleSection = () => {
  const [activeTab, setActiveTab] = useState("pendidikan");

  const renderContent = () => {
    const activeContent = tabData.find((tab) => tab.id === activeTab)?.content;

    if (!activeContent) {
      return (
        <div className="text-center p-8 text-muted-foreground">
          Konten untuk tab ini belum tersedia.
        </div>
      );
    }

    return (
      <div className="text-center">
        {/* Mockup Laptop */}
        <div className="relative mx-auto w-full max-w-2xl mt-8">
          <div className="relative w-full aspect-[16/10] bg-gray-900 rounded-2xl border-2 border-gray-800 shadow-2xl overflow-hidden p-2">
            <div className="absolute top-0 left-0 w-full h-full p-2">
              <img
                src={activeContent.image}
                alt="Konten laptop"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            {/* Kamera Laptop */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
            {/* Bezel bawah */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-gray-900"></div>
          </div>
          {/* Bagian Keyboard Laptop */}
          <div className="relative mx-auto w-3/4 h-2 bg-gray-800 rounded-b-md"></div>
        </div>

        {/* Teks di bawah Mockup */}
        <div className="mt-8 px-4 text-left max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-foreground">
            {activeContent.headline}
          </h3>
          {activeContent.paragraphs.map((p, index) => (
            <p key={index} className="mt-4 text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    // Kelas padding horizontal di sini sudah dihapus
    <div className="bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Bersama Ciptakan{" "}
          <span className="text-primary">Masa Depan Cerah</span> untuk Anak-anak
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Kami percaya setiap anak memiliki potensi luar biasa. Melalui kasih
          sayang dan bimbingan, kami berkomitmen untuk membantu mereka meraih
          impian.
        </p>

        {/* Tab Navigasi */}
        <div className="mt-12 flex justify-center border-b border-border">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-6 text-sm font-semibold transition-colors duration-300
                ${
                  activeTab === tab.id
                    ? "border-b-2 border-primary text-primary"
                    : "border-b-2 border-transparent text-foreground hover:text-primary"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Konten Tab */}
      <div className="mt-8">{renderContent()}</div>
    </div>
  );
};

export default TabbedArticleSection;
