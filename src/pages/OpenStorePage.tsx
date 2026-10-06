import { Flag } from 'lucide-react';
import OpenStoreForm from '../components/OpenStoreForm';

const TEXT = {
  title: 'Get Started With Zenvika',
  agreed: 'By Continuing, you agree to our',
  terms: 'Terms & Condition',
  and: 'and',
  privacy: 'Privacy Policy',
};

export default function OpenStorePage() {
  return (
    <div className="flex flex-1 flex-col bg-slate-50">
      <div className="flex flex-1 items-center justify-center px-5 py-14 sm:px-8 sm:py-20">
        <div className="w-full max-w-[30rem] rounded-3xl bg-white p-7 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.25)] ring-1 ring-slate-900/5 sm:p-10">
          <div className="flex flex-col items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 ring-1 ring-teal-600/15">
              <Flag
                aria-hidden="true"
                className="h-6 w-6 fill-teal-600 text-teal-600"
              />
            </span>
            <h1 className="text-balance text-center text-2xl font-black tracking-tight text-slate-900 sm:text-[1.75rem]">
              {TEXT.title}
            </h1>
          </div>

          <OpenStoreForm />

          <div className="mt-8 border-t border-slate-100 pt-5">
            <p className="text-center text-[13px] leading-6 text-slate-500">
              {TEXT.agreed}
              <br />
              <span className="font-semibold text-slate-800">{TEXT.terms}</span>
              <span className="text-slate-500"> {TEXT.and} </span>
              <span className="font-semibold text-slate-800">{TEXT.privacy}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
