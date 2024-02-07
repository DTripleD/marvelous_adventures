type Props = {
  children: React.ReactElement;
};

const Container = ({ children }: Props) => {
  return (
    <section>
      <div
        id="container"
        className="px-5 md:px-8 w-[375px] md:w-[768px] lg:w-[1440px] mx-auto"
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
