const bankAccounts = [
  {
    bankName: "BCA",
    accountNumber: "123-456-7890",
    accountHolder: "Panti Asuhan Doa Bunda",
    logoSrc: "/assets/logo/bca-logo.png", // Ganti dengan path logo BCA yang benar
  },
  {
    bankName: "Mandiri",
    accountNumber: "098-765-4321",
    accountHolder: "Panti Asuhan Doa Bunda",
    logoSrc: "/assets/logo/mandiri-logo.png", // Ganti dengan path logo Mandiri yang benar
  },
  {
    bankName: "BNI",
    accountNumber: "112-233-4455",
    accountHolder: "Panti Asuhan Doa Bunda",
    logoSrc: "/assets/logo/bni-logo.png", // Ganti dengan path logo BNI yang benar
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bankAccounts.map((account, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            {/* Logo Bank (jika ada) */}
            {account.logoSrc && (
              <img
                src={account.logoSrc}
                alt={`${account.bankName} Logo`}
                className="h-12 mb-4"
              />
            )}

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {account.bankName}
            </h3>
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mt-2">
              {account.accountNumber}
            </p>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              a.n. {account.accountHolder}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
        <p className="text-sm italic">
          Mohon konfirmasi setelah melakukan transfer.
        </p>
      </div>
    </div>
  );
}
