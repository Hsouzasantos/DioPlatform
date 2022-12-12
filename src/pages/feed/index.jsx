import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Hugo Santos" image="https://avatars.githubusercontent.com/u/72454656?v=4" percentual={30}/>
                <UserInfo nome="Hugo Santos" image="https://avatars.githubusercontent.com/u/72454656?v=4" percentual={60}/>
                <UserInfo nome="Hugo Santos" image="https://avatars.githubusercontent.com/u/72454656?v=4" percentual={40}/>
                <UserInfo nome="Hugo Santos" image="https://avatars.githubusercontent.com/u/72454656?v=4" percentual={70}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
