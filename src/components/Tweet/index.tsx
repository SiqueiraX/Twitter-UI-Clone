import React from 'react';

import { 
    Container, 
    Retweeted, 
    Body, 
    Avatar,
    Content, 
    Header, 
    Dot, 
    Description, 
    ImageContent, 
    Icons, 
    Status, 
    CommentIcon, 
    RetweetIcon, 
    LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>Você retweetou</Retweeted>
          <Body>
              <Avatar />
              <Content>
                  <Header>
                      <strong>Fulano</strong>
                      <span>@fulano</span>
                      <Dot />
                      <time>27 de março de 2021</time>
                  </Header>
                  <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nulla libero eveniet corrupti fugiat quasi similique! Fugit, debitis, mollitia reprehenderit voluptates cumque tempora exercitationem at odio deserunt temporibus fugiat nisi.</Description>
                  <ImageContent />
                  <Icons>
                      <Status>
                          <CommentIcon />
                          15
                      </Status>
                      <Status>
                          <RetweetIcon />
                          19
                      </Status>
                      <Status>
                          <LikeIcon />
                          134
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;