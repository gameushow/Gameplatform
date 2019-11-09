import React, { Component } from 'react'
import ButtonSign from './ButtonSign'
import QuestionDetail from '../../pages/admin/QuestionDetail'
import styled from 'styled-components';
import Background from './Background/Background';

const Fix = styled.div`
    overflow-y:hidden;
`

export default class Scoreanddetail extends Component {
    render() {
        return (
            <div>
                <Fix>
                    <Background/>        
                    <ButtonSign/>
                </Fix>              
                <QuestionDetail/>
            </div>
        )
    }
}
