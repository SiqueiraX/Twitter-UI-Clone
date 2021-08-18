import styled, { css } from 'styled-components';

import { Chat, Favorite } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    color: var(--gray);
    margin-left: 35px;
`;
export const Body = styled.div`
    display: flex;
    margin-top: 3px;
    position: relative;
`;
export const Avatar = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);
    position: absolute;
    top: 0;
    left: 0;
`;
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    padding: 0 0 0 59px;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    white-space: nowrap;
    > strong {
        margin-right: 5px;
    }
    > span, time {
        color: var(--gray);
    }
    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
export const Dot = styled.div`
    width: 2px;
    height: 2px;
    margin: 0 10px;
    background: var(--gray);
`;
export const Description = styled.div`
    font-size: 14px;
    margin-top: 5px;
`;
export const ImageContent = styled.div`
    width: 100%;
    height: min(285px, max(175px, 41vw));
    margin-top: 15px;
    background: var(--outline);
    border-radius: 15px;
    cursor: pointer;
    transition: .5s;
    &:hover {
        opacity: .7;
    }
`;
export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 11px auto 0;
    width: 100% ;
    transition: .5s;

    @media (min-width: 330px) {
        width: 63%;
    }

    > div {
        cursor: pointer;
        &:hover {
            opacity: .7;
        }
    }
`;
export const Status = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    > svg {
        margin-right: 5px;
    }

    &:first-child {
        &, >svg path {
            color: var(--gray);
        }
    }
    &:nth-child(2) {
        &, >svg path {
            color: var(--retweet);
        }
    }
    &:nth-child(3) {
        &, >svg path {
            color: var(--like);
        }
    }
`;

const iconCss = css`
    width: 19px;
    height: 19px;
`;

export const CommentIcon = styled(Chat)`${iconCss}`;
export const RetweetIcon = styled(Favorite)`${iconCss}`;
export const LikeIcon = styled(Favorite)`${iconCss}`;
