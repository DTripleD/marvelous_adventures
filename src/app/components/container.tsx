type Props = {
  children: React.ReactElement;
};

const Container = ({ children }: Props) => {
  return (
    <section>
      <div id="container" className="px-8 w-[1440px] mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Container;
