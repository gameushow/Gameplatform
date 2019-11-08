import React, { Component } from 'react'
import ButtonSign from '../components/ShowSign/ButtonSign';
import Background from '../components/ShowSign/Background/Background';
import QuestionDetail from './admin/QuestionDetail';
import styled from 'styled-components';

const Fix = styled.div`
    overflow-y:hidden;
`

export default class scoreboardlinkdetail extends Component {
    render() {
        return (
            <div>
                <Fix>
                    <Background/>        
                    <ButtonSign/>
                </Fix>               
                <QuestionDetail />
            </div>
        )
    }
}
