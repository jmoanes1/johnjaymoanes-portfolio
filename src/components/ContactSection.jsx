import { Mail, Phone } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="w-full border-t border-gray-100 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-block rounded-full border border-primary-dark/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          Contact
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-500">
          Have a question or want to work together? Reach out anytime.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:johnjaymoanes25@gmail.com"
            className="inline-flex items-center gap-2.5 rounded-lg border border-primary-dark/70 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-dark transition-colors duration-200 hover:bg-primary-dark hover:text-white"
          >
            <Mail className="h-4 w-4" />
            johnjaymoanes25@gmail.com
          </a>
          <a
            href="tel:09923811486"
            className="inline-flex items-center gap-2.5 rounded-lg border border-primary-dark/70 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary-dark transition-colors duration-200 hover:bg-primary-dark hover:text-white"
          >
            <Phone className="h-4 w-4" />
            09923811486
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
