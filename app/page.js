export const metadata = {
  title: "E-commerce Red Hat",
  description: "e-commerce de indumentaria",
  keywords: ["e-commerce", "indumentaria", "ropa", "moda"],
};

export default function Home() {
  return (
    <>
      <main className="container m-auto">
        <h1 className="text-4xl text-red-600 my-4">Bienvenidos a Red Hat</h1>
        <hr />
        <p className="text-base mt-4">
          Estamos emocionados de tenerte aquí. En nuestra tienda, encontrarás
          una amplia variedad de indumentaria que se adapta a todos los estilos
          y ocasiones. Ya seas un amante de la moda, busques comodidad o
          simplemente quieras renovar tu guardarropa, tenemos algo perfecto para
          ti. Explora nuestras colecciones y déjate inspirar por nuestras
          últimas tendencias. ¡Gracias por elegirnos! Tu estilo comienza aquí.
        </p>
      </main>
    </>
  );
}
