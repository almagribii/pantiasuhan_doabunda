
const bankAccounts = [
  {
    bankName: "BCA",
    accountNumber: "7831500666",
    accountHolder: "YAYASAN RUMAH ANAK SURGA",
    logoSrc: "/assets/rekening/logo_bank/logo_bca.jpeg",
  },
  {
    bankName: "BRI",
    accountNumber: "008301003593567",
    accountHolder: "YAYASAN RUMAH ANAK SURGA",
    logoSrc: "/assets/rekening/logo_bank/logo_bca.jpeg",
  },
  {
    bankName: "BSI",
    accountNumber: "7263493747",
    accountHolder: "YAYASAN RUMAH ANAK SURGA",
    logoSrc: "/assets/rekening/logo_bank/logo_bca.jpeg",
  },
  {
    bankName: "MANDIRI",
    accountNumber: "1360020240021",
    accountHolder: "YAYASAN RUMAH ANAK SURGA",
    logoSrc: "/assets/rekening/logo_bank/logo_bca.jpeg",
  },
  {
    bankName: "BNI",
    accountNumber: "1818759019",
    accountHolder: "YAYASAN RUMAH ANAK SURGA",
    logoSrc: "/assets/rekening/logo_bank/logo_bca.jpeg",
  },
  {
    bankName: "BCA Syariah",
    accountNumber: "0301112355",
    accountHolder: "YAYASAN RUMAH ANAK SURGA",
    logoSrc: "/assets/rekening/logo_bank/logo_bca.jpeg",
  },
];

export function BankAccounts() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Daftar Rekening Donasi
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Salurkan donasi Anda melalui rekening berikut. Setiap bantuan sangat
          berarti bagi kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bankAccounts.map((account, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center"
          >
            {/* Logo Bank (jika ada) */}
            {account.logoSrc && (
              <img
                src={account.logoSrc}
                alt={`${account.bankName} Logo`}
                className="h-12 mr-6"
              />
            )}

            {/* Teks Rekening */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {account.bankName}
              </h3>
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-1">
                {account.accountNumber}
              </p>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                {account.accountHolder}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
