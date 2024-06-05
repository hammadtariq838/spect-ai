import { ReactNode } from 'react';

const NavLink = ({ children }: { children: ReactNode }) => (
  <a href="#" className="mx-2">{children}</a>
);

const NavLinks = () => (
  <nav className="flex-auto flex gap-5 justify-between my-auto">
    <NavLink>Services</NavLink>
    <NavLink>Portfolio</NavLink>
    <NavLink>How we work</NavLink>
    <NavLink>About us</NavLink>
  </nav>
);

const Header = () => (
  <header className="flex justify-center items-center self-stretch px-16 py-4 bg-white w-full max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between items-start w-full max-w-[1146px] max-md:flex-wrap">
      <div className="flex gap-2.5 text-3xl font-semibold leading-10 text-cyan-700">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b5258c8-75f8-43af-b24e-a0276d966a42?apiKey=37e9b177900140c9be4212bdea99ec1b&"
          alt="Spect-AI logo"
          className="shrink-0 aspect-[1.19] w-[51px]"
        />
        <div className="flex-auto self-start mt-3.5">Spect-AI</div>
      </div>
      <div className="flex gap-5 text-base leading-6 text-black max-md:flex-wrap max-md:max-w-full">
        <NavLinks />
        <button className="px-6 py-2.5 bg-white text-red-400 font-bold rounded-lg border border-red-400 max-md:px-5">
          Contact us
        </button>
      </div>
    </div>
  </header>
);

const CallToAction = () => (
  <section className="flex flex-col items-center bg-teal-400 text-center px-5 py-16 w-full max-md:max-w-full">
    <div className="mt-16 text-xl font-semibold leading-8 text-white uppercase max-md:mt-10">
      Our AI solutions excel at
    </div>
    <h1 className="mt-6 text-6xl font-extrabold tracking-wide text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
      Automating your workflow for improved accuracy and greater efficiency
    </h1>
    <button className="mt-7 px-6 py-2.5 bg-teal-400 text-white text-base font-bold rounded-lg max-md:px-5">
      Let’s connect
    </button>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8963534543ed1925b099727245bf210b6b317152a29c37728cb7a613adec73b9?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="z-10 mt-16 mb-0 w-full aspect-[2.78] max-w-[1146px] max-md:mt-10 max-md:mb-2.5" />
  </section>
);

const ColorDot = ({ color }: { color: string }) => (
  <div className={`shrink-0 h-[17px] w-[17px] rounded-full`} style={{ backgroundColor: color }}></div>
);

const Specializations = () => (
  <section className="flex gap-5 mt-52 max-w-full w-[968px] max-md:flex-wrap max-md:mt-10">
    <div className="flex flex-col self-start mt-2">
      <ColorDot color="red" />
      <ColorDot color="teal" />
      <ColorDot color="cyan" />
    </div>
    <div className="flex flex-col grow shrink-0 px-5 basis-0 w-fit max-md:max-w-full">
      <h2 className="self-center text-5xl font-extrabold tracking-wide text-cyan-700 leading-[55.86px]">Our specializations</h2>
      <p className="mt-5 text-sm leading-5 text-center text-slate-950 text-opacity-30 max-md:max-w-full">
        We provide a comprehensive suite of services designed to meet your technical needs. Our expertise spans
        process automation, delivering efficiency and precision to your workflows. We specialize in custom software
        development, creating tailored solutions to address your unique business challenges. Additionally, our IT
        consultation services offer strategic insights and guidance to optimize your technology infrastructure and
        drive innovation.
      </p>
    </div>
  </section>
);

const PortfolioItem = ({ imgSrc, title, description, tags }: { imgSrc: string, title: string, description: string, tags: { label: string, color: string }[] }) => (
  <div className="flex flex-col grow px-3 pt-3 pb-7 w-full text-cyan-700 bg-white rounded-xl shadow leading-[133%] max-md:mt-10 max-md:max-w-full">
    <img loading="lazy" src={imgSrc} alt="" className="w-full aspect-[1.15] max-md:max-w-full" />
    <div className="mt-7 text-3xl font-semibold max-md:max-w-full">{title}</div>
    <p className="mt-4 text-sm leading-5 max-md:max-w-full">{description}</p>
    <div className="flex gap-2.5 self-start mt-4 text-xs tracking-wide text-center text-white whitespace-nowrap">
      {tags.map(tag => (
        <div key={tag.label} className={`justify-center px-2 py-1 bg-${tag.color}-400 rounded`}>{tag.label}</div>
      ))}
    </div>
    <button className="justify-center self-start px-4 py-2.5 mt-6 text-base font-bold leading-6 text-center text-white bg-teal-400 rounded-lg">
      Read complete solution
    </button>
  </div>
);

const Portfolio = () => (
  <section className="flex justify-center items-center self-stretch px-16 py-16 mt-10 w-full bg-gray-50 max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col mb-3.5 w-full max-w-[1144px] max-md:max-w-full">
      <h2 className="self-center text-5xl font-extrabold tracking-wide text-cyan-700 leading-[55.86px]">
        See our portfolio
      </h2>
      <div className="mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <PortfolioItem
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ea80f03e54a1c8bb33b5d57a153fffb6d58e113cf4836f901b9ff0dc089695ee?apiKey=37e9b177900140c9be4212bdea99ec1b&"
            title="Bidding assistant"
            description="Smart AI assistant helping contractors in preparing winning bidds"
            tags={[
              { label: 'Construction', color: 'red' },
              { label: 'Development', color: 'teal' }
            ]}
          />
          <PortfolioItem
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2bc06ef68f79b1befab1c20e08f62fe9652451aaeabaf8e3838d20d151eed13b?apiKey=37e9b177900140c9be4212bdea99ec1b&"
            title="HeadGear"
            description="A wearable helmet all set to transform the sports, and medical industry"
            tags={[
              { label: 'Sports', color: 'red' },
              { label: 'Medical', color: 'teal' },
              { label: 'Gaming', color: 'cyan' }
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

const ContactItem = ({ title, email, phone }: { title: string, email: string, phone: string }) => (
  <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
    <div className="font-semibold text-gray-900">{title}</div>
    <div className="mt-2">{email}</div>
    <div className="mt-1">{phone}</div>
  </div>
);

const Form = () => (
  <form className="flex gap-3 mt-1 max-md:flex-wrap max-md:max-w-full">
    <label htmlFor="subscribeEmail" className="sr-only">Enter your email</label>
    <input type="email" id="subscribeEmail" className="justify-center items-start px-2.5 py-4 bg-white rounded-xl shadow-lg max-md:pr-5 max-md:max-w-full" placeholder="Enter your email Address" aria-label="Enter your email" />
    <button type="submit" className="justify-center px-4 py-2.5 text-base font-bold leading-6 text-center text-white whitespace-nowrap bg-teal-400 rounded-lg">Subscribe</button>
  </form>
);

const Footer = () => (
  <footer>
    <section className="flex flex-col items-center self-stretch px-16 pt-20 pb-12 w-full bg-cyan-700 max-md:px-5 max-md:max-w-full">
      <div className="mt-3.5 w-full max-w-[1142px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-cyan-700 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl font-extrabold tracking-wide text-white leading-[56px]">
                See Our Approach to <br /> Working with You
              </h2>
              <div className="flex flex-col p-4 mt-10 bg-white rounded-xl max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 items-center text-xl font-bold leading-8">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/329f1f38c48fd1a08d039c4456ec4d4c767b669b87a5652e0375a5bc8af83ee9?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Strategic Vision" className="shrink-0 self-stretch aspect-square w-[30px]" />
                  <div className="flex-auto self-stretch my-auto">Strategic Vision</div>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1d9dd6e50025b37525763d931e61854843689cfce498be15e740fe5dbdc5b56?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="shrink-0 self-stretch my-auto w-5 aspect-[2]" />
                </div>
                <div className="shrink-0 mt-1.5 h-px bg-cyan-700 border border-cyan-700 border-solid" />
                <p className="mt-4 text-sm leading-5 text-center">
                  We dive deep through preliminary meetings to understand your challenges and goals, crafting a future-proof technology roadmap that guides your business forward.
                </p>
              </div>
              {['Immediate Impact', 'Rapid Value Creation', 'Scalable Innovation'].map((item, index) => (
                <div key={index} className="flex gap-5 items-center py-2.5 pr-8 pl-4 mt-4 max-w-full text-xl font-bold leading-8 bg-white rounded-xl w-[431px] max-md:flex-wrap max-md:pr-5 max-md:mr-2.5">
                  <img src={`http://b.io/ext_${11 + index}-`} alt="" className="shrink-0 self-stretch aspect-square w-[30px]" />
                  <div className="flex-auto self-stretch my-auto">{item}</div>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dca0f2f93c56f1da31d259fa3a25aa8e8929c52f0a3a9a3cdf334be1a4a61cf7?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="shrink-0 self-stretch my-auto w-5 aspect-[2]" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-2 max-md:mt-10 max-md:max-w-full">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e206ea791caeb19811c98e96626c75ec57a75420a341c7f94bb45edf9065ef5?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="z-10 self-end max-w-full aspect-[1.49] w-[411px]" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/363c655b7d8c39a4c62bb52814f2f52953bf51cde725c4aec09aef00de83a659?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="mt-0 max-w-full aspect-[1.43] w-[416px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="flex flex-col justify-center w-full bg-white max-w-[1259px] max-md:max-w-full">
      <div className="flex flex-col px-5 pt-20 max-md:px-5 max-md:max-w-full">
        <div className="mt-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <h2 className="text-3xl font-extrabold leading-10 text-cyan-700 max-md:mt-10">Get in touch</h2>
            </div>
            <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base leading-6 text-slate-950 text-opacity-30 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-wrap">
                  <ContactItem title="Collaborate" email="support@example.com" phone="+1 (555) 123-4567" />
                  <ContactItem title="Press" email="support@example.com" phone="+1 (555) 123-4567" />
                </div>
                <div className="flex gap-5 mt-12 max-md:flex-wrap max-md:mt-10">
                  <ContactItem title="Join our team" email="support@example.com" phone="+1 (555) 123-4567" />
                  <ContactItem title="Say hello" email="support@example.com" phone="+1 (555) 123-4567" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-16 h-0.5 bg-gray-200 max-md:mt-10" />
    </section>
    <section className="flex flex-col items-center self-stretch py-8 w-full bg-cyan-700 max-md:max-w-full">
      <div className="w-full max-w-[1117px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 max-md:mt-10">
              <div className="flex gap-2.5 text-3xl font-semibold leading-10 text-center text-white whitespace-nowrap">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/438fdd7c-1185-4a45-8dcf-d2af8e1673d0?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Spect-AI logo" className="shrink-0 aspect-[1.19] w-[51px]" />
                <div className="flex-auto self-start mt-3.5">Spect-AI</div>
              </div>
              <p className="mt-20 text-sm leading-5 text-white max-md:mt-10">
                We are a leading technology agency specializing in innovative solutions, including process automation, custom software development, and IT consultation.
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 mt-28 max-md:flex-wrap max-md:mt-10">
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="flex gap-5 text-white max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto text-sm leading-5 max-md:max-w-full">
                    Subscribe to stay tuned for new and latest updates. Let's do it!
                  </div>
                  <div className="text-base font-medium leading-6">Follow us</div>
                </div>
                <div className="flex gap-2 self-end px-5 mt-3.5">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2798a8e477ff83a1f5d516dcc9a6e6c79f1e764ffe07b89c30b72ec65b8819df?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Facebook" className="shrink-0 w-6 aspect-square" />
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/321396f3344b7950cffce5bfbe136e4b8c19b4cef208115bab67f1523d10d5a0?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Twitter" className="shrink-0 w-6 aspect-square" />
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba57d880363a7bf8bb9c6848bda2c2e3dfeb3370c6d0fc56b74ebc012bdd67da?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Instagram" className="shrink-0 w-6 aspect-square" />
                </div>
                <Form />
              </div>
              <div className="flex flex-col self-start px-5">
                <div className="text-base font-medium leading-6 text-white">Call us</div>
                <p className="mt-5 text-sm leading-5 text-white">+1 800 854-36-80</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="self-stretch mt-32 w-full bg-white border border-white border-solid min-h-[1px] max-md:mt-10 max-md:max-w-full" />
    <div className="flex gap-5 px-5 mt-8 w-full text-sm leading-5 text-white max-w-[1157px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto my-auto">© 2021 All Rights Reserved</div>
      <div className="flex gap-5 justify-between max-md:flex-wrap">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Use</a>
        <a href="#" className="hover:underline">Sales and Refunds</a>
        <a href="#" className="hover:underline">Legal</a>
        <a href="#" className="hover:underline">Site Map</a>
      </div>
    </div>
  </footer>
)


const HomeScreen = () => (
  <div className="flex flex-col items-center bg-white">
    <section className="flex flex-col items-center w-full bg-teal-400 max-md:max-w-full">
      <Header />
      <CallToAction />
    </section>
    <Specializations />
    <Portfolio />
    <Footer />
  </div>
);

export default HomeScreen;
