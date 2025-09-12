const OrphanageInfoSection = () => {
  return (
    <div className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Fakta tentang Anak-anak Yatim di Seluruh Dunia
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Setiap anak berhak mendapatkan kasih sayang, perlindungan, dan
          kesempatan untuk meraih impian. Berikut adalah beberapa gambaran
          singkat tentang kondisi mereka.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Kartu Fakta 1 - Contoh dengan Ikon/Gambar */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="mb-4 h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-4xl text-blue-600">&#x1F30D;</span>
            </div>
            <h3 className="text-xl font-semibold text-primary">
              Ratusan Juta Anak
            </h3>
            <p className="mt-2 text-base text-muted-foreground">
              Diperkirakan lebih dari 140 juta anak di seluruh dunia kehilangan
              satu atau kedua orang tua.
            </p>
          </div>

          {/* Kartu Fakta 2 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="mb-4 h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-4xl text-blue-600">&#x1F4DA;</span>
            </div>
            <h3 className="text-xl font-semibold text-primary">
              Pendidikan Terbatas
            </h3>
            <p className="mt-2 text-base text-muted-foreground">
              Banyak anak di panti asuhan menghadapi tantangan besar dalam
              mengakses pendidikan yang layak dan berkualitas.
            </p>
          </div>

          {/* Kartu Fakta 3 */}
          <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="mb-4 h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-4xl text-blue-600">&#x1F91D;</span>
            </div>
            <h3 className="text-xl font-semibold text-primary">
              Peran Komunitas
            </h3>
            <p className="mt-2 text-base text-muted-foreground">
              Dukungan dari komunitas, baik itu donasi atau relawan, sangat
              penting untuk masa depan mereka.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrphanageInfoSection;
