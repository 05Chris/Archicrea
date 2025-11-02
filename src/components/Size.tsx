export const Size = () => {
  return (
    <>
      <div className="absolute top-0 left-0 text-2xl z-50">
        <div className="md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block 3xl:hidden">2xl</div>
        <div className="hidden 3xl:block">3xl</div>
      </div>
    </>
  );
};