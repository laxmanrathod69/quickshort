import { FEATURES } from "@/constants";
import { Card } from "../ui/card";

const Features = () => {
  return (
    <section id="features" className="pt-8 pb-16">
      <h2 className="text-3xl font-semi-bold text-center">Features</h2>
      <div className="flex justify-center gap-5 mt-6">
        {FEATURES.map((feature) => (
          <Card
            key={feature.title}
            className="p-5 w-1/4 flex flex-col items-center py-9 text-center gap-2 border-none shadow-lg"
          >
            {feature.icon}
            <h3 className="font-bold text-lg text-black mt-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
