import Link from "next/link";
import { CircleUser, Leaf, PiggyBank, Search, ShieldCheck, Signpost } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center overflow-x-hidden bg-white sm:items-start">
      <nav className="bg-[#F8F9FF] h-[64px] z-100 w-full p-4 px-6 flex items-center justify-between" style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
        <div className="flex items-center gap-[24px]">
          <Link href="/" className="text-[#0B1C30] text-[28px] font-bold ml-[8px]">
            Compartilo
          </Link>
        </div>
        <div className="flex items-center gap-[24px]">
          <Link href="/rides" className="ml-4 text-[#434655] text-[14px] font-semibold">
            Encontrar viajes
          </Link>

          <Link href="/rides/create" className="ml-4 text-[#434655] text-[14px] font-semibold">
            Publicar viaje
          </Link>

          <Link href="/rides/create" className="text-[#434655] text-[14px] font-semibold">
            <CircleUser size={24} />
          </Link>
        </div>
      </nav>

      <section className="h-[calc(100vh-64px)] w-full max-w-screen relative flex items-center justify-center overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1216862555?background=1&autoplay=1&loop=1&muted=1"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Compartilo hero video"
        />

        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-white/80 to-transparent" />

        <div className="z-10 flex flex-col items-start justify-center max-w-[50%] p-8 mr-auto gap-[16px] px-12">
          <h1 className="text-[36px] leading-[44px] text-[#0B1C30] tracking-[-0.72px] font-bold">Viaja seguro, comparte el camino</h1>
          <p className="text-[16px] leading-[28px] text-[#434655]">
            Únete a la comunidad de carpooling más confiable.
            Encuentra viajes económicos o comparte los gastos de tu
            próximo destino.
          </p>

          <Card className="w-full shadow-xs border-0 grid grid-cols-4 gap-4 p-4">
            <div className="relative col-span-2">
              <Input
                className="pr-10 h-12 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Ingrese origen"
                type="text"
              />
              <Signpost className="absolute right-3 top-1/2 -translate-y-1/2 size-4" />
            </div>
            <div className="relative col-span-2">
              <Input
                className="pr-10 h-12 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Ingrese destino"
                type="text"
              />
              <Signpost className="absolute right-3 top-1/2 -translate-y-1/2 size-4" />
            </div>
            <Input
              className="text-gray-500 h-12 col-span-3 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Ingrese fecha"
              type="date"
            />
            <Button className="h-12 bg-[#0B1C30] col-span-1 flex items-center justify-center gap-2">
              <Search className="size-4" />
              Buscar
            </Button>
          </Card>
        </div>
      </section>

      <section className="w-full max-w-screen flex flex-col items-center justify-center gap-[24px] px-10 py-[100px]">
        <div className="flex flex-col items-center justify-center gap-4 text-center w-[50%]">
          <h2 className="text-[28px] leading-[34px] text-[#0B1C30] font-bold">¿Por qué elegir Compartilo?</h2>
          <p className="text-[#434655] text-[16px] leading-[24px]">Nuestra plataforma está diseñada para ofrecerte la mejor experiencia de viaje
            compartido, priorizando tu seguridad y comodidad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full max-w-screen">
          <Card className="p-8 flex flex-col items-start justify-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6CF8BB]">
              <ShieldCheck className="text-[#00714D] size-6" />
            </div>

            <h4 className="text-[#0B1C30] text-[20px] leading-[28px] font-semibold">Confianza garantizada</h4>

            <p className="text-[#434655] text-[16px] leading-[24px]">Perfiles verificados y sistema de
              reseñas para que sepas exactamente
              con quién viajas.</p>
          </Card>
          <Card className="p-8 flex flex-col items-start justify-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2563EB]">
              <PiggyBank className="text-[#EEEFFF] size-6" />
            </div>

            <h4 className="text-[#0B1C30] text-[20px] leading-[28px] font-semibold">Ahorra dinero</h4>

            <p className="text-[#434655] text-[16px] leading-[24px]">Divide los gastos de gasolina y peajes.
              Viajar nunca fue tan económico y
              conveniente.</p>
          </Card>
          <Card className="p-8 flex flex-col items-start justify-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E1E0FF]">
              <Leaf className="text-[#07006C] size-6" />
            </div>

            <h4 className="text-[#0B1C30] text-[20px] leading-[28px] font-semibold">Sostenibilidad</h4>

            <p className="text-[#434655] text-[16px] leading-[24px]">Reduce tu huella de carbono
              compartiendo asientos vacíos. Un auto
              menos en la ruta hace la diferencia.</p>
          </Card>
        </div>
      </section>

      <footer className="w-full p-6 px-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t">
        <div className="flex flex-col gap-4">
          <h6 className="text-[#0B1C30] text-[20px] leading-[28px] font-semibold">Compartilo</h6>
          <p>© 2024 Compartilo. Ride-sharing for the community.</p>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8">
            <li>
              <Link href="/" className="text-[#434655] text-[12px] font-semibold underline">
                Términos de servicio
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#434655] text-[12px] font-semibold underline">
                Políticas de privacidad
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#434655] text-[12px] font-semibold underline">
                Centro de ayuda
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

