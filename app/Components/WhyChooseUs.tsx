import { WhyChooseUsSectionInterface } from "../interface/interface";

function WhyChooseUs({ props }: { props: WhyChooseUsSectionInterface }) {
  const { title, subtitle, description, points, closingStatement, layout = "paragraph" } = props;

  return (
    <section className="py-20 px-6 bg-[#F3F3F3] rounded-[15px] md:rounded-[20px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 lg:max-w-[80%] text-center mx-auto">
            {title}
          </h2>
          {subtitle && <p className="text-lg md:text-2xl text-gray-700 font-medium">{subtitle}</p>}
        </div>

        <div className="max-w-4xl mx-auto">
          {layout === "paragraph" ? (
            <div className="space-y-6">
              {Array.isArray(description) ? (
                description.map((paragraph, index) => (
                  <p key={index} className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{description}</p>
              )}
              {closingStatement && (
                <p className="text-base lg:text-lg text-gray-900 font-semibold mt-8">{closingStatement}</p>
              )}
            </div>
          ) : (
            <div>
              {description && (
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-12">
                  {typeof description === "string" ? description : description[0]}
                </p>
              )}

              <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
                {points?.map((point, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 lg:p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-lime-200 transition-all duration-300">
                    <div className="flex gap-4">
                      {/* Accent Dot */}
                      <div className="flex-shrink-0 w-2 h-2 bg-lime-400 rounded-full mt-2"></div>

                      <div className="flex-1">
                        {point.title.length > 0 && (
                          <h3 className="text-lg lg:text-xl font-bold mb-2 text-gray-900">{point.title}</h3>
                        )}
                        {point.description.length > 0 && (
                          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{point.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {closingStatement && (
                <p className="text-lg text-gray-900 font-semibold mt-12 text-center">{closingStatement}</p>
              )}
            </div>
          )}
        </div>

        {/* Decorative Element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-lime-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
