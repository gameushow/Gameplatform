import React, { Component } from 'react'
import styled from 'styled-components'


const Th = styled.th`
  text-align:center;
  font-family: Pixel;
  font-size: 1.3em;
  line-height: 46px;
  color: #FFFFFF;
  border-bottom: 1px solid #ddd;
  padding-top:6px;
  ${props => props.team && `
    text-align:left;
    padding-left:5vw;
  `}
  color: ${props => props.color}
  
`

const team = [
  { rank: 1, name: 'Cala Finslands', score: '100' },
  { rank: 2, name: 'United Inortaofdo', score: '2000' },
  { rank: 3, name: 'United Badovaco', score: '200' },
  { rank: 4, name: 'Wekittsbral', score: '500' },
  { rank: 5, name: 'Southsiernguil', score: '500' },
  { rank: 6, name: 'Cala Finslands', score: '1000' },
  { rank: 7, name: 'Nkathe Nianewrial', score: '100' },
  { rank: 8, name: 'Myaneastko', score: '1000' },
  { rank: 9, name: 'Niva Gerrwan', score: '100' },
  { rank: 10, name: 'Western Verdeguern', score: '100' },
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