function FeatureCard({ imgSrc, imgAlt, title, description }: { imgSrc: string; imgAlt: string; title: string; description: string }) {
  return (
    <article className="flex flex-col grow p-7 w-full bg-white rounded-xl shadow max-md:pl-5 max-md:mt-7 max-md:max-w-full">
      <img loading="lazy" src={imgSrc} alt={imgAlt} className="aspect-square w-[62px]" />
      <h2 className="mt-3.5 text-xl font-bold leading-8 text-cyan-700 max-md:max-w-full">{title}</h2>
      <p className="mt-4 text-sm leading-5 text-slate-950 text-opacity-30 max-md:max-w-full">{description}</p>
    </article>
  );
}

function ServicesDetailScreen() {
  const features = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1093ac82e9e1e2ee484602c424f5e6ad8ecdd11136b375e726dbac4c82369aad?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "Analytics and Forecasting Software Icon",
      title: "Softwares for analytics and forecasting",
      description:
        "We provide solutions that let you beat the competition and play at top of market. Our solution analyze vast amounts of data, uncover trends, and predict future outcomes with precision. Whether optimizing inventory, forecasting market demand, or making data-driven strategic decisions, our software delivers the insights you need.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/699100deeb0127a8007e9a68384ea19bf619df56cb872e5f0006b5b5d9542b1c?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "Digital Twins Icon",
      title: "Digital Twins",
      description:
        "We develop advanced digital twins that are precise virtual replicas of your physical assets, processes, and systems. Experience real-time monitoring of assets, identify potential faults, and make better-informed decisions about maintenance and lifecycle.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/878acf6c55971ecad61fd7a5a6feaadbbbfdf5f96902ddd1a603b299a32632f8?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "Product Comparison Icon",
      title: "Competitive product comparisons systems",
      description:
        "Our specialise in providing solutions that provide detailed analyses of competitor products with advanced teardown methodologies. Our system offers granular insights into features, performance, and pricing, branding, and marketing strategies enabling you to stay ahead of the market",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3dc2108a9a8b61516bd91dfa001567af51b868e97afda192054424cb79a0874b?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "CMMS Icon",
      title: "Computerized Machine Maintenance Software",
      description:
        "Streamline your maintenance operations with our intelligent Computerized Machine Maintenance Software (CMMS). Designed to enhance productivity and minimize downtime, our CMMS solution automates scheduling, tracks asset health, and manages work orders with ease.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec2dcbd496069a04d3728c6530a03f878e99d0285425964bd02b047650d0140a?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "Sensing and Data Transmission System Icon",
      title: "Sensing and Data Transmission System",
      description:
        "Stay ahead in a connected world with our state-of-the-art sensing and data transmission system. Designed for precision and reliability, our solutions provide seamless integration of sensor data into your digital infrastructure. Whether it's monitoring environmental conditions, tracking equipment health, or optimizing industrial processes, our technology ensures data accuracy and real-time communication.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/10222b311a370e9ada2c99d41cf4b31e6710d0521f6da59e7c15c6197c257d0e?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "Computer vision models Icon",
      title: "Computer vision models",
      description:
        "We provide cutting-edge computer vision solutions such as OCR, video analysis, object detection and tracking, automated quality assurance, and medical imaging technology to deliver accurate, real-time results and automation.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/70e98960a0c8f3cd8db90818df6a23c67cf148d643c350f406aefb5d6db2a239?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "Natural language processing Icon",
      title: "Natural language processing",
      description:
        "We leverage natural language processing techniques such as sentiment and emotion detection, chatbots and virtual assistants, spam detection, and content recommendation to drive engagement for social media and OTT platforms.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/44c3ffe358218cfa89946f8781f641b7d7004cc38ce952090ee11425c46d8bc1?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "Machine learning Icon",
      title: "Machine learning algorithm optimisation",
      description:
        "Achieve peak accuracy with our machine learning algorithm optimization services. We fine-tune your models for maximum precision through quality training of the models, ensuring you get the most out of your AI investments.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea1e3536f13e37630a1f3482452ad5a4ba930e5084690f6a071eae9e0674a0b?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "IT Consultation Icon",
      title: "IT Consultation",
      description:
        "Enhance your IT infrastructure with our expert consultation services. We provide tailored strategies to optimize your technology stack, ensuring maximum efficiency and security.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/12a80be3e0c3ebc5a6cc5e3dc8a013c7c417d4b84b5b9c31df1c19734ad91080?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "Maintenance Icon",
      title: "Maintenance",
      description:
        "Enhance your IT infrastructure with our expert consultation services. We provide tailored strategies to optimize your technology stack, ensuring maximum efficiency and security.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/67047ffb08ddb9da70e94565ae808d058614e04493a526e1b38d710ba689203a?apiKey=37e9b177900140c9be4212bdea99ec1b&",
      imgAlt: "Research and Development Icon",
      title: "Research and Development (R&D)",
      description:
        "Innovate with confidence through our dedicated R&D support. We collaborate with you to explore new technologies, develop cutting-edge solutions, and stay ahead in a competitive landscape.",
    },
  ];

  return (
    <div className="flex flex-col items-center pb-20 bg-white">
      <header className="self-stretch w-full bg-zinc-300 min-h-[75px] max-md:max-w-full" />
      <main className="flex overflow-hidden relative flex-col justify-center self-stretch w-full min-h-[648px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6e3a8be15b1950eaec1c683982c67890d0e744ded2a13395f5a922386434f19?apiKey=37e9b177900140c9be4212bdea99ec1b&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <section className="flex relative flex-col justify-center items-start px-16 py-20 w-full bg-neutral-400 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-16 mb-16 ml-20 max-w-full w-[824px] max-md:my-10">
            <h1 className="text-6xl font-extrabold tracking-wide text-white border border-red-400 border-solid leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
              Automating your workflow for improved accuracy and greater efficiency
            </h1>
            <button className="justify-center self-start px-8 py-4 mt-12 text-xl font-bold leading-8 text-center text-white bg-teal-400 rounded-xl shadow-sm max-md:px-5 max-md:mt-10">
              Let’s connect
            </button>
          </div>
        </section>
      </main>
      <section className="mt-24 w-full max-w-[1081px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <FeatureCard
            imgSrc={features[0].imgSrc}
            imgAlt={features[0].imgAlt}
            title={features[0].title}
            description={features[0].description}
          />
          <FeatureCard
            imgSrc={features[1].imgSrc}
            imgAlt={features[1].imgAlt}
            title={features[1].title}
            description={features[1].description}
          />
        </div>
      </section>
      <section className="mt-10 w-full max-w-[1081px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <FeatureCard
            imgSrc={features[2].imgSrc}
            imgAlt={features[2].imgAlt}
            title={features[2].title}
            description={features[2].description}
          />
          <FeatureCard
            imgSrc={features[3].imgSrc}
            imgAlt={features[3].imgAlt}
            title={features[3].title}
            description={features[3].description}
          />
        </div>
      </section>
      <FeatureCard
        imgSrc={features[4].imgSrc}
        imgAlt={features[4].imgAlt}
        title={features[4].title}
        description={features[4].description}
      />
      <section className="mt-10 w-full max-w-[1081px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <FeatureCard
            imgSrc={features[5].imgSrc}
            imgAlt={features[5].imgAlt}
            title={features[5].title}
            description={features[5].description}
          />
          <FeatureCard
            imgSrc={features[6].imgSrc}
            imgAlt={features[6].imgAlt}
            title={features[6].title}
            description={features[6].description}
          />
        </div>
      </section>
      <FeatureCard
        imgSrc={features[7].imgSrc}
        imgAlt={features[7].imgAlt}
        title={features[7].title}
        description={features[7].description}
      />
      <section className="mt-20 w-full max-w-[1081px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <FeatureCard
            imgSrc={features[8].imgSrc}
            imgAlt={features[8].imgAlt}
            title={features[8].title}
            description={features[8].description}
          />
          <FeatureCard
            imgSrc={features[9].imgSrc}
            imgAlt={features[9].imgAlt}
            title={features[9].title}
            description={features[9].description}
          />
        </div>
      </section>
      <FeatureCard
        imgSrc={features[10].imgSrc}
        imgAlt={features[10].imgAlt}
        title={features[10].title}
        description={features[10].description}
      />
      <section className="flex justify-center items-center self-stretch px-16 py-20 mt-72 w-full text-center bg-neutral-900 bg-opacity-30 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col mt-24 mb-7 w-full max-w-[1203px] max-md:mt-10 max-md:max-w-full">
          <h2 className="text-6xl font-extrabold tracking-wide text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
            Partner with Us to Build a Seamless Future Together
          </h2>
          <button className="justify-center self-center px-8 py-4 mt-8 text-xl font-bold leading-8 text-white bg-teal-400 rounded-xl max-md:px-5">
            Let’s connect
          </button>
        </div>
      </section>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dd10cee284f1fea8d4a05b6283a785b6e2e53621dc06564d040583024a3f41c?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="self-stretch mt-60 w-full aspect-[2.63] max-md:mt-10 max-md:max-w-full" />
    </div>
  );
}

export default ServicesDetailScreen;
