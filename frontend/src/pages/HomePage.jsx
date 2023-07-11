const HomePage = () => {
  const articles = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <main className=" mx-auto grid gap-4 p-4 max-xl:w-11/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-[1280px] bg-teal-300">
      {articles.map((article, index) => {
        return (
          <article
            key={index}
            className="grid w-full h-[200px] bg-slate-500 place-content-center uppercase rounded-[5px]"
          >
            <h1>article {article}</h1>
          </article>
        );
      })}
    </main>
  );
};
export default HomePage;
