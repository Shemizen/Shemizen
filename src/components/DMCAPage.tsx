import { motion } from 'motion/react';
import { ShieldCheck, Mail, CheckCircle, Copy, AlertTriangle, FileText, Upload } from 'lucide-react';

interface DMCAPageProps {
  onCopyEmail?: () => void;
}

export default function DMCAPage({ onCopyEmail }: DMCAPageProps) {
  return (
    <section className="flex flex-col min-h-[calc(100dvh-6rem)] md:min-h-[calc(100dvh-8rem)] bg-transparent text-neutral-900 dark:text-white !overflow-visible py-12 md:py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-6 flex flex-col !overflow-visible">
        
        {/* Page Header */}
        <div className="mb-12 md:mb-20 border-b border-neutral-200 dark:border-white/20 pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-3xl sm:text-4xl md:text-6xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase leading-tight md:leading-tight"
          >
            DMCA & TAKEDOWN POLICY
          </motion.h1>
          <p className="font-mono text-sm text-neutral-500 dark:text-neutral-300 uppercase tracking-widest leading-relaxed">
            Last Updated: 25/04/2026
          </p>
        </div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mb-10 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
        >
          <p>
            ShenzenLabs respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement committed using the ShenzenLabs website if such claims are reported to our Designated Copyright Agent identified below.
          </p>
        </motion.div>

        {/* Section 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-start sm:items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-cyan-600 dark:text-cyan-500 flex-shrink-0 mt-0.5 sm:mt-0" />
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500 leading-snug">1. Filing a DMCA Notice of Alleged Infringement</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p className="mb-4">
                If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the ShenzenLabs website by completing the following DMCA Notice of Alleged Infringement and delivering it to ShenzenLabs's Designated Copyright Agent.
              </p>
              <p className="mb-4 font-bold text-neutral-900 dark:text-white uppercase tracking-widest text-xs">Requirements for a valid complaint:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Identify the copyrighted work that you claim has been infringed, or if multiple copyrighted works are covered by this Notice, you may provide a representative list of the copyrighted works that you claim have been infringed.</li>
                <li>Identify the material or link you claim is infringing and that access to which is to be disabled, including at a minimum, if applicable, the URL of the link shown on the ShenzenLabs website where such material may be found.</li>
                <li>Provide your mailing address, telephone number, and, if available, email address.</li>
                <li>Include both of the following statements in the body of the Notice:
                  <ul className="list-[circle] pl-5 mt-2 space-y-2 opacity-80 italic">
                    <li>"I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)."</li>
                    <li>"I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed."</li>
                  </ul>
                </li>
                <li>Provide your full legal name and your electronic or physical signature.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-start sm:items-center gap-3">
            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5 sm:mt-0" />
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 leading-snug">2. Submitting Your Notice</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-blue-900/50 flex transition-colors duration-300 group-hover:bg-blue-500/30">
              <div className="h-full w-1/3 bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p className="mb-6">
                Deliver this Notice, with all items completed, to ShenzenLabs's Designated Copyright Agent via securely encrypted email channels. Make sure you clearly identify your message as a DMCA Takedown Notice.
              </p>
              
              <div className="inline-block w-full sm:w-auto">
                <button 
                  onClick={onCopyEmail}
                  className="inline-flex items-center justify-center gap-2 border border-blue-500 px-4 sm:px-6 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 transition-all hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-black hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] active:scale-95 w-full sm:w-auto break-all"
                >
                  <Copy className="h-4 w-4 flex-shrink-0" />
                  shenzenlabs@protonmail.com
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-start sm:items-center gap-3">
            <FileText className="h-5 w-5 text-cyan-600 dark:text-cyan-500 flex-shrink-0 mt-0.5 sm:mt-0" />
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500 leading-snug">3. Counter-Notice Procedures</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-cyan-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)] hover:border-cyan-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-cyan-900/50 flex transition-colors duration-300 group-hover:bg-cyan-500/30">
              <div className="h-full w-1/3 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                If you believe that your material that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the material, you may send a counter-notice containing the following information to the Copyright Agent:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Your physical or electronic signature.</li>
                <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or disabled.</li>
                <li>A statement that you have a good faith belief that the material was removed or disabled as a result of mistake or a misidentification of the material.</li>
                <li>Your name, address, telephone number, and e-mail address, a statement that you consent to the jurisdiction of the courts of the jurisdiction where your address is located, and a statement that you will accept service of process from the person who provided notification of the alleged infringement.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Section 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-start sm:items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5 sm:mt-0" />
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 leading-snug">4. Repeat Infringers</h2>
          </div>
          <div className="group flex flex-col h-auto w-full border border-neutral-300 dark:border-blue-500/30 bg-white dark:bg-black/80 rounded-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/80 overflow-hidden">
            <div className="h-1 w-full bg-neutral-200 dark:bg-blue-900/50 flex transition-colors duration-300 group-hover:bg-blue-500/30">
              <div className="h-full w-1/3 bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-300"></div>
            </div>
            <div className="p-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                In accordance with the DMCA and other applicable law, ShenzenLabs has adopted a policy of terminating, in appropriate circumstances and at ShenzenLabs's sole discretion, users who are deemed to be repeat infringers. ShenzenLabs may also at its sole discretion limit access to the site and/or terminate the accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
