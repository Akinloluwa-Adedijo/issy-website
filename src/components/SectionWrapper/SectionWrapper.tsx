import React from "react";

type SectionWrapperProps = {
  title: string;
  children: React.ReactNode;
};
const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <main className="pt-20">
      <section className="flex flex-col gap-10 p-5">
        <h2 className="text-4xl sm:text-[10vw] uppercase">{title}</h2>
        {children}
      </section>
    </main>
  );
};

export default SectionWrapper;
