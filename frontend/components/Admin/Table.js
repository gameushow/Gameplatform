import React, { Component } from 'react'
import fonts from '../../config/fonts'

export default class Table extends Component {

    constructor(props) {
        super(props)       

        this.state = { 
           "success": true,
            "code": 200,
            "data": [{
                "id": 1,
                "category_id": 2,
                "game_id": 1,
                "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took agalley of type and scrambled it to make a type specimen book. It has  ",
                "score": 74,
                "time": 10,
                "created_at": "2019-10-13 05:47:13",
                "updated_at": "2019-10-13 05:47:13",
                "deleted_at": null
            },{
                "id": 2,
                "category_id": 2,
                "game_id": 1,
                "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took agalley of type and scrambled it to make a type specimen book. It has  ",
                "score": 74,
                "time": 10,
                "created_at": "2019-10-13 05:47:13",
                "updated_at": "2019-10-13 05:47:13",
                "deleted_at": null
            },{
                "id": 3  ,
                "category_id": 2,
                "game_id": 1,
                "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took agalley of type and scrambled it to make a type specimen book. It has  ",
                "score": 74,
                "time": 10,
                "created_at": "2019-10-13 05:47:13",
                "updated_at": "2019-10-13 05:47:13",
                "deleted_at": null
            },{
                "id": 3  ,
                "category_id": 2,
                "game_id": 1,
                "question": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took agalley of type and scrambled it to make a type specimen book. It has  ",
                "score": 74,
                "time": 10,
                "created_at": "2019-10-13 05:47:13",
                "updated_at": "2019-10-13 05:47:13",
                "deleted_at": null
            },
        
        ]
        }
     }

     renderTableData() {
        return this.state.data.map((data, index) => {
           const { id } = data 
           let checkbox = [];
           for(let i = 0; i < this.state.data.length; i++) {
            checkbox.push(
                <td><input type="checkBox" /></td>
            );
          }
           return (
              <tr key={id}>
                 <td>{id}</td>
                 {checkbox}
              </tr>
           )
        })
     }
     //ทำงี้ได้มั้ยงับ

     renderTableHeader() {
        let array = [];
        for(let i = 0; i < this.state.data.length; i++) {
            array.push(
              <th>{i+1}</th>
            );
          }
          return (
            array
          );      
     }
  
     render() {
        return (
           <div>
              <table>
                 <tbody>
                    <tr>
                        <th>Team</th>
                        {this.renderTableHeader()}
                    </tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}


