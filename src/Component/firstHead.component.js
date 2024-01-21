import { useState } from 'react'
import './firstHead.css'
const Firsthead = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="bg-green-50">
      
      <div className="relative isolate px-6 lg:px-8">
        
          
        
        <div className="max-w-2xl py-32 FirstHeadToLeft">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            TaxPee: Your Partner for Assisted ITR Filing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Trust us, you can file your Income tax return on your own. It’s fast, easy and safe when you file ITR with TaxPee on your own.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/form16"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                File Now
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        
        <div>
            <img class="image1" src='https://static.wixstatic.com/media/5ef7f2_c9b0d19d93684b69b770429592eb3188~mv2.png/v1/fill/w_484,h_599,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5ef7f2_c9b0d19d93684b69b770429592eb3188~mv2.png' />
            <img class="image2" src='https://static.wixstatic.com/media/5ef7f2_384348ff61994db39dc9c7e4a38e4710~mv2.gif'/>
        </div>
        <div>
            <h1 className='text-xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mt-12'>Benefits of E-Filing Your Income Tax Returns</h1>
            <div className='mt-12 flex gap-8 allBoxes'>
                <div className='box bg-white w-1/4 rounded p-8 my-2'>
                    <figure>
                        <img src='https://tax2win.in/assets-new/img/new-theme/icon-claim-refund.svg?2'/>
                    </figure>
                    <h3 class="text-xl font-bold">Claim Tax Refund</h3>
                    <p class="text-xl">If you have paid more income tax, you are eligible for a tax refund </p>
                </div>
                <div className='box bg-white w-1/4 rounded p-8 my-2'>
                    <figure>
                        <img src="https://static.wixstatic.com/media/5ef7f2_709be0632d384580a9127c53dd587772~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/calendar.png"/>
                    </figure>
                    <h3 class="text-xl font-bold">Timely Filing</h3>
                    <p class="text-xl">A delay in filing ITR makes you liable to pay a fee</p>
                </div>
                <div className='box bg-white w-1/4 rounded p-8 my-2'>
                    <figure>
                        <img src="https://tax2win.in/assets-new/img/new-theme/icon-easyloan.svg?2"/>
                    </figure>
                    <h3 class="text-xl font-bold">Easy Loan Approval</h3>
                    <p class="text-xl">The income tax return serves as an important document for loan approval</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Firsthead;
