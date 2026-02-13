import { Feature } from "@/types/feature";

const SingleFeature = ({ feature, index = 0 }: { feature: Feature; index?: number }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="group rounded-xl border border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-feature-2 dark:bg-gray-dark dark:shadow-none dark:hover:border-primary/30">
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
