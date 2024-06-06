import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Facebook, Instagram, Twitter } from 'lucide-react';

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    const yOffset = -75;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    console.log(y);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}


const features = [
  {
    imgSrc: "/analytics-illustration.svg",
    imgAlt: "Analytics and Forecasting Software Icon",
    title: "Softwares for analytics and forecasting",
    description:
      "We provide solutions that let you beat the competition and play at top of market. Our solution analyze vast amounts of data, uncover trends, and predict future outcomes with precision. Whether optimizing inventory, forecasting market demand, or making data-driven strategic decisions, our software delivers the insights you need.",
  },
  {
    imgSrc: "/digital-twins-illustration.svg",
    imgAlt: "Digital Twins Icon",
    title: "Digital Twins",
    description:
      "We develop advanced digital twins that are precise virtual replicas of your physical assets, processes, and systems. Experience real-time monitoring of assets, identify potential faults, and make better-informed decisions about maintenance and lifecycle.",
  },
  {
    imgSrc: "/product-comparison-illustration.svg",
    imgAlt: "Product Comparison Icon",
    title: "Competitive product comparisons systems",
    description:
      "Our specialise in providing solutions that provide detailed analyses of competitor products with advanced teardown methodologies. Our system offers granular insights into features, performance, and pricing, branding, and marketing strategies enabling you to stay ahead of the market",
  },
  {
    imgSrc: "/cmms-illustration.svg",
    imgAlt: "CMMS Icon",
    title: "Computerized Machine Maintenance Software",
    description:
      "Streamline your maintenance operations with our intelligent Computerized Machine Maintenance Software (CMMS). Designed to enhance productivity and minimize downtime, our CMMS solution automates scheduling, tracks asset health, and manages work orders with ease.",
  },
  {
    imgSrc: "/data-transmission-illustration.svg",
    imgAlt: "Sensing and Data Transmission System Icon",
    title: "Sensing and Data Transmission System",
    description:
      "Stay ahead in a connected world with our state-of-the-art sensing and data transmission system. Designed for precision and reliability, our solutions provide seamless integration of sensor data into your digital infrastructure. Whether it's monitoring environmental conditions, tracking equipment health, or optimizing industrial processes, our technology ensures data accuracy and real-time communication.",
  },
  {
    imgSrc: "/cv-illustration.svg",
    imgAlt: "Computer vision models Icon",
    title: "Computer vision models",
    description:
      "We provide cutting-edge computer vision solutions such as OCR, video analysis, object detection and tracking, automated quality assurance, and medical imaging technology to deliver accurate, real-time results and automation.",
  },
  {
    imgSrc: "/nlp-illustration.svg",
    imgAlt: "Natural language processing Icon",
    title: "Natural language processing",
    description:
      "We leverage natural language processing techniques such as sentiment and emotion detection, chatbots and virtual assistants, spam detection, and content recommendation to drive engagement for social media and OTT platforms.",
  },
  {
    imgSrc: "/ml-optimization-illustration.svg",
    imgAlt: "Machine learning Icon",
    title: "Machine learning algorithm optimisation",
    description:
      "Achieve peak accuracy with our machine learning algorithm optimization services. We fine-tune your models for maximum precision through quality training of the models, ensuring you get the most out of your AI investments.",
  },
  {
    imgSrc: "/it-consultation-illustration.svg",
    imgAlt: "IT Consultation Icon",
    title: "IT Consultation",
    description:
      "Enhance your IT infrastructure with our expert consultation services. We provide tailored strategies to optimize your technology stack, ensuring maximum efficiency and security.",
  },
  {
    imgSrc: "/maintainance-illustration.svg",
    imgAlt: "Maintenance Icon",
    title: "Maintenance",
    description:
      "Enhance your IT infrastructure with our expert consultation services. We provide tailored strategies to optimize your technology stack, ensuring maximum efficiency and security.",
  },
  {
    imgSrc: "/r&d-illustration.svg",
    imgAlt: "Research and Development Icon",
    title: "Research and Development (R&D)",
    description:
      "Innovate with confidence through our dedicated R&D support. We collaborate with you to explore new technologies, develop cutting-edge solutions, and stay ahead in a competitive landscape.",
  },
];

const Header = () => (
  <header className="bg-white w-full sticky top-0 z-20 shadow">
    <div className="flex items-center justify-between gap-5 max-w-6xl w-full mx-auto h-[75px] px-2">
      <Link to='/' className="flex items-center gap-2.5" onClick={() => scrollToSection('header-section')}>
        <img
          src="/logo.png"
          alt="Spect-AI logo"
          className="h-[43px] w-[51px]"
        />
        <div className="text-3xl font-semibold text-jelly-bean leading-10">Spect-AI</div>
      </Link>
      <div className="flex gap-8">
        <nav className="flex gap-5 my-auto">
          <Link to='/' className='hover:text-jelly-bean'
            onClick={() => scrollToSection('services-section')}
          >Services</Link>
          <Link to='/' className='hover:text-jelly-bean'
            onClick={() => scrollToSection('portfolio-section')}
          >Portfolio</Link>
          <Link to='/' className='hover:text-jelly-bean'
            onClick={() => scrollToSection('our-approach-section')}
          >How we work</Link>
          <Link to='/' className='hover:text-jelly-bean'
            onClick={() => scrollToSection('about-section')}
          >About us</Link>
        </nav>
        <Button
          variant='outline'
          size='lg'
          className='text-red-400 border-red-400 rounded-lg font-bold text-base hover:bg-red-400 hover:text-white'
          onClick={() => scrollToSection('about-section')}
        >
          Contact us
        </Button>
      </div>
    </div>
  </header>
);

const CallToAction = () => (
  <section className="bg-puerto-rico w-full">
    <div className='flex flex-col items-center gap-1 px-2 max-w-6xl w-full pt-12 mx-auto'>
      <h3 className="text-xl font-semibold leading-8 text-white uppercase">
        Our AI solutions excel at
      </h3>
      <h1 className="text-5xl font-extrabold text-center text-white leading-[60px]">
        Automating your workflow for improved accuracy and greater efficiency
      </h1>
      <div className="mt-6">
        <Button
          variant='outline'
          size='lg'
          className='text-black rounded-lg font-bold text-base hover:bg-red-400 hover:text-white'
          onClick={() => scrollToSection('about-section')}
        >
          Contact us
        </Button>
      </div>
      <div className="relative h-80 w-full py-16">
        <video className="absolute z-10 object-cover w-full max-w-6xl h-[413px] rounded-[20px]" autoPlay loop muted playsInline>
          <source src="/call-to-action.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
);

const ColorDot = ({ className }: { className: string }) => (
  <div className={cn('h-[17px] w-[17px] rounded-full', className)}></div>
);

function FeatureCard({ imgSrc, imgAlt, title, description }: { imgSrc: string; imgAlt: string; title: string; description: string }) {
  return (
    <article className="flex flex-col p-7 rounded-xl shadow bg-white w-[calc(50%_-_16px)]">
      <img loading="lazy" src={imgSrc} alt={imgAlt} className="aspect-square w-[62px]" />
      <h2 className="mt-3.5 text-xl font-bold leading-8 text-cyan-700">{title}</h2>
      <p className="mt-4 text-sm leading-5 text-slate-950 text-opacity-30">{description}</p>
    </article>
  );
}

const Specializations = () => (
  <section className="max-w-6xl w-full mx-auto px-2 mt-44 pt-12" id='services-section'>
    <div className="flex gap-5">
      <div className="flex flex-col gap-3 mt-3 w-max">
        <ColorDot className="bg-[#DF6C4F]" />
        <ColorDot className="bg-[#49C5B6]" />
        <ColorDot className="bg-[#2779A7]" />
      </div>
      <div className="grid gap-5 w-full max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold tracking-wide text-jelly-bean text-center">Our specializations</h2>
        <p className="text-sm text-center text-slate-950 text-opacity-30">
          We provide a comprehensive suite of services designed to meet your technical needs. Our expertise spans
          process automation, delivering efficiency and precision to your workflows. We specialize in custom software
          development, creating tailored solutions to address your unique business challenges. Additionally, our IT
          consultation services offer strategic insights and guidance to optimize your technology infrastructure and
          drive innovation.
        </p>
      </div>
    </div>
    <Tabs defaultValue="custom-softwares" className='py-6'>
      <TabsList className="grid grid-cols-3 bg-white w-max mx-auto">
        <TabsTrigger value="machine-learning"
          className='data-[state=active]:text-jelly-bean data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:rounded-none data-[state=active]:border-b-[3px] data-[state=active]:border-jelly-bean text-black text-opacity-30 border-b-2 border-black border-opacity-30 rounded-none shadow-none font-bold text-base'
        >Machine Learning</TabsTrigger>
        <TabsTrigger value="custom-softwares"
          className='data-[state=active]:text-jelly-bean data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:rounded-none data-[state=active]:border-b-[3px] data-[state=active]:border-jelly-bean text-black text-opacity-30 border-b-2 border-black border-opacity-30 rounded-none shadow-none font-bold text-base'
        >Custom Softwares</TabsTrigger>
        <TabsTrigger value="consultation-support"
          className='data-[state=active]:text-jelly-bean data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:rounded-none data-[state=active]:border-b-[3px] data-[state=active]:border-jelly-bean text-black text-opacity-30 border-b-2 border-black border-opacity-30 rounded-none shadow-none font-bold text-base'
        >Consultation & Support</TabsTrigger>
      </TabsList>
      <div className='py-4 pt-12'>
        <TabsContent value="machine-learning" className='flex flex-row flex-wrap justify-center gap-8 mt-0'>
          {
            features.slice(5, 8).map((feature, index) => (
              <FeatureCard
                key={index}
                imgSrc={feature.imgSrc}
                imgAlt={feature.imgAlt}
                title={feature.title}
                description={feature.description}
              />
            ))
          }
        </TabsContent>
        <TabsContent value="custom-softwares" className='flex flex-row flex-wrap justify-center gap-8 mt-0'>
          {
            features.slice(0, 5).map((feature, index) => (
              <FeatureCard
                key={index}
                imgSrc={feature.imgSrc}
                imgAlt={feature.imgAlt}
                title={feature.title}
                description={feature.description}
              />
            ))
          }
        </TabsContent>
        <TabsContent value="consultation-support" className='flex flex-row flex-wrap justify-center gap-8 mt-0'>
          {
            features.slice(8).map((feature, index) => (
              <FeatureCard
                key={index}
                imgSrc={feature.imgSrc}
                imgAlt={feature.imgAlt}
                title={feature.title}
                description={feature.description}
              />
            ))
          }
        </TabsContent>
      </div>
    </Tabs>
  </section>
);

const PortfolioItem = ({ imgSrc, title, description, tags }: { imgSrc: string, title: string, description: string, tags: { label: string, className: string }[] }) => (
  <Card className='rounded-xl w-[calc(50%_-_8px)]'>
    <CardHeader className='p-3'>
      <img loading="lazy" src={imgSrc} alt="portfolio item" />
    </CardHeader>
    <CardContent className='grid gap-2 p-3'>
      <h2 className="text-3xl font-semibold text-jelly-bean">{title}</h2>
      <p className="text-sm text-black text-opacity-30">{description}</p>
      <div className="flex gap-2 mt-1">
        {tags.map(tag => (
          <Badge key={tag.label} className={cn('rounded font-normal text-sm', tag.className)}>
            {tag.label}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className='p-3 py-2 mb-4'>
      <Button
        size='lg'
        className='rounded-lg font-semibold text-base bg-puerto-rico'
      >
        Read complete solution
      </Button>
    </CardFooter>
  </Card>
);

const Portfolio = () => (
  <section className="px-2 py-16 w-full bg-[#FBFBFD]" id='portfolio-section'>
    <div className="flex flex-col gap-14 w-full max-w-6xl mx-auto">
      <h2 className="text-center text-5xl font-extrabold tracking-wide text-jelly-bean">
        See our portfolio
      </h2>
      <div className="flex gap-4 w-full">
        <PortfolioItem
          imgSrc="/bidding-assistant.png"
          title="Bidding assistant"
          description="Smart AI assistant helping contractors in preparing winning bids"
          tags={[
            { label: 'Construction', className: 'bg-terra-cotta' },
            { label: 'Development', className: 'bg-puerto-rico' }
          ]}
        />
        <PortfolioItem
          imgSrc="/headgear.png"
          title="HeadGear"
          description="A wearable helmet all set to transform the sports, and medical industry"
          tags={[
            { label: 'Sports', className: 'bg-terra-cotta' },
            { label: 'Medical', className: 'bg-puerto-rico' },
            { label: 'Gaming', className: 'bg-jelly-bean' }
          ]}
        />
      </div>
    </div>
  </section>
);

const ContactItem = ({ title, email, phone }: { title: string, email: string, phone: string }) => (
  <div className="grid gap-2 w-full">
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <p>{email}</p>
    <p>{phone}</p>
  </div>
);

const AccordionSection = () => (
  <Accordion type="single" collapsible className="grid gap-4" defaultValue='item-1'>
    <AccordionItem value="item-1" className='rounded-xl bg-white px-4 text-xl border-b-0 text-jelly-bean'>
      <AccordionTrigger className='text-xl font-bold py-2'>
        <span className='flex items-center justify-center w-8 h-8 border-jelly-bean border-[3px] rounded-full'>
          1
        </span>
        Strategic Vision
      </AccordionTrigger>
      <AccordionContent className='border-t-2 border-jelly-bean text-center py-4 text-black text-opacity-30'>
        We dive deep through preliminary meetings to understand your challenges and goals, crafting a future-proof technology roadmap that guides your business forward.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className='rounded-xl bg-white px-4 text-xl border-b-0 text-jelly-bean'>
      <AccordionTrigger className='text-xl font-bold py-2'>
        <span className='flex items-center justify-center w-8 h-8 text-jelly-bean border-jelly-bean border-[3px] rounded-full'>
          2
        </span>
        Immediate Impact
      </AccordionTrigger>
      <AccordionContent className='border-t-2 border-jelly-bean text-center py-4 text-black text-opacity-30'>
        We kick off with simple, effective use cases, delivering quick wins and immediate results to jumpstart your transformation journey.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" className='rounded-xl bg-white px-4 text-xl border-b-0 text-jelly-bean'>
      <AccordionTrigger className='text-xl font-bold py-2'>
        <span className='flex items-center justify-center w-8 h-8 text-jelly-bean border-jelly-bean border-[3px] rounded-full'>
          3
        </span>
        Rapid Value Creation
      </AccordionTrigger>
      <AccordionContent className='border-t-2 border-jelly-bean text-center py-4 text-black text-opacity-30'>
        We develop and test MVPs, gather feedback, and implement enhancements to align with your business needs and explore new opportunities.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4" className='rounded-xl bg-white px-4 text-xl border-b-0 text-jelly-bean'>
      <AccordionTrigger className='text-xl font-bold py-2'>
        <span className='flex items-center justify-center w-8 h-8 text-jelly-bean border-jelly-bean border-[3px] rounded-full'>
          4
        </span>
        Scalable Innovation
      </AccordionTrigger>
      <AccordionContent className='border-t-2 border-jelly-bean text-center py-4 text-black text-opacity-30'>
        We enhance system functionality, ensuring adaptability and scalability to support your business growth and evolving needs.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

const OurApproachSection = () => (
  <section className="bg-jelly-bean w-full" id='our-approach-section'>
    <div className='flex justify-between gap-4 max-w-6xl w-full mx-auto py-20 pb-12'>
      <div className='flex flex-col max-w-md gap-8'>
        <h2 className="text-4xl font-extrabold tracking-wide text-white leading-[48px]">
          See Our Approach to Working with You
        </h2>
        <AccordionSection />
      </div>
      <div className="relative w-full max-w-lg h-[460px]">
        <img src="/work-environment-1.png" alt="work culture image 1" loading='lazy' className="absolute z-10 max-w-full aspect-[1.49] w-[411px] top-0 right-0" />
        <img src="/work-environment-2.png" alt="work culture image 2" loading='lazy' className="absolute aspect-[1.43] w-[416px] bottom-0 left-0" />
      </div>
    </div>
  </section >
)

const GetInTouchSection = () => (
  <section className="max-w-6xl w-full mx-auto px-2 py-20" id='about-section'>
    <div className="flex gap-5 justify-between">
      <h2 className="text-3xl font-extrabold leading-10 text-jelly-bean w-1/3">Get in touch</h2>
      <div className="grid gap-12 text-opacity-30 text-black w-2/3">
        <div className="flex gap-5">
          <ContactItem title="Collaborate" email="support@example.com" phone="+1 (555) 123-4567" />
          <ContactItem title="Press" email="support@example.com" phone="+1 (555) 123-4567" />
        </div>
        <div className="flex gap-5">
          <ContactItem title="Join our team" email="support@example.com" phone="+1 (555) 123-4567" />
          <ContactItem title="Say hello" email="support@example.com" phone="+1 (555) 123-4567" />
        </div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <section className="bg-jelly-bean w-full">
    <div className="flex gap-8 w-full max-w-6xl mx-auto px-2 py-6">
      <div className="flex flex-col w-3/12">
        <Link to='/' className="flex items-center gap-2.5"
          onClick={() => scrollToSection('header-section')}
        >
          <img
            src="/logo-footer.png"
            alt="Spect-AI logo"
            className="h-[43px] w-[51px]"
          />
          <div className="text-3xl font-semibold text-white leading-10">Spect-AI</div>
        </Link>
        <p className="mt-[70px] text-sm text-white">
          We are a leading technology agency specializing in innovative solutions, including process automation, custom software development, and IT consultation.
        </p>
      </div>
      <div className="flex gap-5 mt-28 w-9/12 text-white justify-between">
        <div className="grid gap-5">
          <p className="text-sm">
            Subscribe to stay tuned for new and latest updates. Let's do it!
          </p>
          <form className="flex gap-3 items-center">
            <Label htmlFor="email" className="sr-only">Enter your email</Label>
            <Input
              id="email"
              type="email"
              aria-label="Enter your email"
              placeholder="Enter your email Address"
              className="rounded-xl shadow-lg h-12"
            />
            <Button size='lg' className='text-base font-bold bg-puerto-rico h-12 rounded-lg'>Subscribe</Button>
          </form>
        </div>
        <div className="flex flex-col text-white gap-5">
          <h3 className="text-base font-medium leading-4">Follow us</h3>
          <div className="flex gap-2">
            <div className="rounded-full w-6 h-6 bg-white flex justify-between items-center">
              <Instagram className='text-black w-4 h-4 mx-auto stroke-[1.2px]' />
            </div>
            <div className="rounded-full w-6 h-6 bg-white flex justify-between items-center">
              <Facebook className='text-black w-4 h-4 mx-auto stroke-[1.2px]' />
            </div>
            <div className="rounded-full w-6 h-6 bg-white flex justify-between items-center">
              <Twitter className='text-black w-4 h-4 mx-auto stroke-[1.2px]' />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white gap-5">
          <h3 className="text-base font-medium leading-4">Call us</h3>
          <p className="text-sm">+1 800 854-36-80</p>
        </div>
      </div>
    </div>
    <div className='h-16 w-full' />
    <Separator />
    <div className="flex py-6 justify-between gap-5 px-2 text-sm text-white max-w-6xl w-full mx-auto">
      <div className="">©{new Date().getFullYear()} All Rights Reserved</div>
      <div className="flex gap-5 justify-between">
        <a className="hover:underline">Privacy Policy</a>
        <a className="hover:underline">Terms of Use</a>
        <a className="hover:underline">Sales and Refunds</a>
        <a className="hover:underline">Legal</a>
        <a className="hover:underline">Site Map</a>
      </div>
    </div>
  </section>
);

const HomeScreen = () => (
  <main className="flex flex-col items-center bg-white" id='header-section'>
    <Header />
    <CallToAction />
    <Specializations />
    <Portfolio />
    <OurApproachSection />
    <GetInTouchSection />
    <Footer />
  </main>
);

export default HomeScreen;
