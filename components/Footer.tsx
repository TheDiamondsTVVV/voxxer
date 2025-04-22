import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Voxxer</h3>
            <p className="text-gray-400 mb-4">
              Yeni nesil topluluk iletişim platformu.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ürün</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Özellikler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Fiyatlandırma
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Güvenlik
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Yol Haritası
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kaynaklar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Dokümantasyon
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Rehberler
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Destek
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Voxxer. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                Kullanım Koşulları
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}