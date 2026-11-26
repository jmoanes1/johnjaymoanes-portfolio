import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative w-full scroll-mt-24 border-t border-slate-900 bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Let&apos;s Connect
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
            Have a project in mind, an open position, or just want to discuss web development? I&apos;m always glad to talk.
          </p>
        </div>

        {/* Clean Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Email Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                  <Mail size={18} />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('johnjaymoanes25@gmail.com', 'email')}
                  title="Copy email address"
                  className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Email Me</p>
              <h3 className="mt-1 break-all text-base font-semibold text-white">
                johnjaymoanes25@gmail.com
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <a
                href="mailto:johnjaymoanes25@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 transition-colors hover:text-blue-300"
              >
                <span>Compose email</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                  <Phone size={18} />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('09923811486', 'phone')}
                  title="Copy phone number"
                  className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
                >
                  {copiedPhone ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Direct Call</p>
              <h3 className="mt-1 text-base font-semibold text-white">
                +63 992 381 1486
              </h3>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <a
                href="tel:09923811486"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
              >
                <span>Call number</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Location Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <MapPin size={14} className="text-slate-400" />
          <span>Makati City, Philippines • Available for Remote & On-site roles</span>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
