import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const FAQ = () => {
  const sectionRef = useRef(null);
  const faqRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      faqRefs.current,
      { y: "-100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-[90%] md:w-10/12 mx-auto my-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-2">
          Everything you need to know about renting, listing, and driving with{" "}
          <span className="bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
            Rentify
          </span>
          .
        </p>
      </div>

      <div className="space-y-4">
        {/* Q1 */}
        <div
          ref={(el) => (faqRefs.current[0] = el)}
          className="collapse collapse-arrow  border border-base-300 bg-base-100 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out"
        >
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg font-semibold">
            How do I rent a car from{" "}
            <span className="bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
              Rentify
            </span>
            ?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Simply sign up, search for your preferred location and dates,
              choose a car, and book instantly through our secure platform.
            </p>
          </div>
        </div>

        {/* Q2 */}
        <div
          ref={(el) => (faqRefs.current[1] = el)}
          className="collapse collapse-arrow  border border-base-300 bg-base-100 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out"
        >
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold">
            How can I list my car for rent?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Go to the "List Your Car" page in the dashboard, provide car
              details, set availability & pricing, and publish. Your car will be
              visible to renters immediately.
            </p>
          </div>
        </div>

        {/* Q3 */}
        <div
          ref={(el) => (faqRefs.current[2] = el)}
          className="collapse collapse-arrow  border border-base-300 bg-base-100 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out"
        >
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold">
            What are the requirements to become a driver?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              You need a valid driver’s license, a verified profile, and must
              pass our basic background check. Once approved, you can start
              earning by driving with{" "}
              <span className="bg-gradient-to-r from-[#ff8971] to-[#fa2a00] bg-clip-text text-transparent">
                Rentify
              </span>
              .
            </p>
          </div>
        </div>

        {/* Q4 */}
        <div
          ref={(el) => (faqRefs.current[3] = el)}
          className="collapse collapse-arrow  border border-base-300 bg-base-100 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out"
        >
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold">
            How do payments and earnings work?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Renters pay securely through the app, and owners/drivers receive
              payouts directly to their bank accounts on a weekly basis.
            </p>
          </div>
        </div>

        {/* Q5 */}
        <div
          ref={(el) => (faqRefs.current[4] = el)}
          className="collapse collapse-arrow  border border-base-300 bg-base-100 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out"
        >
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold">
            Is customer support available if I face issues?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Yes, our support team is available 24/7 to help you with bookings,
              car listings, or driver-related issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;