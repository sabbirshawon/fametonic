'use client';

import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full bg-black relative z-10 overflow-hidden">
      <div className="max-w-[1182px] mx-auto px-4 pt-10 pb-10 flex flex-col md:flex-row items-start gap-10 relative">


        <div className="w-full flex justify-center md:hidden mb-6">
          <Image
            src="/mockup-phone.png"
            alt="Fametonic App"
            width={360}
            height={480}
            className="object-contain w-[280px] sm:w-[320px] h-auto"
          />
        </div>


        <div className="w-full md:w-[520px] flex flex-col justify-between z-20 order-2 md:order-1">
          <div>

            <h1 className="text-white font-bold text-[36px] leading-[1.2] mb-4 max-w-[516px]">
                Want to Turn Social Media Into a
                Profitable Career?
            </h1>


            <h2 className="text-[24px] font-semibold leading-snug mb-6 max-w-[516px] text-[#00E7F9] drop-shadow-[0_4px_4px_#FC004E]">
                Discover your way to success with Fametonic:
            </h2>



      
            <ul className="space-y-3 text-sm md:text-base leading-snug text-white mb-8">
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Start growing your influence right away—no waiting required!</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Create viral TikToks and Reels step by step with easy-to-follow lessons</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Use a Personal AI Worker to boost your content</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Learn from expert-led courses designed for aspiring influencers</span>
              </li>
            </ul>

            <div className="mb-4 text-center md:text-left">
              <Link href="#">
                <button className="w-full sm:w-auto bg-[#FF0066] hover:bg-[#e6005c] text-white px-8 py-3 rounded-full font-bold text-lg shadow-[0_0_16px_#00FFF7] flex items-center justify-center gap-2 transition-all">
                  GET STARTED
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </Link>
              <p className="text-xs mt-2 text-white">
                1-minute quiz for personalized insights
              </p>
            </div>
          </div>
          <Footer />
        </div>
        <div className="hidden md:block absolute right-[-80px] top-[-20px] w-[740px] z-10">
          <Image
            src="/mockup-phone.png"
            alt="Fametonic App"
            width={650}
            height={750}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
