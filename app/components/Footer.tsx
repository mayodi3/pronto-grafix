import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pronto Grafix</h3>
            <p>
              Your one-stop solution for high-quality fabric branding and
              promotional items.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <span>
                  Mbale Town, Kisumu - Kakamega Highway, Maragoli, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <span>+254 768 050 296</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <span>prontographicdesigns@gmail.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/ProntoGrafix/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook icon"
                  width={15}
                  height={15}
                  className="w-7 h-7"
                />
              </Link>
              <Link
                href="https://www.instagram.com/explore/locations/100274788169618/pronto-grafix/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram icon"
                  width={15}
                  height={15}
                  className="w-7 h-7"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2023 Pronto Grafix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
