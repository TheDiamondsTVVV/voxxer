import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-2xl mb-4">Sayfa Bulunamadı</h2>
        <p className="text-gray-400 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link 
          href="/"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}