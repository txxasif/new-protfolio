export const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-[#000] text-xl leading-8 font-bold tracking-widest">{`// ${title}`}</h1>
  );
};
