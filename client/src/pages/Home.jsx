import doctor from "../assets/images/pexels-doctor-hero.jpg";
import doctor2 from "../assets/images/pexels-doctor-2.jpg";
import doctor3 from "../assets/images/pexels-doctor-3.jpg";

export default function Home() {
  return (
    <>
      {/* ========== hero section  ==========*/}
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ========== hero content  ==========*/}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help people to live a healthier and longer life.
                  </h1>
                  <p className="text__para">
                    Platelets lenses. Concepts wisdom stimuli hyperglycemia retardation genes image. Between-subjects
                    longitudinal movement heuristics procedural surgery in-groups. Phenomenon? Systematic closure
                    sociobiology punishment deviation central. Internal hormones prosocial neuropathy generalization
                    horizontal hypnosis.
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>

                {/* ========== hero counter  ==========*/}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clinics' Locations</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Patients' Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* ========== hero content  ==========*/}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full mt-[60px] rounded-2xl" src={doctor} />
                </div>
                <div className="mt-[30px]">
                  <img src={doctor2} className="w-2/3 mb-[30px] rounded-2xl" />
                  <img src={doctor3} className="w-2/3 rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
