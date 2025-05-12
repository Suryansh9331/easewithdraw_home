
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const faqs = [
  {
    question: 'Why was my KYC verification not approved?',
    answer: 'Your KYC might not be approved due to invalid or blurry documents, mismatch of details, or expired documents.',
  },
  {
    question: 'What should I do if my deposit does not meet the minimum required amount?',
    answer: 'You should deposit the minimum required amount or contact support for further help.',
  },
  {
    question: 'How long does it take for a deposit to be credited?',
    answer: 'It usually takes a few minutes to a couple of hours. Contact support if it takes longer.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Create refs for each question
  const questionRefs = useRef([]);
  questionRefs.current = faqs.map((_, i) => questionRefs.current[i] ?? React.createRef());
  
  // Create ref for heading
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { amount: 0.3, once: false });
  
  // Track which questions are in view
  const [questionsInView, setQuestionsInView] = useState(Array(faqs.length).fill(false));

  useEffect(() => {
    const observers = questionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setQuestionsInView(prev => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        },
        { threshold: 0.3 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (questionRefs.current[index].current) {
          observer.unobserve(questionRefs.current[index].current);
        }
      });
    };
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="min-h-screen mt-16 px-6 md:px-20 py-16 bg-white">
      <motion.h2
        ref={headingRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isHeadingInView ? 0 : -100, 
          opacity: isHeadingInView ? 1 : 0
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold text-center mb-10"
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.h2>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            ref={el => questionRefs.current[index].current = el}
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: questionsInView[index] ? 0 : 100, 
              opacity: questionsInView[index] ? 1 : 0
            }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 rounded-lg p-4 cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">{faq.question}</p>
              <span className="text-xl">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2 pt-2 text-gray-700">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
       <a href='#'>
        <button className="text-black   font-semibold hover:underline inline-flex items-center gap-1">
          View More <span className="text-xl">→</span>
        </button>
        </a>
      </div>
    </section>
  );
};

export default FAQ;