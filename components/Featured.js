import Image from 'next/image';
import Link from 'next/link';

export default function Featured() {
  return (
    <div className="px-4 md:px-8 py-8">
      <div className="relative w-full max-w-7xl h-96 rounded-xl bg-featured bg-no-repeat bg-cover bg-center mx-auto">
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl">
          <div className="flex justify-center items-center h-full">
            <div className="text-center space-y-4">
              <h2 className="text-white text-4xl">
                Supabase Hacktoberfest Hackaton
              </h2>
              <p className="text-white font-bold text-xl max-w-lg">
                The $1 million Gold Supabase Logo Hackathon Prize Tee. To own
                it, you have to earn it.
              </p>
              <Link href="https://supabase.io/blog/2021/09/28/supabase-hacktoberfest-hackathon-2021">
                <a className="inline-block bg-green-500 hover:bg-gradient-to-r from-green-500 to-yellow-300 border border-green-500 rounded-md py-3 px-8 font-medium text-white">
                  Find out how
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
