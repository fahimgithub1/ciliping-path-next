import Link from 'next/link';
import Footer from '../../layout/footer';
import FromWrapper from '../../layout/fromWrapper';
import Navber from '../../layout/nav';
import HeaderMataTage from '../../lib/headMataTag';
import Input from '../../lib/input';
import Label from '../../lib/lable';

export default function Login() {
  return (
    <>
      <HeaderMataTage />
      <main>
        <Navber />

        <div className='LoinBody pt-5 pb-5'>
          <div className='container '>
            <div className='wrap-login100 m-auto p-l-55 p-r-55 p-t-65 p-b-54'>
              <FromWrapper>
                <span className='login100-form-title p-b-49'>Sing In</span>
                <Label text="Full Name" hFor="name" />
                <Input placeholder="Enter Your Name" />
                
                <Label text="Passoward" hFor="passoward" />
                <Input placeholder="Enter Passoward" />

                <Link href='/forgotPassword'>Forgot password?</Link>

                <button className='mt-2'>
                  <Link href='/register'>Sing in</Link>
                </button>
              </FromWrapper>

              <div className='orSingin'>
                <div className='Or'>
                  <span>or</span>
                </div>

                <div className='LodinIcon text-center'>
                    <ul>
                      <li><i className='fa-brands fa-google'></i></li>
                      <li><i className='fa-brands fa-facebook'></i></li>
                    </ul>

                    
                  <div className='Singin'>
                    <Link href='/register'>Sing Up</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
