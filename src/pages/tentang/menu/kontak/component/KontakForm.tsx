export function ContactForm() {
  return (
    // Membungkus seluruh form di dalam div dengan styling card
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        {/* Judul dan deskripsi form */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Jika ada pertanyaan atau masukan, silakan isi form di bawah ini.
          </p>
        </div>

        {/* Form utama */}
        <form action="#" method="POST" className="mx-auto">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Kolom Nama */}
            <div>
              <label
                htmlFor="full-name"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
              >
                Nama Lengkap
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700"
                />
              </div>
            </div>

            {/* Kolom Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700"
                />
              </div>
            </div>

            {/* Kolom Pesan/Masukan */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
              >
                Pesan atau Masukan
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>

          {/* Tombol kirim */}
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
