import React from 'react';

import {
Container, 
Banner, 
Avatar, 
ProfileData,    
LocationIcon, 
CakeIcon,
Followage,
EditButton } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
            <Avatar />
          </Banner>
          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>
              <h1>SiqueiraX</h1>
              <h2>@SiqueiraXBR</h2>

              <p>
                Brazilian Libertarian front-end programmer <a href="">algum link</a>
              </p>

             <ul>
                <li>
                    <LocationIcon />
                    Mato Grosso, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 14 de outubro de 2002
                </li>
             </ul>

             <Followage>
                 <span>Seguindo <strong> 79</strong></span>
                 <span><strong>890 </strong> Seguidores</span>
             </Followage>
          </ProfileData>
          <Feed />
      </Container>
  );
}

export default ProfilePage;