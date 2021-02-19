import * as React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FaReadme } from 'react-icons/fa'
import Navbar from '../Navigation/Navbar'
import Background from './Background'
import NavbarMobile from '../Navigation/NavbarMobile'

const listVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
      velocity: 2,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 100,
      stiffness: 80,
      staggerChildren: 0.7,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 80,
    },
  },
}

const Hero = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <Wrapper>
      <Navbar />
      <NavbarMobile setToggleDropdown={setToggleDropdown} />
      <AnimatePresence>
        {toggleDropdown && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            onClick={() => setToggleDropdown(false)}
            transition={{ type: 'spring', damping: 18, delay: 0.1 }}
          />
        )}
      </AnimatePresence>
      <Content
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 6, stiffness: 20 }}
      >
        <Title>maker👨🏻‍💻 of stuff.</Title>
        <Tagline
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 6, stiffness: 20 }}
        >
          <span style={{ color: '#0088FF' }}>code</span> +{' '}
          <span style={{ color: '#5496ff' }}>design</span> +{' '}
          <span style={{ color: '#54DAFF' }}>games</span>
        </Tagline>
      </Content>
      <div>
        <AnimatePresence>
          {toggleDropdown && (
            <DropdownWrapper
              initial={{ y: 300, x: '-50%' }}
              animate={{ y: 0 }}
              exit={{ y: 300 }}
              transition={{ type: 'spring', damping: 18 }}
            >
              <DropdownList
                variants={listVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <DropdownItem
                  onClick={() => setToggleDropdown(false)}
                  variants={itemVariants}
                  style={{
                    borderBottom: '1px solid rgba(221,94,152, 0.2)',
                    paddingBottom: '2rem',
                    marginBottom: '2rem',
                  }}
                >
                  <FaReadme
                    color="#5496FF"
                    size={24}
                    style={{ marginRight: 15 }}
                  />
                  <LinkStyled href="/resume.pdf">Resume</LinkStyled>
                </DropdownItem>                
                <DropdownItem variants={itemVariants}>
                  <LinkStyled
                    href="https://github.com/SuhitAgarwal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub
                      color="#5496FF"
                      size={24}
                      style={{ marginRight: 15 }}
                    />{' '}
                    Github
                  </LinkStyled>
                </DropdownItem>
                <DropdownItem variants={itemVariants}>
                  <LinkStyled
                    href="https://linkedin.com/in/SuhitAgarwal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin
                      color="#5496FF"
                      size={24}
                      style={{ marginRight: 15 }}
                    />{' '}
                    LinkedIn
                  </LinkStyled>
                </DropdownItem>
                <DropdownItem variants={itemVariants}>
                  <LinkStyled
                    href="https://instagram.com/suhitdoingthings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiInstagram
                      color="#5496FF"
                      size={24}
                      style={{ marginRight: 15 }}
                    />{' '}
                    Instagram
                  </LinkStyled>
                </DropdownItem>
              </DropdownList>
            </DropdownWrapper>
          )}
        </AnimatePresence>
      </div>
      <Background />
    </Wrapper>
  )
}

export default Hero

// Styles
const Wrapper = styled(motion.div)`
  background: none;
  width: 100%;
  height: 100vh;
  position: relative;
`

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Title = styled(motion.h1)`
  color: #f4f4f4;
  width: 320px;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    font-size: 9rem;
  }
`

const Tagline = styled(motion.h2)`
  color: #f4f4f4;
  font-weight: 600;
  font-size: 3.2rem;
`

const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 1);
  opacity: 0;
  /* backdrop-filter: blur(10px); */
  /* z-index: 998; */
`

const DropdownWrapper = styled(motion.div)`
  position: absolute;
  height: 33rem;
  width: 100%;
  background: #112;
  bottom: 0;
  left: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 5px solid #006AFF;
  /* z-index: 1; */
`

const DropdownList = styled(motion.ul)`
  padding: 3rem;
`

const DropdownItem = styled(motion.li)`
  display: flex;
  font-size: 1.8rem;
  text-align: center;

  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }
`

const LinkStyled = styled.a`
  color: #006AFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  letter-spacing: 1.2px;
`
