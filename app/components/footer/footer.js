import { faFacebookF, faGoogle, faLinkedinIn, faPinterest, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black text-white'>
        <div className='manualContainer p-8 footer'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
                <div>
                    <div>
                        <h5>ABOUT SHOP</h5>
                        <hr />
                        <p>We possess within us two minds. So far I have written only of the conscious mind.We further know that the subconscious has recorded every event. This is just perfect theme.</p>
                    </div>
                    <div>
                        <h5>NEWSLETTER</h5>
                        <hr />
                        <input type='email' placeholder='write your email..' className='border bg-transparent rounded my-3 p-2 w-full'/>
                    </div>
                </div>


                <div>
                    <h5>Information</h5>
                    <hr />
                    <ul>
                        <li><Link href={"#"}>Our Stores</Link></li>
                        <li><Link href={"#"}>Delivery Information</Link></li>
                        <li><Link href={"#"}>About Us</Link></li>
                        <li><Link href={"#"}>Terms and Conditions</Link></li>
                        <li><Link href={"#"}>Privacy Policy</Link></li>
                        <li><Link href={"#"}>Contact Us</Link></li>
                        <li><Link href={"#"}>Returns</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h5>My Account</h5>
                    <hr />
                    <ul>
                        <li><Link href={"#"}>My Account </Link></li>
                        <li><Link href={"#"}>Order History</Link></li>
                        <li><Link href={"#"}>My Wishlist</Link></li>
                        <li><Link href={"#"}>Specials</Link></li>
                        <li><Link href={"#"}>Track Order</Link></li>
                        <li><Link href={"#"}>Gift Vouchers</Link></li>
                        <li><Link href={"#"}>My Credit Slips</Link></li>
                    </ul>
                </div>

                <div>
                    <h5>Get in Touch with us</h5>
                    <hr />
                        <div className='flex justify-left items-center gap-2 '>
                            <div><FontAwesomeIcon icon={faHome} className='text-sm icon'/></div>
                            <div className='grow'><p> Philippines, PO Box 6200 Talay st. 65, SweetPick inc.</p></div>
                        </div>
                        <div className='flex justify-left items-center gap-2'>
                            <div><FontAwesomeIcon icon={faPhone} className='text-sm icon'/></div>
                            <div><p> +63 918 4084 694</p></div>
                        </div>
                        <div className='flex justify-left items-center gap-2'>
                            <div><FontAwesomeIcon icon={faEnvelope} className='text-sm icon'/></div>
                            <div><p>samokhinteam@gmail.com</p></div>
                        </div>
                    <h5>FIND US ON</h5>
                    <hr />
                    <div className='flex my-3 justify-center items-center gap-2 *:border *:p-1 '>
                        <FontAwesomeIcon icon={faFacebookF} className='text-sm icon'/>
                        <FontAwesomeIcon icon={faTwitter} className='text-sm icon'/>
                        <FontAwesomeIcon icon={faPinterestP} className='text-sm icon'/>
                        <FontAwesomeIcon icon={faLinkedinIn} className='text-sm icon'/>
                        <FontAwesomeIcon icon={faGoogle} className='text-sm icon'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
