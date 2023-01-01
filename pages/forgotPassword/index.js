import Link from 'next/link';
import Footer from '../../layout/footer';
import FromWrapper from '../../layout/fromWrapper';
import Navber from '../../layout/nav';
import HeaderMataTage from '../../lib/headMataTag';
import Input from '../../lib/input';
import Label from '../../lib/lable';

export default function ForgotPassword() {
  return (
    <>
      <HeaderMataTage />
      <main>
        <Navber />

        <div className='LoinBody pt-5 pb-5'>
          <div className='container '>
            <div className='wrap-login100 m-auto p-l-55 p-r-55 p-t-65 p-b-54'>
              <FromWrapper>
                <span className='login100-form-title p-b-49'>Sing Up</span>
                <Label text="Name or Email" hFor="name" />
                <Input placeholder="Your Name/Email" />

                <button className='mt-2'>
                  <Link href='/register'>Forgot Password</Link>
                </button>

                <div className='Singin text-center'>
                    <Link href='/login'>Return to login</Link>
                </div>
              </FromWrapper>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
