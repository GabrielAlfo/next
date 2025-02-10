"use client";
import Boton from "@/components/ui/Boton";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl text-blue-600 my-4">Página no encontrada</h1>
        <hr />
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Página no encontrada</p>

        <Boton onClick={() => router.back()}>Volver</Boton>
      </main>
    </>
  );
}
