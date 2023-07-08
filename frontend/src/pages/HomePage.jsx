const HomePage = () => {
  const articles = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <main className="w-1280px flex justify-center p-4 bg-orange-200">
      <div className="w-full  grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => {
          return (
            <article
              key={index}
              className="grid h-[250px] bg-slate-300 place-content-center uppercase rounded-[5px]"
            >
              <h1>article {article}</h1>
            </article>
          );
        })}
      </div>
    </main>
  );
};
export default HomePage;
