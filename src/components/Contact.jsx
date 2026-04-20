import React from 'react'
import { openingHours, socials } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', {type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            }, 
            ease: "power1.inOut"
        }); 

        timeline
        .fromTo(titleSplit.words, { opacity: 0, yPercent: 100, stagger: 0.02}, { opacity: 1, yPercent: 0, stagger: 0.02})
        .from('#contact h3, #contact p', {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .to('#f-right-leaf', {
            y: '-50', duration: 1, ease: 'power1.inOut'
        })
        .to('#f-left-leaf', {
            y: '-50', duration: 1, ease: 'power1.inOut'
        }, '<')
    });

  return (
    <footer id="contact">
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

        <div className='content'>
            <h2>Where to find us?</h2>

            <div>
                <h3>VISIT OUR BAR</h3>
                <p>216, Main Street. #101, Antalya, Turkey</p>
            </div>
            <div>
                <h3>CONTACT US</h3>
                <p>Email: info@mojitococktails.com</p>
                <p>Phone: +90 242 123 45 67</p>
            </div>
            <div>OPEN EVERY DAY</div>
                {openingHours.map((time) => (
                    <p key={time.day}>{time.day} : {time.time}</p>
                ))}
        </div>
        <div>
            <h3>SOCIALS</h3>
            <div className='flex-center gap-5'>
                {socials.map((social) => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        <img src={social.icon} alt={social.name} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Contact