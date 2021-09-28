import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiBehance } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { FaReadme } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <img src="/logo.svg" alt="logo" width={200} />
        <Menu>
          <Link href="/resume.pdf">
            <StyledLink
              data-scroll
              whileHover={{ textDecoration: 'underline' }}
            >
              <FaReadme
                color="#5496FF"
                size={24}
                style={{ marginRight: 12 }}
              />{' '}
              Resume
            </StyledLink>
          </Link>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridGap: 20,
            }}
          >
            <motion.a
              whileHover={{ rotate: 7 }}
              href="https://github.com/SuhitAgarwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span hidden>Github</span>
              <FaGithub color="#f4f4f4" size={24} />
            </motion.a>
            <motion.a
              whileHover={{ rotate: 7 }}
              href="https://linkedin.com/in/SuhitAgarwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span hidden>LinkedIn</span>
              <FaLinkedin color="#f4f4f4" size={24} />
            </motion.a>
            <motion.a
              whileHover={{ rotate: 7 }}
              href="https://behance.net/SuhitAgarwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span hidden>Behance</span>
              <FaBehance color="#f4f4f4" size={24} />
            </motion.a>
          </div>
        </Menu>
      </Container>
    </Wrapper>
  )
}

export default Navbar

// Styles
const Wrapper = styled.div`
  position: absolute;
  width: 100%;

  @media (max-width: 1600px) {
    padding: 0rem 2rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding: 4rem 2rem;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
`
const StyledLink = styled(motion.a)`
  font-size: 1.8rem;
  color: rgba(84, 150, 255, 1);
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 6rem;
    &::after {
      content: '';
      position: absolute;
      height: 110%;
      width: 1px;
      background: rgba(84, 150, 255, 0.5);
      right: -3rem;
      top: 0;
    }
  }
  `
