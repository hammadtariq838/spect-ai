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

const Header = () => (
  <header className="bg-white w-full">
    <div className="flex items-center justify-between gap-5 max-w-5xl w-full mx-auto h-[75px] px-2">
      <Link to='/' className="flex items-center gap-2.5">
        <img
          src="/logo.png"
          alt="Spect-AI logo"
          className="h-[43px] w-[51px]"
        />
        <div className="text-3xl font-semibold text-jelly-bean leading-10">Spect-AI</div>
      </Link>
      <div className="flex gap-8">
        <nav className="flex gap-5 my-auto">
          <Link to='/' className='hover:text-jelly-bean'>Services</Link>
          <Link to='/' className='hover:text-jelly-bean'>Portfolio</Link>
          <Link to='/' className='hover:text-jelly-bean'>How we work</Link>
          <Link to='/' className='hover:text-jelly-bean'>About us</Link>
        </nav>
        <Button
          variant='outline'
          size='lg'
          className='text-red-400 border-red-400 rounded-lg font-bold text-base hover:bg-red-400 hover:text-white'
        >
          Contact us
        </Button>
      </div>
    </div>
  </header>
);

const CallToAction = () => (
  <section className="bg-puerto-rico w-full">
    <div className='flex flex-col items-center gap-1 px-2 max-w-5xl w-full py-12 mx-auto'>
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
          className='text-black rounded-lg font-bold text-base hover:bg-black hover:text-white'
        >
          Let's connect
        </Button>
      </div>
      <div className="relative h-80 w-full py-16">
        <video className="absolute object-cover w-full max-w-5xl h-[413px] rounded-[20px]" autoPlay loop muted playsInline>
          <source src="/call-to-action.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
);

const ColorDot = ({ className }: { className: string }) => (
  <div className={cn('h-[17px] w-[17px] rounded-full', className)}></div>
);

const Specializations = () => (
  <section className="max-w-5xl w-full mx-auto px-2 mt-44">
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
  </section>
);

const PortfolioItem = ({ imgSrc, title, description, tags }: { imgSrc: string, title: string, description: string, tags: { label: string, className: string }[] }) => (
  <Card className='rounded-xl'>
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
  <section className="px-2 py-16 w-full bg-[#FBFBFD]">
    <div className="flex flex-col gap-14 w-full max-w-5xl mx-auto">
      <h2 className="text-center text-5xl font-extrabold tracking-wide text-jelly-bean">
        See our portfolio
      </h2>
      <div className="flex gap-5 justify-between">
        <PortfolioItem
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ea80f03e54a1c8bb33b5d57a153fffb6d58e113cf4836f901b9ff0dc089695ee?apiKey=37e9b177900140c9be4212bdea99ec1b&"
          title="Bidding assistant"
          description="Smart AI assistant helping contractors in preparing winning bids"
          tags={[
            { label: 'Construction', className: 'bg-terra-cotta' },
            { label: 'Development', className: 'bg-puerto-rico' }
          ]}
        />
        <PortfolioItem
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2bc06ef68f79b1befab1c20e08f62fe9652451aaeabaf8e3838d20d151eed13b?apiKey=37e9b177900140c9be4212bdea99ec1b&"
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
  <section className="bg-jelly-bean w-full">
    <div className='flex justify-between gap-4 max-w-5xl w-full mx-auto py-20 pb-12'>
      <div className='flex flex-col max-w-md gap-8'>
        <h2 className="text-4xl font-extrabold tracking-wide text-white leading-[48px]">
          See Our Approach to Working with You
        </h2>
        <AccordionSection />
      </div>
      <div className="relative w-full max-w-lg h-[460px]">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e206ea791caeb19811c98e96626c75ec57a75420a341c7f94bb45edf9065ef5?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="absolute z-10 max-w-full aspect-[1.49] w-[411px] top-0 right-0" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/363c655b7d8c39a4c62bb52814f2f52953bf51cde725c4aec09aef00de83a659?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="absolute aspect-[1.43] w-[416px] bottom-0 left-0" />
      </div>
    </div>
  </section >
)

const GetInTouchSection = () => (
  <section className="max-w-5xl w-full mx-auto px-2 py-20">
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
    <div className="flex gap-8 w-full max-w-5xl mx-auto px-2 py-6">
      <div className="flex flex-col w-3/12">
        <Link to='/' className="flex items-center gap-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/438fdd7c-1185-4a45-8dcf-d2af8e1673d0?apiKey=37e9b177900140c9be4212bdea99ec1b&"
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
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2798a8e477ff83a1f5d516dcc9a6e6c79f1e764ffe07b89c30b72ec65b8819df?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Facebook" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/321396f3344b7950cffce5bfbe136e4b8c19b4cef208115bab67f1523d10d5a0?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Twitter" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba57d880363a7bf8bb9c6848bda2c2e3dfeb3370c6d0fc56b74ebc012bdd67da?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Instagram" />
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
    <div className="flex py-6 justify-between gap-5 px-2 text-sm text-white max-w-5xl w-full mx-auto">
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
  <main className="flex flex-col items-center bg-white">
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
