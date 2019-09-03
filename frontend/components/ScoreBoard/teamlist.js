import React, { Component } from 'react'
import styled, { css } from 'styled-components'


const Th = styled.th`
  text-align:center;
  font-family: Pixel;
  font-size: 2vw;
  line-height: 3vw;
  color: #FFFFFF;
  ${props => props.team && css`
  text-align:left;
  padding-right:15vw;
  padding-left:10vw;
  `}
  color: ${props => props.color}
  
`

const team = [
    {rank: 1, name: 'Republic of Jiha', score: '100'},
    {rank: 2, name: 'United Inortaofdo', score: '2000'},
    {rank: 3, name: 'United Badovaco', score: '200'},
    {rank: 4, name: 'Wekittsbral', score: '500'},
    {rank: 5, name: 'Southsiernguil', score: '500'},
    {rank: 6, name: 'Cala Finslands', score: '1000'},
    {rank: 7, name: 'Nkathe Nianewrial', score: '100'},
    {rank: 8, name: 'Myaneastko', score: '1000'},
    {rank: 9, name: 'Niva Gerrwan', score: '100'},
    {rank: 10, name: 'Western Verdeguern', score: '100'},
  ];
//loop from db

const teamList = team.map((team) =>
    
    <tr>
              <Th>{team.rank}</Th>
              <Th team>{team.name}</Th>
              <Th>{team.score}</Th>
    </tr>
    
);

export default teamList;