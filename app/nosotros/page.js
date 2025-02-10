"use client";
import Boton from "@/components/ui/Boton";
import { useRouter } from "next/navigation";

export default function Nosotros() {
  const router = useRouter();

  return (
    <>
      <main className="container m-auto">
        <h1 className="text-4xl text-red-600 my-4">Nosotros</h1>
        <hr />
        <p className="text-base mt-4">
          Bienvenidos a nuestra tienda de indumentaria. Nos especializamos en
          ofrecer ropa de alta calidad y a la moda para todas las edades y
          géneros. Nuestro compromiso es brindar a nuestros clientes productos
          únicos y de excelente confección.
        </p>
        <p className="text-base mt-4">
          Desde nuestros inicios, hemos trabajado con los mejores diseñadores y
          fabricantes para asegurarnos de que cada prenda cumpla con los más
          altos estándares de calidad. Nos enorgullece ofrecer una amplia
          variedad de estilos, desde lo clásico hasta lo más vanguardista.
        </p>
        <p className="text-base mt-4">
          Nuestro equipo está siempre disponible para ayudarte a encontrar la
          prenda perfecta y para ofrecerte una experiencia de compra
          inigualable. Gracias por elegirnos y esperamos verte pronto en nuestra
          tienda.
        </p>
        <Boton onClick={() => router.back()}>Volver</Boton>
      </main>
    </>
  );
}
