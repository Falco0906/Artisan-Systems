"use client";

import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import ScrollReveal from "../Common/ScrollReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/artisan13226@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <ScrollReveal direction="left" duration={800}>
            <div
              className="mb-12 rounded-xl bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Get in Touch
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Have a project idea or need help with automation, AI, or web development? Reach out and our team will get back to you shortly.
              </p>

              {submitted ? (
                <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/40">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">Message Sent!</h3>
                  <p className="text-body-color">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="New message from Artisan Systems website" />
                  <input type="hidden" name="_template" value="table" />
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Enter your name"
                          className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-colors duration-200 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Enter your email"
                          className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-colors duration-200 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          placeholder="Enter your Message"
                          className="border-stroke w-full resize-none rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-colors duration-200 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        disabled={sending}
                        className="rounded-lg bg-primary px-9 py-4 text-base font-semibold text-white shadow-submit transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed dark:shadow-submit-dark"
                      >
                        {sending ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
            </ScrollReveal>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ScrollReveal direction="right" delay={200} duration={800}>
              <NewsLatterBox />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
