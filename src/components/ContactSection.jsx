import { Mail, Phone } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="w-full scroll-mt-20 border-t border-gray-100 bg-white py-20 transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-block rounded-full border border-primary-dark/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark transition-colors dark:border-blue-400/60 dark:text-blue-400">
          Contact
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-dark transition-colors dark:text-white sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 transition-colors dark:text-slate-400">
          Have a question or want to work together? Feel free to reach out anytime.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:johnjaymoanes25@gmail.com"
            className="inline-flex items-center gap-2.5 rounded-xl border border-gray-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-dark shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Mail className="h-4 w-4 text-primary dark:text-blue-400" />
            johnjaymoanes25@gmail.com
          </a>
          <a
            href="tel:09923811486"
            className="inline-flex items-center gap-2.5 rounded-xl border border-gray-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-dark shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Phone className="h-4 w-4 text-primary dark:text-blue-400" />
            09923811486
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
