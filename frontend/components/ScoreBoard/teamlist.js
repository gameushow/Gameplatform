import React, { Component } from 'react'
import styled from 'styled-components'
import fonts from '../../config/fonts'

const Th = styled.th`
  text-align:center;
  font-size:${fonts.Small};
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
  {  name: 'Cala Finslands', score: '100' },
  {  name: 'United Inortaofdo', score: '2000' },
  {  name: 'United Badovaco', score: '200' },
  {  name: 'Wekittsbral', score: '500' },
  {  name: 'Southsiernguil', score: '500' },
  {  name: 'Cala Finslands', score: '1000' },
  {  name: 'Nkathe Nianewrial', score: '100' },
  {  name: 'Myaneastko', score: '1000' },
  {  name: 'Niva Gerrwan', score: '100' },
  {  name: 'Western Verdeguern', score: '100' },
];

const teamList = team.sort((a, b) => a.score - b.score).map((team,num) =>
  <tr>
    <Th>{num+1}</Th>
    <Th team>{team.name}</Th>
    <Th>{team.score}</Th>
  </tr>
);

export default teamList;