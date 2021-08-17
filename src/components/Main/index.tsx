import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>
              <ProfileInfo>
                  <strong>SiqueiraX</strong>
                  <span>55.555 tweets</span>
              </ProfileInfo>
          </Header>

          {/* <ProfilePage /> */}

          <BottomMenu>
              <HomeIcon className="active" />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu>
      </Container>
  );
}

export default Main;