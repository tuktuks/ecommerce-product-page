import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

type MainImageProps = {
  src: string
}
export const MainImage = styled.div<MainImageProps>`
  ${({ src }) => css`
    height: 35rem;
    width: 43rem;
    background-size: 80rem 14.8rem;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    margin-bottom: 2rem;
    border-radius: 2rem;
  `}
`
type ImageProps = {
  src: string
  select: boolean
}

export const Image = styled.div<ImageProps>`
  ${({ src, select }) => css`
    height: 10rem;
    width: 10rem;
    background-size: 80rem 14.8rem;

    background-image: url(${src});
    background-position: center;
    background-size: cover;
    margin-right: 1.2rem;
    border-radius: 1rem;
    cursor: pointer;

    ${select && `border: 3px solid hsl(26, 100%, 55%); `}
  `}
`
export const ImageList = styled.div`
  display: flex;
  justify-content: space-between;
`
