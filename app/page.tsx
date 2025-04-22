'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  MessageSquare,
  Shield,
  Zap,
  Star,
  Sparkles,
  Rocket,
  Gift
} from "lucide-react";

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Topluluklar",
    description: "Güçlü moderasyon araçlarıyla topluluğunuzu oluşturun",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Zengin Mesajlaşma",
    description: "Multimedya mesajları ve özel emojilerle iletişim kurun",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Güvenlik",
    description: "Uçtan uca şifreleme ile güvenli iletişim",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performans",
    description: "Yıldırım hızında iletişim deneyimi",
  },
];

// Güncellemeleri ayrı bir dosyada tutmak yerine burada tanımlıyoruz
const updates = [
  {
    date: "15 Nisan 2024",
    version: "v0.8.0",
    title: "Yeni Özellikler",
    highlights: [
      {
        icon: <Star className="h-5 w-5" />,
        text: "Sesli sohbet odaları eklendi"
      },
      {
        icon: <Sparkles className="h-5 w-5" />,
        text: "Özel emoji desteği"
      },
      {
        icon: <Shield className="h-5 w-5" />,
        text: "Gelişmiş güvenlik önlemleri"
      }
    ]
  },
  {
    date: "1 Nisan 2024",
    version: "v0.7.0",
    title: "Platform İyileştirmeleri",
    highlights: [
      {
        icon: <Rocket className="h-5 w-5" />,
        text: "Performans optimizasyonları"
      },
      {
        icon: <Gift className="h-5 w-5" />,
        text: "Yeni tema seçenekleri"
      }
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              İletişimin Geleceği
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Toplulukların Buluşma Noktası
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Yeni nesil iletişim platformu ile tanışın. Güvenli ve yenilikçi bir ortamda
              bağlantı kurun, paylaşın ve büyüyün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Ücretsiz Başla
              </Button>
              <Button size="lg" variant="outline">
                Nasıl Çalışır?
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tüm İhtiyaçlarınız İçin Tek Platform
            </h2>
            <p className="text-gray-400">
              Modern iletişim için tasarlanmış özellikler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-hover bg-secondary">
                  <div className="mb-4 text-purple-500">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-20" id="updates">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Son Güncellemeler</h2>
            <p className="text-gray-400">Platformumuzu sürekli geliştiriyoruz</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {updates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-secondary/50 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {update.version}
                    </Badge>
                    <h3 className="text-xl font-semibold">{update.title}</h3>
                  </div>
                  <span className="text-sm text-gray-400">{update.date}</span>
                </div>
                <ul className="space-y-3">
                  {update.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-purple-500">{highlight.icon}</span>
                      <span className="text-gray-300">{highlight.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Topluluğunuzu Büyütmeye Hazır mısınız?
            </h2>
            <p className="text-gray-400 mb-8">
              Tamamen ücretsiz olarak binlerce topluluğa katılın ve birlikte büyüyün.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Hemen Katılın
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}