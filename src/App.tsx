import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Textarea } from './components/ui/textarea'
import { Checkbox } from './components/ui/checkbox'
import { Button } from './components/ui/button'


import './App.css'

function App() {


  return (
    <>
      <div className='w-full h-[full] bg-[#dff1e7] grid justify-center items-center xl:h-[100vh] lg:pt-[100px] xl:pt-0'>
        <div className='bg-white m-[1rem] p-[2rem] rounded-[1rem] md:w-[620px] md:m-auto '>
          <h1 className='text-[40px] font-bold mb-[1.25rem] tracking-[1.2] text-[#212529]'>Contact US</h1>

          {/* form section */}
          <form action="">

            {/* first and last name Section */}

            <div className='mb-[1.5rem] md:flex lg:gap-[1rem] '>

              {/* first name Section */}

              <div className="grid w-full max-w-sm items-start gap-1.5  ">
                <Label htmlFor="first-name" className='text-left'>First Name <span className='text-[#008000]'>*</span></Label>
                <Input id="picture" type="text" name='first-name' />
              </div>

              {/* last name Section */}

              <div className="grid w-full  max-w-sm items-start gap-1.5">
                <Label htmlFor="last-name" className='text-left'>Last Name <span className='text-[#008000]'>*</span></Label>
                <Input type="text" name='last-name' />
              </div>

            </div>

            {/* Email Section */}


            <div className="grid w-full items-start gap-1.5 mb-[1.5rem]">
              <Label htmlFor="email" className='text-left'>Email <span className='text-[#008000]'>*</span></Label>
              <Input type="email" name='email' />
            </div>


            {/* Query type section */}

            <div className='grid w-full  max-w-sm items-start gap-1.5 mb-[1.5rem]'>
              <Label htmlFor="query-type" className='text-left'>Query Type <span className='text-[#008000]'>*</span></Label>

              <div className='mb-[1.5rem] mt-[0.5rem] flex flex-col gap-3 md:flex-row lg:flex-row lg:gap-[1rem] '>


                {/* first radio-section */}

                <div className='cursor-pointer w-[270px]  p-[10px] flex items-center gap-[1rem] border-gray-400 border-[1px] rounded-[.35rem]' >
                  <input type="radio" name='query-type' value ='General Enquiry' />
                  <Label htmlFor="general-enguiry" className='mb-0'>General Enquiry</Label>
                </div>

                {/* second radio button */}

                <div className='cursor-pointer w-[270px]   p-[10px] flex items-center gap-[1rem] border-gray-400 border-[1px] rounded-[.35rem]'>
                  <input type="radio" name='query-type' value='Support Request' />
                  <Label htmlFor="support-request" className='mb-0'>Support Request</Label>
                </div>



              </div>

            </div>


            {/* textarea section */}

            <div className="grid w-full   items-start gap-1.5 mb-[1.5rem]">
              <Label htmlFor="message" className='text-left'>Message <span className='text-[#008000]'>*</span></Label>
              <Textarea className="" rows={4} />

            </div>


            <div className="flex items-center space-x-2 mb-[1.5rem]">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-0"
              >
                I consent to being contacted by the team <span className='text-[#008000]'>*</span>
              </label>
            </div>

            <div className="grid w-full gap-2">
              <Button type="submit" className='bg-[#0c7d69]'>Submit</Button>
            </div>
          </form>

        </div>
      </div>

    </>
  )
}

export default App
