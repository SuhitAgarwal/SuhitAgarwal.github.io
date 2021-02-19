import * as React from 'react'
import styled from 'styled-components'
import { FiSend } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Say hi &mdash;</Title>
        <Tagline>
          Just wanna say hi or are interested in retaining my services for a
          project? <br />
          Hit me up on one of the links at the top or
        </Tagline>
        <a href="mailto:suhitagarwal@gmail.com?subject=Contact%20From%20Portfolio" target="_blank" rel="noreferrer noopener">
          <Button whileHover={{ y: -1 }}>
            <FiSend style={{ marginRight: 7 }} /> Shoot me an email!
          </Button>
        </a>
      </Container>
    </Wrapper>
  )
}

export default Contact

// Styles
const Wrapper = styled.div`
  background: #fff;
  position: relative;
  z-index: 2;
`

const Container = styled.div`
  padding: 10rem 0 14rem;
  max-width: 130rem;
  margin: 0 auto;

  @media (max-width: 1600px) {
    padding: 6rem 2rem 10rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-size: 6.2rem;
`

const Tagline = styled.h3`
  font-weight: 500;
  line-height: 2em;
  margin-bottom: 5rem;

  @media (max-width: 500px) {
    line-height: 1.5em;
  }
`

const Button = styled(motion.button)`
  border: none;
  padding: 0.9em 1.3em;
  font-size: 1.8rem;
  border-radius: 5px;
  background: #0088FF;
  color: #f4f4f4;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  will-change: transform;
  filter: drop-shadow(0 0 0.75rem rgba(0, 136, 255, 0.5));

  &:first-of-type {
    margin-right: 2.5rem;
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;

    &:first-of-type {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`