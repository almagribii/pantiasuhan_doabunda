import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

const LocationSection = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.592534062118!2d110.45789641525791!3d-6.940561569999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708f37a5b3a37b%3A0x6d36e2f1f8b6f750!2sRumah%20Anak%20Surga!5e0!3m2!1sen!2sid!4v1663162793132!5m2!1sen!2sid";

  return (
    <div className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Lokasi Kami
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Temukan kami di peta dan datanglah berkunjung untuk melihat langsung
          kegiatan anak-anak.
        </p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Informasi Kontak */}
        <div
          className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-left 
          flex flex-col justify-center h-[450px]"
        >
          {/* Ikon Besar di Bagian Atas */}
          <div className="flex justify-center mb-6">
            <FaMapMarkerAlt className="text-primary text-6xl" />
          </div>

          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
            Rumah Anak Surga
          </h3>

          <p className="mt-2 text-muted-foreground flex items-center mb-2">
            <FaMapMarkerAlt className="text-primary mr-3 text-xl flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">Alamat:</span>
              <br />
              Jl. Gangin, RT.4/RW.4, Bangetayu Wetan, Kec. Genuk, Kota Semarang,
              Jawa Tengah 50115
            </div>
          </p>
          <p className="mt-2 text-muted-foreground flex items-center mb-2">
            <FaClock className="text-primary mr-3 text-xl flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">
                Jam Operasional:
              </span>
              <br />
              Senin - Minggu: 08.00–20.00 WIB
            </div>
          </p>
          <p className="mt-2 text-muted-foreground flex items-center">
            <FaPhoneAlt className="text-primary mr-3 text-xl flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">
                Nomor Telepon:
              </span>
              <br />
              +62 812-2605-7151
            </div>
          </p>
        </div>

        {/* Kotak Peta dengan Iframe */}
        <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <iframe
            src={mapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
