import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How can I donate to a government school?",
    answer:
      "Browse verified schools, select a project, and donate securely through the VIDYADAAN platform.",
  },
  {
    question: "How are school requests verified?",
    answer:
      "Every request is reviewed and verified by our NGO partners before it is published for donations.",
  },
  {
    question: "Can I track how my donation is used?",
    answer:
      "Yes. Schools upload progress updates along with before-and-after photos to maintain complete transparency.",
  },
  {
    question: "Can NGOs register on VIDYADAAN?",
    answer:
      "Yes. Verified NGOs can register, manage projects, verify school requests, and monitor project completion.",
  },
  {
    question: "Is VIDYADAAN free to use?",
    answer:
      "Yes. Registration and browsing projects are completely free. Donors only contribute to the projects they choose.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know about VIDYADAAN.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-800">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="border-t px-6 py-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;